import type {StateStorage} from 'zustand/middleware';
import Cookie from 'js-cookie';

export const createCookieStorage = (params?: Cookies.CookieAttributes): StateStorage => ({
    getItem: (name: string): string | null => {
        return Cookie.get(name) ?? null;
    },
    setItem: (name: string, value: string): void => {
        Cookie.set(name, value, {expires: new Date(new Date().setFullYear(200)), ...params});
    },
    removeItem: (name: string): void => {
        Cookie.remove(name, {expires: new Date(new Date().setFullYear(200)), ...params});
    },
});

export default createCookieStorage;
