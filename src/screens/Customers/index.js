import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import FA5Icon from 'react-native-vector-icons/Ionicons';
import PlatformSpecificStatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import styles from './styles';

export default function Customers() {
  return (
    <View>
      <PlatformSpecificStatusBar />

      <Header title="Home" />
      <View style={styles.subContainer}>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <FA5Icon
              name="people"
              size={20}
              color="black"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
