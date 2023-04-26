import Preview from "./src/screens/Preview/Preview"
import CameraScreen from "./src/screens/Camera/Camera"
import CropView from "./src/screens/CropView/CropView"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Camera"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Preview" component={Preview} />
        <Stack.Screen name="CropView" component={CropView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
