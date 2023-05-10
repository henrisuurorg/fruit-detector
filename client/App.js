import Preview from "./src/screens/Preview/Preview"
import CameraScreen from "./src/screens/Camera/Camera"
import ResultsScreen from "./src/screens/Results/Results"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" translucent={true}/>
      <Stack.Navigator
        initialRouteName="Camera"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Preview" component={Preview} />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
