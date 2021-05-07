import React from 'react';
import BottomBarNavigation from './src/Navigation/BottomTab';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Okay from './src/screens/OKAY';

const Stack = new createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Home" component={BottomBarNavigation} />
        <Stack.Screen name="Oktyy" component={Okay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
