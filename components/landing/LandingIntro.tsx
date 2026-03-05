/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/purity */
"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Line } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import * as THREE from "three";

const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
    // { code: "es", label: "Español", flag: "🇪🇸" },
];

// Convert lat/lng to 3D position on sphere
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
}

// Generate points on a sphere for the dotted globe effect
function generateGlobePoints(count: number, radius: number) {
    const points: THREE.Vector3[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < count; i++) {
        const theta = (2 * Math.PI * i) / goldenRatio;
        const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(theta) * Math.sin(phi);
        points.push(new THREE.Vector3(x, y, z));
    }
    return points;
}

// Generate arc points between two positions on the sphere
function generateArcPoints(start: THREE.Vector3, end: THREE.Vector3, radius: number, segments: number = 50) {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const point = new THREE.Vector3().lerpVectors(start, end, t);
        // Push the point outward to create an arc above the sphere
        const elevation = 1 + 0.15 * Math.sin(Math.PI * t);
        point.normalize().multiplyScalar(radius * elevation);
        points.push(point);
    }
    return points;
}

// Dotted globe mesh
function DottedGlobe() {
    const globeRef = useRef<THREE.Group>(null);
    const points = useMemo(() => generateGlobePoints(3500, 2), []);

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(points.length * 3);
        points.forEach((p, i) => {
            positions[i * 3] = p.x;
            positions[i * 3 + 1] = p.y;
            positions[i * 3 + 2] = p.z;
        });
        geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        return geo;
    }, [points]);

    useFrame((_, delta) => {
        if (globeRef.current) {
            globeRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <group ref={globeRef}>
            {/* Dotted sphere surface */}
            <points geometry={geometry}>
                <pointsMaterial size={0.035} color="#818cf8" transparent opacity={0.7} sizeAttenuation />
            </points>

            {/* Wireframe sphere outline */}
            <mesh>
                <sphereGeometry args={[2, 48, 48]} />
                <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.1} />
            </mesh>

            {/* Inner glow sphere */}
            <mesh>
                <sphereGeometry args={[1.95, 32, 32]} />
                <meshBasicMaterial color="#1e1b4b" transparent opacity={0.4} />
            </mesh>

            {/* Outer glow sphere */}
            <mesh>
                <sphereGeometry args={[2.08, 32, 32]} />
                <meshBasicMaterial color="#6366f1" transparent opacity={0.03} side={THREE.BackSide} />
            </mesh>
        </group>
    );
}

// Location pin on the globe
function LocationPin({ lat, lng, globeRotation }: { lat: number; lng: number; globeRotation: React.MutableRefObject<number> }) {
    const pinRef = useRef<THREE.Group>(null);
    const position = useMemo(() => latLngToVector3(lat, lng, 2.05), [lat, lng]);

    useFrame((_, delta) => {
        if (pinRef.current) {
            globeRotation.current += delta * 0.15;
            const rotatedPos = position.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), globeRotation.current);
            pinRef.current.position.copy(rotatedPos);
            pinRef.current.lookAt(0, 0, 0);
        }
    });

    return (
        <group ref={pinRef} position={[position.x, position.y, position.z]}>
            <Html center distanceFactor={5} style={{ pointerEvents: "none" }}>
                <div className="flex flex-col items-center animate-bounce">
                    <MapPin className="w-6 h-6 text-red-500 drop-shadow-lg" fill="#ef4444" />
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-[-2px] shadow-lg shadow-red-500/50" />
                </div>
            </Html>
        </group>
    );
}

