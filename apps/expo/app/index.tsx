// import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'
import { Text } from '@my/ui'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen() {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <Text>home</Text>
      {/* <HomeScreen /> */}
    </SafeAreaView>
  )
}
