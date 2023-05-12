import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';
import { AppProvider } from "./context";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <AppProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{
            headerShown:false
          }}  component={Home} />
          <Stack.Screen name="Details" component={Details} getId={({ params }) => params.userId} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;