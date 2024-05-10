import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Login/Login.jsx";
import Tabs from "./Tabs.jsx";
import Social from "../screens/SocialMedia/Social.jsx";
import { useAuth } from "../contexts/auth.jsx";

const Stack = createNativeStackNavigator();

const Navigation = () => {
const hasslogged = useAuth((state) => state.haslogged);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!hasslogged ? (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Social" component={Social} />
          </>
        ) : (
          <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
