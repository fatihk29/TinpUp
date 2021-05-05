import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    marginRight: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: -windowHeight / 16,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  icon: {},
  about: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#48d969',
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '800',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
  },
  renderListStyle: {
    padding: 1,
    marginVertical: 8,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'green',
  },
});

export default styles;
