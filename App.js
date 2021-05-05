import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomBarNavigation from './src/Navigation/BottomTab';

export default function App() {
  return (
    <SafeAreaProvider>
      <BottomBarNavigation />
    </SafeAreaProvider>
  );
}
