import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    flexDirection: 'row',
    marginTop: getStatusBarHeight(),
    height: 150,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerLeft: {
    paddingLeft: 20,
    paddingRight: '20%',
    overflow: 'visible',
    flex: 1,
  },
  headerRight: {
    width: 200,
    position: 'absolute',
    left: '70%',
    borderRightWidth: 20,
  },
  Contents: {},
  Boxes: {
    flexWrap: 'wrap',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'visible',
    alignItems: 'flex-start',
    width: '100%',
  },
  content2: { paddingHorizontal: 15, marginTop: 20 },
  item: {
    height: 100,
    width: '100%',
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
    overflow: 'hidden',
    borderRadius: 10,
  },
  footer: {
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#d6ca1a',
    flexDirection: 'row',
  },
});

export default styles;
