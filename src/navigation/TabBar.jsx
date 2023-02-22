import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGear, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { HomePage } from "../views/HomePage";
import { SecondTab } from "../views/SecondTab";
import { useColorJoueurXValue, useColorJoueur0Value, useColorBackgroundValue, useColorBackgroundTxtValue } from "../provider/GameProvider";

const Tab = createBottomTabNavigator();

export function TabBar() {

  return (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                backgroundColor: useColorBackgroundValue(),
                opacity: 0.9,
            },
            tabBarActiveTintColor: useColorJoueurXValue(),
            tabBarInactiveTintColor: useColorJoueur0Value(),
            headerStyle: {
                backgroundColor: useColorBackgroundValue(),
                opacity: 0.9,
            },
            headerTintColor: useColorBackgroundTxtValue(),
        }}>
      <Tab.Screen
          name="Game"
          component={HomePage}
            options={{
                tabBarIcon: () => (
                    <FontAwesomeIcon icon={faGamepad} color={useColorBackgroundTxtValue()} size={30} />
                ),
            }}
      />
      <Tab.Screen
          name="Settings"
          component={SecondTab}
            options={{
                tabBarIcon: () => (
                    <FontAwesomeIcon icon={faGear} color={useColorBackgroundTxtValue()} size={25} />
                ),
            }}
      />
    </Tab.Navigator>
  );
}