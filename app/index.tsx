import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-2xl text-white">Home Screen</Text>
      <Link href="/about" className="text-blue-300">
        Go to About
      </Link>
    </View>
  );
}