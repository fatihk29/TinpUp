import React from 'react';
import {View} from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import PlatformSpecificStatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import styles from './styles';

export default function Home() {
  return (
    <View>
      <PlatformSpecificStatusBar />
      <Header
        title="Expand"
        icon={
          <FA5Icon
            name="user-plus"
            size={20}
            color="black"
            style={styles.icon}
          />
        }
      />
    </View>
  );
}
