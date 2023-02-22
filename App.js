import { NavigationContainer } from '@react-navigation/native';
import { TabBar } from './src/navigation/TabBar';
import { GameProvider } from "./src/provider/GameProvider";

export default function App() {

  return (
      <GameProvider>
          <NavigationContainer>
              <TabBar/>
          </NavigationContainer>
      </GameProvider>
  );

}