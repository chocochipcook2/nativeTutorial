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
    width: '100%',
  },
  content2: { paddingHorizontal: 15, marginTop: 20, marginHorizontal: 15 },
  item: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 8,
    paddingLeft: 16,
    overflow: 'hidden',
    borderRadius: 10,
  },
  fourbox: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 12,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  boxtext: {
    paddingLeft: 30,
    width: '99%',
    borderColor: '#F2F2F2',
    borderStyle: 'dotted',
    borderRightWidth: 1,
  },
  footer: {
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  item: {
    flex: 5 / 6,
    // marginHorizontal: 16,
  },
  num: {
    flex: 1 / 6,
    // marginRight: "80%",
  },
  title: {
    fontSize: 32,
  },
  scho: {
    fontSize: 15,
  },
  psysical: {
    fontSize: 15,
  },
  score: {
    fontSize: 32,
  },
  day: {
    fontSize: 15,
  },
});

export default styles;
