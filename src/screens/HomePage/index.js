import React from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import PlatformSpecificStatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import styles from './styles';

const DATALIST = [
  {
    id: 'bd7acb28asdsba',
    title: 'One',
  },
  {
    id: '3a05bd91aa97f63',
    title: 'Two',
  },
  {
    id: '58694a0f229d72',
    title: 'Three',
  },
  {
    id: '58694a0fb5571e29d72',
    title: 'Four',
  },
  {
    id: '5862345571e29d72',
    title: 'five',
  },
  {
    id: '58694a0f9dasd2',
    title: 'Six',
  },
  {
    id: '58694a0634asd',
    title: 'Seven',
  },
  {
    id: '5869asfg5772',
    title: 'Eight',
  },
  {
    id: '586as643fa72',
    title: 'Nine',
  },
  {
    id: '586783a0fa72',
    title: 'Ten',
  },
  {
    id: '586a6780fa72',
    title: 'Eleven',
  },
  {
    id: '58678a0fa72',
    title: 'Twelve',
  },
  {
    id: '586678sa0fa72',
    title: 'Thirteeen',
  },
  {
    id: '586679fa72',
    title: 'Fourteen',
  },
  {
    id: '580678fa72',
    title: 'Fifteen',
  },
];

const FILTERLIST = [
  {
    id: '190512sdasd',
    title: 'Mechanical',
  },
  {
    id: 'as325151',
    title: 'Electrical',
  },
  {
    id: 'few64316',
    title: 'Inspection',
  },
  {
    id: '23516g125',
    title: 'White Appliances',
  },
  {
    id: '133463654fdh',
    title: 'Pipeline',
  },
  {
    id: '5xskl8wee',
    title: 'Goods',
  },
];

export default function Home() {
  const renderFilterList = ({item}) => (
    <TouchableOpacity>
      <View style={styles.renderListStyle}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <PlatformSpecificStatusBar />
      <Header
        title="Home"
        icon={
          <FA5Icon
            name="user-plus"
            size={20}
            color="black"
            style={styles.icon}
          />
        }
      />
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: 'white'}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={FILTERLIST}
              renderItem={renderFilterList}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={{flex: 1}}>
            <FlatList
              data={DATALIST}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
