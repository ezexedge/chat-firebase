import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ChatListScreen from "../screens/ChatListScreen";
import ChatListSettingsScreen from "../screens/ChatSettingsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { SimpleLineIcons } from "@expo/vector-icons";
import ChatScreen from "../screens/ChatScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerTitle: "" }}>
      <Tab.Screen
        name="ChatList"
        component={ChatListScreen}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="md-chatbubble-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => {
            return (
              <SimpleLineIcons name="settings" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="ChatSettings"
        component={ChatListSettingsScreen}
        options={{
          headerTitle: "Settings",
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
