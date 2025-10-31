import { View, Text } from 'react-native';
import './global.css';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'yellow' }}> 
        <View className="flex-1 items-center justify-center bg-red-500">
          <Text className="text-2xl text-blue-500">Hello world</Text>
        </View>
    </View>
  );
}