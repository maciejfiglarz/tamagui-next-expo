// @ts-nocheck
"use client";
import { useServerInsertedHTML } from "next/navigation";
import { StyleSheet } from "react-native";
import { ProviderWeb } from "app/provider/ProviderWeb";
export function StylesProvider({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    const sheet = StyleSheet.getSheet();
    return (
      <>
        <style
          dangerouslySetInnerHTML={{ __html: sheet.textContent }}
          id={sheet.id}
        />
        {/* zaczerpnięte z pages */}
        {/* <script
          key="tamagui-animations-mount"
          dangerouslySetInnerHTML={{
            // avoid flash of animated things on enter
            __html: `document.documentElement.classList.add('t_unmounted')`,
          }}
        /> */}
      </>
    );
  });
  return <ProviderWeb>{children}</ProviderWeb>;
}
