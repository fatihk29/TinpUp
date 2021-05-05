import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {GeneralImages} from '../../Theme/Images';

const Header = ({title}) => {
  // const openMenu = () => {
  //   navigation.openDrawer();
  // };
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={GeneralImages.logo} style={styles.logo} />
      </View>

      {/* <TouchableOpacity style={styles.icons}>
        <Text>ServisSoft</Text>
      </TouchableOpacity> */}
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
