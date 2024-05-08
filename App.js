import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/Welcome/Welcome.jsx";
import LoginScreen from "./screens/Login/Login.jsx";
import Login from "./screens/Login/Login.jsx";
import AcountScreen from "./screens/Acount/Acount.jsx"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/Home/Home.jsx"
import SocialScreen from "./screens/SocialMedia/Social.jsx"
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Acount" component={AcountScreen}/>
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Welcome" component={HomeTabs}  />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Social" component={SocialScreen}/>
        </Stack.Navigator> 
      </NavigationContainer>
    </>
  );
}
