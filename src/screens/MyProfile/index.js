import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import PlatformSpecificStatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import styles from './styles';

export default function MyProfile() {
  return (
    <View>
      <PlatformSpecificStatusBar />
      <Header
        title="Me"
        icon={
          <IIcon name="settings" size={30} color="black" style={styles.icon} />
        }
      />
    </View>
  );
}
