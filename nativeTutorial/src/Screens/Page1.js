import React from 'react';
import {
  useState,
  useEffect,
  Image,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import styles from '../../assets/styles/style1';

function Page1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>header</Text>
      </View>
      <View style={styles.title}>
        <Image
          style={{ height: '100%', width: '100%' }}
          source={require('../../assets/bc1.jpg')}
        ></Image>
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Page1')}>
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

export default Page1;
