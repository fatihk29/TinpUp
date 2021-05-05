import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: windowHeight / 15,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(66, 164, 220)',
  },
  image: {
    width: windowHeight / 15,
    height: windowHeight / 15,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    letterSpacing: 1,
  },
  subContainer: {
    position: 'absolute',
    right: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default styles;
