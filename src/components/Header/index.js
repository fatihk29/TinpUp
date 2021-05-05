import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {GeneralImages} from '../../Theme/Images';

const Header = props => {
  // const openMenu = () => {
  //   navigation.openDrawer();
  // };
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={GeneralImages.logo} style={styles.image} />
      </View>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{props.title}</Text>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity>
          <View style={styles.iconContainer}>{props.icon}</View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
