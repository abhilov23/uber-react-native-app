import { View, Text } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: 'Page Not Found' }} />
      <View className="flex-1 items-center justify-center bg-gray-900">
        <Text className="text-6xl mb-4">404</Text>
        <Text className="text-2xl text-white mb-8">Page Not Found</Text>
        <Link href="/" className="bg-blue-500 px-6 py-3 rounded-lg">
          <Text className="text-white font-semibold">Go Home</Text>
        </Link>
      </View>
    </>
  );
}