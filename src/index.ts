import type {StateStorage} from 'zustand/middleware';
import Cookie from 'js-cookie';

export const createCookieStorage = (params?: Cookies.CookieAttributes): StateStorage => ({
    getItem: (name: string): string | null => {
        return Cookie.get(name) ?? null;
    },
    setItem: (name: string, value: string): void => {
        Cookie.set(name, value, {expires: 100000, ...params});
    },
    removeItem: (name: string): void => {
        Cookie.remove(name, {expires: 100000, ...params});
    },
});

export default createCookieStorage;
