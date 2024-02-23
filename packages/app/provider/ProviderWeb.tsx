import { TamaguiProvider, TamaguiProviderProps, config } from "@my/ui";
import {
  NextThemeProvider,
  useRootTheme,
  useThemeSetting,
} from "@tamagui/next-theme";
// import { createThemeStore, type mode, useThemeStore } from 'app/zustand'
import { useEffect } from "react";

export function ProviderWeb({
  children,
  ...rest
}: Omit<TamaguiProviderProps, "config">) {
  const [theme, setTheme] = useRootTheme();
  // const themeSetting = useThemeSetting()!
  // const { scheme } = useThemeStore()

  // useEffect(() => {
  //   createThemeStore.persist.rehydrate()
  // }, [])

  // const current = () => {
  //   if (scheme === ('system' as mode)) {
  //     return themeSetting.systemTheme as mode
  //   }
  //   return scheme
  // }
  console.log("web theme", config);
  return (
    <NextThemeProvider
      skipNextHead
      onChangeTheme={(next: any) => {
        setTheme(next);
      }}
    >
      <TamaguiProvider
        config={config}
        defaultTheme={"light"}
        disableInjectCSS
        {...rest}
      >
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  );
}
