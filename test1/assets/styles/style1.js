import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

var styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(),
    flex: 1,
    padding: 3,
    backgroundColor: '#EFEFEF',
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9a9a',
    borderTopRightRadius: 30,
    borderTopStartRadius: 30,
  },
  title: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9aa9ff',
    borderBottomRightRadius: 30,
    borderBottomStartRadius: 30,
    overflow: 'hidden',
  },
  content: {
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#d6ca1a',
    flexDirection: 'row',
  },
  footer: {
    width: '100%',
    flex: 1 / 5,
    backgroundColor: '#1ad657',
  },
});

export default styles;
