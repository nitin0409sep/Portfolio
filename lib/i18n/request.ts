
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !['en', 'hi', 'es'].includes(locale)) {
        locale = 'en';
    }

    return {
        locale, // Explicit return of locale
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});
