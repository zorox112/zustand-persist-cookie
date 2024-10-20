# zustand-persist-cookie

## Demo
[Demo](https://codesandbox.io/p/sandbox/y2l7hn)
![](./demo.gif)

## Installation
npm:
```
npm i zustand-persist-cookie
```

yarn:
```
yarn add zustand-persist-cookie
```

## Usage

```typescript
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { createCookieStorage } from "zustand-persist-cookie";

export type Theme = "light" | "dark";

export type ThemeStore = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

export const useThemeStore = create(
    persist<ThemeStore>(
        (set) => ({
            theme: "light",
            setTheme: (theme: Theme) => {
                set({ theme });
            },
        }),
        {
            name: "theme-storage",
            storage: createJSONStorage(() => createCookieStorage()),
        }
    )
);
```
