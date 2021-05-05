import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {GeneralImages} from '../../Theme/Images';
import {Modalize} from 'react-native-modalize';

const Header = props => {
  const modalizeRef = useRef(null);
  const [selectedData, setSelectedData] = useState();

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={GeneralImages.logo} style={styles.image} />
      </View>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{props.title}</Text>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={onOpen}>
          <View style={styles.iconContainer}>{props.icon}</View>
        </TouchableOpacity>
      </View>
      {/* <Modalize
        ref={modalizeRef}
        scrollViewProps={{showsVerticalScrollIndicator: false}}
        snapPoint={300}
        handlePosition="inside"
        HeaderComponent={
          <View>
            <Text style={{marginLeft: 5, fontSize: 20}}>Header</Text>
          </View>
        }
        withHandle={false}>
        <View>
          <Text style={{marginLeft: 5, fontSize: 16}}>aaaaaaaaaaa</Text>
        </View>
      </Modalize> */}
    </View>
  );
};

export default Header;
