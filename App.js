import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { routes } from './src/utils/routs'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          routes.map((route, index) => (
            <Stack.Screen {...route} key={index} />
          ))
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}