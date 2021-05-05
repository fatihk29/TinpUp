import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: windowHeight / 15,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'red',
  },
  logoContainer: {},
  logo: {
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
  icons: {
    position: 'absolute',
    left: 16,
    top: 15,
  },
});

export default styles;
