import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomeLayout() {
  // const [loaded] = useFonts({
  //   Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
  //   InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  //   Silkscreen: require('@tamagui/font-silkscreen/files/slkscr.ttf'),
  // })
  // if (!loaded) {
  //   return null
  // }

  return (
    <SafeAreaProvider>

   
    <Provider>
      <Stack
        screenOptions={{
          headerTitleStyle: {
            // fontFamily: '$silkscreen',
          },
        }}
      />
      <StatusBar style="auto" />
    </Provider></SafeAreaProvider>
  ) 
}
