
import { HomeScreen } from 'app/features/home/screen'
import Head from 'next/head'
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Page() {
  return (
<>
      <Head>
        <title>Home</title>
      </Head>
     
     <HomeScreen /> 
      </>
  )
}
