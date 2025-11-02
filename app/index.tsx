import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-5">
        {/* Icon */}
        <View className="w-48 h-48 bg-blue-100 rounded-full justify-center items-center mb-8">
          <Text className="text-7xl">🚗</Text>
        </View>

        {/* Title */}
        <Text className="text-4xl font-bold text-center mb-3">
          Welcome to Uber
        </Text>
        
        {/* Subtitle */}
        <Text className="text-lg text-gray-600 text-center mb-12 px-6">
          Your ride, your way. Book in seconds.
        </Text>

        {/* Buttons */}
        <View className="w-full space-y-4">
          <TouchableOpacity 
            className="w-full bg-blue-600 rounded-full py-4"
          >
            <Text className="text-white text-lg font-bold text-center">
              Get Started
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="w-full bg-white border-2 border-blue-600 rounded-full py-4"
          >
            <Text className="text-blue-600 text-lg font-bold text-center">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}