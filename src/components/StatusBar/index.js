import React from 'react';
import {Platform, View, StatusBar, SafeAreaView} from 'react-native';
import Colors from '../../Theme/Colors';
import styles from './styles';

const IosStatusBar = backgroundColor => {
  return (
    <View style={[styles.statusBar, {backgroundColor: backgroundColor}]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} />
      </SafeAreaView>
    </View>
  );
};

const PlatformSpecificStatusBar = () => {
  if (Platform.OS === 'android') {
    return <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />;
  } else if (Platform.OS === 'ios') {
    return IosStatusBar(Colors.White);
  }
};

export default PlatformSpecificStatusBar;
