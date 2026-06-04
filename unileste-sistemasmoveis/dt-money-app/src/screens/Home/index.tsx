import { useAuthContext } from '@/context/auth.context'
import { Text, TouchableOpacity, View } from 'react-native'

export const Home = () => {
  const { handleLogout } = useAuthContext()

  return (
    <View className="flex-1 items-center justify-center bg-background-primary">
      <TouchableOpacity 
        onPress={handleLogout}
        className="bg-accent-brand p-4 rounded-md"
      >
        <Text className="text-white font-bold">Sair Temporário</Text>
      </TouchableOpacity>
    </View>
  )
}