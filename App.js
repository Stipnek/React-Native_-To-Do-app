import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from'@react-navigation/native-stack';

import Log from './Screens/Log';
import Home from './Screens/Home';
import Detail from './Screens/Detail';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='Login' component = {Log} />
        <Stack.Screen name='Home' component = {Home} />
        <Stack.Screen name='Detail' component = {Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


