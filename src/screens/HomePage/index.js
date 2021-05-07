import React, {useRef, useState} from 'react';
import {Text, View, TouchableOpacity, FlatList, Button} from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import PlatformSpecificStatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import MIIcon from 'react-native-vector-icons/MaterialIcons';
import {Modalize} from 'react-native-modalize';
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

export default function Home({navigation, route}) {
  const modalizeRef = useRef(null);
  const [selectedData, setSelectedData] = useState({});
  const [showData, setShowData] = useState();

  const onOpen = item => {
    modalizeRef.current?.open();
    setSelectedData(item);
  };

  React.useEffect(() => {
    console.log('110', route);
    setShowData(route.params);
    if (route.params) {
    }
  }, [route.params]);

  const renderFilterList = ({item}) => (
    <TouchableOpacity>
      <View style={styles.renderListStyle}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => onOpen(item)}
        style={styles.itemSubContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => console.log(route)}>
        <MIIcon name="delete" size={25} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <PlatformSpecificStatusBar />
      <Header
        navigation={navigation}
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
      <Modalize
        ref={modalizeRef}
        scrollViewProps={{showsVerticalScrollIndicator: false}}
        snapPoint={500}
        HeaderComponent={
          <View style={styles.modalizeStyle}>
            <Text
              style={{
                marginHorizontal: 5,
                fontSize: 20,
              }}>
              Edit
            </Text>
            <TouchableOpacity style={styles.iconContainer}>
              <MIIcon
                name="delete"
                size={25}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        }
        withHandle={false}>
        <View>
          <Text style={{marginLeft: 5, fontSize: 16}}>
            {selectedData.title}
          </Text>
          <Text style={{marginLeft: 5, fontSize: 16}}>{selectedData.id}</Text>
        </View>
      </Modalize>
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
