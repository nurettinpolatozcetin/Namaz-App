import {StyleSheet} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  datetxt: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  menuicon: {
    width: 30,
    height: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  prayer: {
    marginTop: 80,
    marginLeft: 20,
  },
  times: {
    marginTop: 20,
  },
  prayerback: {
    padding: 20,
    margin: 10,
    backgroundColor: '#ffff',
    borderRadius: 12,
  },
});
