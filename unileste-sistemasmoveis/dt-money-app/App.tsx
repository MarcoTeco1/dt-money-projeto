import './src/styles/global.css'

import { SnackBar } from '@/components/SnackBar'
import { AuthContextProvider } from '@/context/auth.context'
import { SnackbarContextProvider } from '@/context/snackbar.context'
import NavigationRoutes from '@/routes'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <SnackbarContextProvider>
        <AuthContextProvider>
          <NavigationRoutes />
          
          <SnackBar />
        </AuthContextProvider>
      </SnackbarContextProvider>
    </SafeAreaProvider>
  )
}