import { NavigationContainer } from "@react-navigation/native";
import AuthScreen from "../screens/AuthScreen";
import ChatSettingsScreen from "../screens/ChatSettingsScreen";
import MainNavigator from "./MainNavigator";

const AppNavigator = () => {
  const isAuth = false;
  return (
    <NavigationContainer>
      {isAuth && <MainNavigator />}
      {!isAuth && <AuthScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
