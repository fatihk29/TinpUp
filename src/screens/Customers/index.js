import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import PlatformSpecificStatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import styles from './styles';

export default function Customers() {
  return (
    <View>
      <PlatformSpecificStatusBar />
      <Header title="Customers" />
      <View style={styles.subContainer}>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <IIcon name="people" size={25} color="black" style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
