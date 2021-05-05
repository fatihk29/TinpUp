import React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import IIcon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import HomePage from '../../screens/HomePage';
import Customers from '../../screens/Customers';
import MyProfile from '../../screens/MyProfile';
import Expand from '../../screens/Expand';

function Map({navigation}) {
  return (
    <View style={styles.about}>
      <Text style={styles.text}>Under Construction</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#006400',
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home Page',
          tabBarIcon: ({color, size}) => (
            <FAIcon name="home" size={size} color="#4B0082" />
          ),
        }}
      />
      <Tab.Screen
        name="Service"
        component={Customers}
        options={{
          tabBarLabel: 'Customers',
          tabBarIcon: ({color, size}) => (
            <IIcon name="people" size={size} color="#4B0082" />
          ),
        }}
      />
      <Tab.Screen
        name="+"
        component={Expand}
        options={{
          tabBarLabel: 'Expand',
          tabBarIcon: ({color, size}) => (
            <FAIcon name="expand" size={size} color="#4B0082" />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({color, size}) => (
            <FAIcon name="map-marker" size={size} color="#4B0082" />
          ),
        }}
      />
      <Tab.Screen
        name="Customer"
        component={MyProfile}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({color, size}) => (
            <FAIcon name="user" size={size} color="#4B0082" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function TabNavigation() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}
