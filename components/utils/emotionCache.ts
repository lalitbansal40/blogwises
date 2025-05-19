// utils/emotionCache.ts
import createCache from "@emotion/cache";

export const emotionCache = () => {
    return createCache({ key: "css", prepend: true });
};
