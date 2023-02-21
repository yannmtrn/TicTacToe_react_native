import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGear, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { HomePage } from "../views/HomePage";
import { SecondTab } from "../views/SecondTab";

const Tab = createBottomTabNavigator();

export function TabBar() {

  return (
    <Tab.Navigator>
      <Tab.Screen
          name="Game"
          component={HomePage}
            options={{
                headerStyle: {
                    backgroundColor: '#121212',
                    opacity: 0.9,
                },
                headerTintColor: '#fff',
                tabBarIcon: () => (
                    <FontAwesomeIcon icon={faGamepad} color={"black"} size={30} />
                ),
            }}
      />
      <Tab.Screen
          name="Settings"
          component={SecondTab}
            options={{
                headerStyle: {
                    backgroundColor: '#121212',
                    opacity: 0.9,
                },
                headerTintColor: '#fff',
                tabBarIcon: () => (
                    <FontAwesomeIcon icon={faGear} color={"black"} size={25} />
                ),
            }}
      />
    </Tab.Navigator>
  );
}