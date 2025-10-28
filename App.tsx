
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <>
      <SafeAreaView className="flex-1 items-center justify-center bg-gray-900">
        <StatusBar style="light" translucent={true} />
        <Text className='text-3xl font-bold text-white'>Hello, World!</Text>
      </SafeAreaView>
    </>
  );
}
