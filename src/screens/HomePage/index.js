import React from 'react';
import {Text, View, Button} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import PlatformSpecificStatusBar from '../../components/StatusBar';
import Header from '../../components/Header';

export default function Home() {
  return (
    <View>
      <PlatformSpecificStatusBar />
      <Header title="Home" />
      <Text>ss</Text>
      <FAIcon name="home" size={30} color="#aaa900" />
    </View>
  );
}
