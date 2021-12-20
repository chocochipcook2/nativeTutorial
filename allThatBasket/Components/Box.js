import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Box = (props) => {
  return (
    <View
      style={[
        styles.square,
        {
          backgroundColor: props.color,
          marginLeft: props.ml,
          marginRight: props.mr,
        },
      ]}
    >
      <View style={[styles.item]}>
        <Text style={styles.itemNum}>{props.num}</Text>

        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  );
};
{
  /* <View style={styles.itemTop}> </View> */
}
const styles = StyleSheet.create({
  square: {
    flex: 1 / 2,
    height: 120,
    alignItems: 'flex-start',
    overflow: 'hidden',
    borderRadius: 10,
  },
  itemTop: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemNum: {
    maxWidth: '50%',
    paddingBottom: 10,
    color: 'white',
    fontSize: 36,
    fontWeight: '500',
  },
  item: {
    width: 150,
    height: 100,
    padding: 15,
    borderRadius: 10,

    marginBottom: 20,
  },
  itemText: {
    maxWidth: '80%',
    fontSize: 12,
    color: 'white',
  },
});

export default Box;
