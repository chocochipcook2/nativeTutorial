import React, { useEffect, useState } from 'react';
import {
  Image,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from '../../assets/styles/style1';
// apollo
import { useMutation } from '@apollo/client';

import { TRADE } from '../Query';

import CustomButton from '../../CustomButton';

function Page2({ navigation }) {
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    _getData();
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);
  const [trade, { loading, error }] = useMutation(TRADE);
  const [state, setState] = React.useState({
    data: [],
    page: 0,
    refreshing: false,
  });
  const [Rxdata, setRxdata] = React.useState({
    data: [],
  });

  const _getData = () => {
    trade({
      variables: {
        page: 0,
        stx: '',
        email: '',
        cate1: '',
        cate2: '',
        cate3: '',
      },
    })
      .then((response) => {
        console.log(response.data.trade);
        setRxdata({ data: response.data.trade });
        setState({
          data: state.data.concat(response.data.trade),
          page: state.page + 1,
          refreshing: state.refreshing,
        });
      })

      .catch((error) => {
        setState({
          data: state.data,
          page: state.page,
          refreshing: false,
        });

        console.log('ERROR ==>', error);

        //console.log('ERROR1 ==>', error.networkError.result.errors);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>header</Text>
      </View>
      <View style={styles.title}>
        <Image
          style={{ height: '100%', width: '100%' }}
          source={require('../../assets/bc2.jpg')}
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

export default Page2;
