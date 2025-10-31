import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import './global.css';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-white'> 
        <Text>Hello worlld</Text>
        <StatusBar barStyle="dark-content" />
    </View>
  );
}