// Decorative arcs
function GlobeArcs() {
    const arcsRef = useRef<THREE.Group>(null);

    const arcs = useMemo(() => {
        const arcData = [
            { start: latLngToVector3(40.7, -74, 2), end: latLngToVector3(51.5, -0.1, 2) },
            { start: latLngToVector3(35.6, 139.6, 2), end: latLngToVector3(28.6, 77.2, 2) },
            { start: latLngToVector3(-33.8, 151.2, 2), end: latLngToVector3(1.3, 103.8, 2) },
        ];
        return arcData.map((arc) => {
            const pts = generateArcPoints(arc.start, arc.end, 2, 50);
            return pts.map((p) => [p.x, p.y, p.z] as [number, number, number]);
        });
    }, []);

    useFrame((_, delta) => {
        if (arcsRef.current) {
            arcsRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <group ref={arcsRef}>
            {arcs.map((arcPoints, i) => (
                <Line key={i} points={arcPoints} color="#818cf8" transparent opacity={0.4} lineWidth={1.5} />
            ))}
        </group>
    );
}

// Fixed camera component to prevent auto-adjustment
function FixedCamera() {
    const { camera } = useThree();
    
    useFrame(() => {
        // Constantly lock camera position to prevent any auto-adjustment
        if (camera.position.z !== 5) {
            camera.position.set(0, 0, 5);
        }
        // Only set FOV if it's a PerspectiveCamera
        if (camera instanceof THREE.PerspectiveCamera && camera.fov !== 50) {
            camera.fov = 50;
            camera.updateProjectionMatrix();
        }
    });
    
    useEffect(() => {
        // Set initial camera position
        camera.position.set(0, 0, 5);
        if (camera instanceof THREE.PerspectiveCamera) {
            camera.fov = 50;
            camera.updateProjectionMatrix();
        }
    }, [camera]);
    
    return null;
}

// Main globe scene
function GlobeScene({ userLocation }: { userLocation: { lat: number; lng: number } | null }) {
    const globeRotation = useRef(0);

    return (
        <>
            <FixedCamera />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.2} />
            <pointLight position={[-10, -5, -10]} intensity={0.3} color="#818cf8" />
            <DottedGlobe />
            <GlobeArcs />
            {userLocation && <LocationPin lat={userLocation.lat} lng={userLocation.lng} globeRotation={globeRotation} />}
        </>
    );
}

export function LandingIntro() {
    const [visible, setVisible] = useState(true);
    const [exiting, setExiting] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
    const [selectedLang, setSelectedLang] = useState<string | null>(null);
    const globeContainerRef = useRef<HTMLDivElement>(null);
    const locale = useLocale();
    const router = useRouter();
    const t = useTranslations("Landing");

    useEffect(() => {
        setMounted(true);
    }, []);

    // Pre-compute particle data client-side only to avoid hydration mismatch
    const particles = useMemo(() => {
        if (!mounted) return [];
        return Array.from({ length: 50 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            targetY: Math.random() * -200,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
        }));
    }, [mounted]);

    // Lock body scroll while landing is visible
    useEffect(() => {
        if (visible) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [visible]);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setUserLocation({
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude,
                    });
                },
                () => {
                    setUserLocation({ lat: 28.6139, lng: 77.209 });
                }
            );
        } else {
            setUserLocation({ lat: 28.6139, lng: 77.209 });
        }
    }, []);

    const handleLanguageSelect = useCallback(
        (code: string) => {
            setSelectedLang(code);
            document.cookie = `NEXT_LOCALE=${code};path=/;max-age=31536000`;
            if (code !== locale) {
                router.refresh();
            }
        },
        [locale, router]
    );

    const handleStart = useCallback(() => {
        setExiting(true);
        setTimeout(() => setVisible(false), 800);
    }, []);

    if (!visible) return null;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: exiting ? 0 : 1 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a1a] overflow-hidden"
                >
                    {/* Background particles */}
                    <div className="absolute inset-0 overflow-hidden">
                        {particles.map((p, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
                                initial={{ x: p.x, y: p.y }}
                                animate={{
                                    y: [null, p.targetY],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: p.duration,
                                    repeat: Infinity,
                                    delay: p.delay,
                                }}
                            />
                        ))}
                    </div>

                    {/* Content wrapper - 70% of viewport */}
                    <div
                        className="flex flex-col items-center justify-center w-full h-full z-10"
                        style={{
                            maxWidth: "70vw",
                            maxHeight: "70vh",
                            gap: "clamp(0.5rem, 2vh, 1.5rem)",
                        }}
                    >
                        {/* Title */}
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: exiting ? 0 : 1, y: exiting ? -30 : 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center shrink-0"
                        >
                            <h1 className="text-xl md:text-3xl font-bold text-white tracking-tight pt-1">{t("title")}</h1>
                            <p className="text-indigo-300/70 text-xs md:text-sm mt-1 pb-1">{t("subtitle")}</p>
                        </motion.div>

                        {/* Globe - centered between title and controls */}
                        <motion.div
                            ref={globeContainerRef}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: exiting ? 0 : 1,
                                scale: exiting ? 1.5 : 1,
                            }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                height: "45vh",
                            }}
                        >
                            <Canvas
                                camera={{ position: [0, 0, 5], fov: 50 }}
                                gl={{ antialias: true, alpha: true }}
                                dpr={[1, 2]}
                                resize={{ scroll: false }}
                                style={{
                                    background: "transparent",
                                    pointerEvents: "none"
                                }}
                                onCreated={(state) => {
                                    const { camera, gl } = state;
                                    camera.position.set(0, 0, 5);
                                    if (camera instanceof THREE.PerspectiveCamera) {
                                        camera.fov = 50;
                                        camera.updateProjectionMatrix();
                                    }
                                    gl.domElement.style.pointerEvents = "none";
                                }}
                            >
                                <GlobeScene userLocation={userLocation} />
                            </Canvas>
                        </motion.div>

                        {/* Bottom controls */}
                        <div className="flex flex-col items-center shrink-0 pb-4 mt-0">
                        {/* Language Selection */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: exiting ? 0 : 1, y: exiting ? 20 : 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <p className="text-indigo-300/60 text-xs md:text-sm flex items-center gap-2">
                                <Globe className="w-3.5 h-3.5" />
                                {t("choose_language")}
                            </p>
                            <div className="flex gap-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLanguageSelect(lang.code)}
                                        className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 border ${(selectedLang || locale) === lang.code
                                            ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                                            : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
                                            }`}
                                    >
                                        <span className="mr-2">{lang.flag}</span>
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                            {/* Start Button */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: exiting ? 0 : 1, y: exiting ? 20 : 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                onClick={handleStart}
                                className="mt-3 group relative px-6 py-2.5 rounded-full bg-indigo-600 text-white font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-105"
                            >
                                <span className="relative z-10">{t("start")}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Subtle bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-950/20 to-transparent pointer-events-none" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
