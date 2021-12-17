import React, { useState, useEffect } from 'react';
import { Image, View, Text, Button, TouchableOpacity } from 'react-native';
import styles from '../../assets/styles/style1';
// apollo
import { useMutation } from '@apollo/client';
// graphQl
import { TRADE } from '../Query';

import CustomButton from '../../CustomButton';

function Home({ navigation }) {
  // const [styles, changeStyle] = useState('usera');
  // function DynamicComponent(props) {
  // const SelectUser = components[props.backgroundColor];
  // return <SelectUser />;
  // }
  // const [buttonClicked, setButtonClicked] = useState(false);
  // const handlePress = (e) => {
  //   setButtonClicked(true);
  //   btnProc();
  // };
  // const btnProc = () => {
  //   navigation.navigate('Page1');
  //   //styles.content.setState({ BackgroundColor: 'red' });
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>header</Text>
      </View>
      <View style={styles.title}>
        <Text>title</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // style={
          //   buttonClicked
          //     ? [(styles.button, { BackgroundColor: 'red' })]
          //     : styles.button
          // }
          // onPress={handlePress}
          onPress={() => navigation.navigate('Page1')}
        >
          <Text>page1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Page2')}>
          <Text>page2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Page3')}>
          <Text>page3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Page4')}>
          <Text>page4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
