import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { useMutation } from '@apollo/client';

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
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
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
  // const [Rxdata, setRxdata] = React.useState({
  //   data: [],
  // });

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
        //console.log(response.data.trade);
        //setRxdata({ data: response.data.trade });
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
  const _getData2 = () => {
    trade({
      variables: {
        page: state.page,
        stx: '',
        email: '',
        cate1: '',
        cate2: '',
        cate3: '',
      },
    })
      .then((response) => {
        //console.log(response.data.trade);
        //setRxdata({ data: state.data.concat(response.data.trade) });
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
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={state.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.img1}
        onEndReached={() => _getData2()}
        //horizontal={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    height: 300,
    width: 200,
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    overflow: 'visible',
  },
  title: {
    fontSize: 24,
  },
});

export default App;
// import React, { useState } from 'react';
// import { Image, View, Text, Button, TouchableOpacity } from 'react-native';
// import styles from '../../assets/styles/style1';

// function Page3({ navigation }) {
//   const [buttonClicked, setButtonClicked] = useState('../../assets/bc3.jpg');
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text>header</Text>
//       </View>
//       <View style={styles.title}>
//         <Image
//           style={{ height: '100%', width: '100%' }}
//           source={require('../../assets/bc3.jpg')}
//           onPress={() => setButtonClicked('../../assets/pt1.jpg')}
//         ></Image>
//       </View>
//       <View style={styles.content}>
//         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//           <Text>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Page1')}>
//           <Text>page1</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Page2')}>
//           <Text>page2</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Page3')}>
//           <Text>page3</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Page4')}>
//           <Text>page4</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// export default Page3;
