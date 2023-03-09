import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGear, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { HomePage } from "../views/HomePage";
import { SecondTab } from "../views/SecondTab";
import { useColorJoueurXValue, useColorJoueur0Value, useColorBackgroundValue, useColorBackgroundTxtValue } from "../provider/GameProvider";

const Tab = createBottomTabNavigator();

export function TabBar() {

    const backgroundColor = useColorBackgroundValue()
    const colorJoueurX = useColorJoueurXValue()
    const colorJoueur0 = useColorJoueur0Value()
    const backgroundColorText = useColorBackgroundTxtValue()

  return (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                backgroundColor,
                opacity: 0.9,
            },
            tabBarActiveTintColor: colorJoueurX,
            tabBarInactiveTintColor: colorJoueur0,
            headerStyle: {
                backgroundColor,
                opacity: 0.9,
            },
            headerTintColor: backgroundColorText,
        }}>
      <Tab.Screen
          name="Game"
          component={HomePage}
            options={{
                tabBarIcon: () => (
                    <FontAwesomeIcon icon={faGamepad} color={backgroundColorText} size={30} />
                ),
            }}
      />
      <Tab.Screen
          name="Settings"
          component={SecondTab}
            options={{
                tabBarIcon: () => (
                    <FontAwesomeIcon icon={faGear} color={backgroundColorText} size={25} />
                ),
            }}
      />
    </Tab.Navigator>
  );
}