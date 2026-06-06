import './src/styles/global.css'

import { SnackBar } from '@/components/SnackBar'
import { AuthContextProvider } from '@/context/auth.context'
import { BottomSheetProvider } from '@/context/bottom-sheet.context'
import { SnackbarContextProvider } from '@/context/snackbar.context'
import { TransactionContextProvider } from '@/context/transaction.context'
import NavigationRoutes from '@/routes'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context' 

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <SafeAreaProvider>
        <SnackbarContextProvider>
          <AuthContextProvider>
            
            <TransactionContextProvider>
              <BottomSheetProvider>
                <NavigationRoutes />
                <SnackBar />
              </BottomSheetProvider>
            </TransactionContextProvider>

          </AuthContextProvider>
        </SnackbarContextProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}