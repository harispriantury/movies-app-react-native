import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./pages/splash/SplashScreen";
import Movies from "./pages/movies";
import Detail from "./pages/movies/Detail";
import { colors } from "./constant/colors";

const Stack = createNativeStackNavigator();
const headersOption = {
  title: "My home",
  headerStyle: {
    backgroundColor: colors.ORANGE,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{ headerShown: false }}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Movies"
          component={Movies}
          options={headersOption}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={headersOption}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
