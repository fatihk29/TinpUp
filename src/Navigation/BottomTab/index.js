import React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import HomePage from '../../screens/HomePage';

function Home() {
  return (
    <View style={styles.home}>
      <FAIcon name="home" size={30} color="#900" />
    </View>
  );
}

function Contact({navigation}) {
  return (
    <View style={styles.contact}>
      <Text style={styles.text}>Service</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function About({navigation}) {
  return (
    <View style={styles.about}>
      <Text style={styles.text}>Customer</Text>
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
        component={Contact}
        options={{
          tabBarLabel: 'Customer',
          tabBarIcon: ({color, size}) => (
            <FAIcon name="cog" size={size} color="#4B0082" />
          ),
        }}
      />
      <Tab.Screen
        name="+"
        component={About}
        options={{
          tabBarLabel: 'Expand',
          tabBarIcon: ({color, size}) => (
            <FAIcon name="expand" size={size} color="#4B0082" />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color, size}) => (
            <FAIcon name="map-marker" size={size} color="#4B0082" />
          ),
        }}
      />
      <Tab.Screen
        name="Customer"
        component={About}
        options={{
          tabBarLabel: 'About',
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
