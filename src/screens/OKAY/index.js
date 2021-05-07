import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
  FlatList,
  Text,
} from 'react-native';
import PlatformSpecificStatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import FA5Icon from 'react-native-vector-icons/FontAwesome';
import MCIIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Okay = ({navigation}) => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {key: Math.random().toString(), value: goalTitle},
    ]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      console.log(goalId);
      return currentGoals.filter(goal => goal.key !== goalId);
    });
  };
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
          navigation.navigate({
            name: 'Home',
            params: {post: 'asdasdasd'},
            merge: true,
          });
        }}>
        <MCIIcon name="hand-okay" size={30} />
      </TouchableOpacity>
      <Button title="Add" onPress={addGoalHandler.bind(this, enteredGoal)} />
      <View>
        <SafeAreaView>
          <View style={styles.subContainer}>
            <View style={{width: 30}}>
              <FA5Icon name="user" size={30} style={{marginLeft: 5}} />
            </View>
            <TextInput
              style={styles.input}
              onChangeText={goalInputHandler}
              value={enteredGoal}
              placeholder="name"
            />
          </View>
          <FlatList
            keyExtractor={(item, index) => item.key}
            data={courseGoals}
            renderItem={itemData => (
              <TouchableOpacity
                onPress={removeGoalHandler.bind(this, itemData.item.key)}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{marginHorizontal: 10}}>{itemData.index}</Text>
                  <Text>{itemData.item.value}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          {/* <View style={styles.subContainer}>
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
          </View> */}
          {/* <View style={styles.subContainer}>
            <View style={{width: 30}}>
              <FA5Icon name="map-marker" size={30} style={{marginLeft: 5}} />
            </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Adress"
            />
          </View> */}
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
