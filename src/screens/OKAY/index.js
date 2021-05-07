import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import PlatformSpecificStatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import FA5Icon from 'react-native-vector-icons/FontAwesome';

const Okay = ({navigation}) => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={{flex: 1}}>
      <PlatformSpecificStatusBar />
      <Header
        navigation={navigation}
        title="Add a New Person"
        icon={<FA5Icon name="user-plus" size={20} color="black" />}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <FA5Icon name="arrow-left" size={20} />
      </TouchableOpacity>
      <View>
        <SafeAreaView>
          <View style={styles.subContainer}>
            <View style={{width: 30}}>
              <FA5Icon name="user" size={30} style={{marginLeft: 5}} />
            </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="name"
            />
          </View>
          <View style={styles.subContainer}>
            <View style={{width: 30}}>
              <FA5Icon name="phone" size={30} style={{marginLeft: 5}} />
            </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Phone"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.subContainer}>
            <View style={{width: 30}}>
              <FA5Icon name="map-marker" size={30} style={{marginLeft: 5}} />
            </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Adress"
            />
          </View>
          <View style={styles.subContainer}>
            <View style={{width: 30}}>
              <FA5Icon name="list" size={30} style={{marginLeft: 5}} />
            </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="List"
            />
          </View>
          <View style={styles.subContainer}>
            <View style={{width: 30}}>
              <FA5Icon name="comments" size={30} style={{marginLeft: 5}} />
            </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Comment"
            />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    flex: 1,
  },
});
export default Okay;
