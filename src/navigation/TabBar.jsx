import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage } from "../views/HomePage";
import { SecondTab } from "../views/SecondTab";

const Tab = createBottomTabNavigator();

export function TabBar() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Game" component={HomePage} />
      <Tab.Screen name="Settings" component={SecondTab} />
    </Tab.Navigator>
  );
}