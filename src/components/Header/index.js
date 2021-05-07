import React, {useRef} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {GeneralImages} from '../../Theme/Images';

const Header = ({navigation, title, icon}) => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={GeneralImages.logo} style={styles.image} />
      </View>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Oktyy');
            return onOpen();
          }}>
          <View style={styles.iconContainer}>{icon}</View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
