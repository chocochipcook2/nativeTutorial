import React, { useState, useEffect } from 'react';
import {
  Image,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import SVGImg from '../assets/record.svg';
import homeSVG from '../assets/Home.svg';

import styles from '../assets/styles/style1';
import Box from '../Components/Box';
// apollo
import { useMutation } from '@apollo/client';
// graphQl
import { TRADE } from '../Query';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-141244e29d72',
    title: 'Fourth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-456431e29d72',
    title: 'Fifth Item',
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const renderItem = ({ item }) => <Item title={item.title} />;

function Home({ navigation }) {
  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={{ fontSize: 30, fontWeight: '500' }}>
            {/* {props.user.name} */}dummy
            <Text style={{ fontSize: 24 }}>님</Text>
          </Text>

          <Text style={{ fontSize: 24 }}>환영합니다.</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.UserImage}>
            <Image
              source={require('../assets/icon.png')}
              style={{ height: 100, width: 100 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.Contents}>
        <View style={styles.Boxes}>
          <Box
            text={'주간\n수업 스케줄'}
            num={1}
            color={'#335AC8'}
            ml={10}
            mr={5}
          ></Box>
          <Box
            text={'수강생\n현황'}
            num={2}
            color={'#5BAFD0'}
            ml={5}
            mr={10}
          ></Box>
        </View>
        <View style={styles.Boxes}>
          <Box
            text={'수강생\n코칭 기록'}
            num={3}
            color={'#D86C35'}
            ml={10}
            mr={5}
          ></Box>
          <Box
            text={'커뮤니티\n현황'}
            num={4}
            color={'#D05BAF'}
            ml={5}
            mr={10}
          ></Box>
        </View>
        <View style={styles.content2}>
          <Text>최근 코칭기록</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            onEndReached={() => navigation.navigate('Page2')}
            //horizontal={true}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.replace('Home')}
          style={{ alignItems: 'center' }}
        >
          {/* <homeSVG width={30} height={30} /> */}
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace('Page1')}
          style={{ alignItems: 'center' }}
        >
          <SVGImg width={30} height={30} />
          <Text>코칭기록</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Page2')}>
          <Text>page2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace('Page3')}>
          <Text>page3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace('Page4')}>
          <Text>page4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const localstyle = StyleSheet.create({
  container: {},
});

export default Home;
