// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
// import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      {/* <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Welcome' }}/>        */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Note App Home' }}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: 'Note App Detail' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
