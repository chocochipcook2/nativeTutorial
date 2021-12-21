import React, { useEffect } from 'react';
import {
  Image,
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../assets/styles/style1';
import { SvgXml } from 'react-native-svg';
import Box from '../Components/Box';
import { FlatList } from 'react-native-gesture-handler';

function CchDetail({ route, navigation }) {
  const backSvg = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="40" height="40" rx="4" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 12.2929C20.3166 11.9024 19.6834 11.9024 19.2929 12.2929L12.2934 19.2924L12.2929 19.2929L12.2103 19.3864M12.2934 20.7076L19.2929 27.7071L19.3871 27.7903C19.7794 28.0953 20.3466 28.0676 20.7071 27.7071L20.7903 27.6129C21.0953 27.2206 21.0676 26.6534 20.7071 26.2929L15.4149 21H27L27.1166 20.9933C27.614 20.9355 28 20.5128 28 20C28 19.4477 27.5523 19 27 19H15.4149L20.7071 13.7071L20.7903 13.6129C21.0953 13.2206 21.0676 12.6534 20.7071 12.2929" fill="#303951"/>
  </svg>
  `;
  const BackBtn = () => <SvgXml xml={backSvg} />;
  const { stdName, shoot, free, layup, drib } = route.params;
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '정해일',
      scho: '중등부',
      psysical: '골밑슛 89 / 레이업 64 / 자유투 77',
      score: '99',
      day: '12.08',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '정해일',
      scho: '중등부',
      psysical: '골밑슛 89 / 레이업 64 / 자유투 77',
      score: '24',
      day: '12.08',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '정해일',
      scho: '중등부',
      psysical: '골밑슛 89 / 레이업 64 / 자유투 77',
      score: '34',
      day: '12.08',
    },
    {
      id: '5da1-471f-bd96-145571e29d72',
      title: '정해일',
      scho: '중등부',
      psysical: '골밑슛 89 / 레이업 64 / 자유투 77',
      score: '84',
      day: '12.08',
    },
    {
      id: '58694a0f-3da1-4145571e29d72',
      title: '정해일',
      scho: '중등부',
      psysical: '골밑슛 89 / 레이업 64 / 자유투 77',
      score: '84',
      day: '12.08',
    },
    {
      id: '58694da1-471f-bd96-145571e29d72',
      title: '정해일',
      scho: '중등부',
      psysical: '골밑슛 89 / 레이업 64 / 자유투 77',
      score: '84',
      day: '12.08',
    },
  ];
  const Item = ({ title, scho, psysical, score, day }) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'gray',
        padding: 20,
        marginVertical: 10,
      }}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.scho}>{scho}</Text>
        <Text style={styles.psysical}>{psysical}</Text>
      </View>
      <View style={styles.num}>
        <Text style={styles.score}>{score}</Text>
        <Text style={styles.day}>{day}</Text>
      </View>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      scho={item.scho}
      psysical={item.psysical}
      score={item.score}
      day={item.day}
    />
  );
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={[styles.header, { height: '8%' }]}>
          <View style={{ position: 'absolute', left: 34 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackBtn />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize: 20 }}>{stdName}</Text>
          </View>
        </View>
        <View style={{ height: '92%' }}>
          <View style={[styles.Contents, { flex: 1 }]}>
            <View
              style={{
                height: '15%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                paddingBottom: '5%',
              }}
            >
              <Image
                style={{
                  width: '85%',
                  height: '100%',
                  borderRadius: 5,
                  //backgroundColor: 'black',
                  paddingBottom: '5%',
                }}
                source={require('../assets/cws.jpeg')}
                resizeMode='contain'
              />
            </View>
            <View
              style={{
                height: '9%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View style={styles.fourbox}>
                <Text style={styles.boxtext}>
                  <Text style={{ fontSize: 28, marginBottom: 6 }}>{shoot}</Text>
                  <Text style={{ fontSize: 6 }}>
                    {'\n'}
                    {'\n'}
                  </Text>
                  <Text style={{ fontSize: 12 }}>{'골밑슛'}</Text>
                </Text>
              </View>
              <View style={styles.fourbox}>
                <Text style={styles.boxtext}>
                  <Text style={{ fontSize: 28 }}>{layup}</Text>
                  <Text style={{ fontSize: 6 }}>
                    {'\n'}
                    {'\n'}
                  </Text>
                  <Text style={{ fontSize: 12 }}>{'레이업'}</Text>
                </Text>
              </View>
              <View style={styles.fourbox}>
                <Text style={styles.boxtext}>
                  <Text style={{ fontSize: 28 }}>{free}</Text>
                  <Text style={{ fontSize: 6 }}>
                    {'\n'}
                    {'\n'}
                  </Text>
                  <Text style={{ fontSize: 12 }}>{'자유투'}</Text>
                </Text>
              </View>
              <View style={styles.fourbox}>
                <Text style={styles.boxtext}>
                  <Text style={{ fontSize: 28 }}>{drib}</Text>
                  <Text style={{ fontSize: 6 }}>
                    {'\n'}
                    {'\n'}
                  </Text>
                  <Text style={{ fontSize: 12 }}>{'드리블'}</Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: '20%',
                paddingHorizontal: '8%',
              }}
            >
              <Text
                style={{ fontSize: 16, paddingLeft: '2%', paddingBottom: '5%' }}
              >
                코칭 메모
              </Text>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: 'white',
                }}
              >
                <Text style={{ flex: 1, fontSize: 14, padding: 20 }}>
                  드리블이나 패스는 동나이대에 비해 준수한편이나 슈팅이나 돌파
                  스킬은 향상시켜야 할 것으로 보임.ddddddddddddddddddddddddddd
                  dddddddddddddddddddddddddddddddddddddddddddddd
                </Text>
                <Text
                  style={{
                    height: '20%',
                    fontSize: 12,
                    paddingLeft: '60%',
                  }}
                >
                  2021.12.08 16:20
                </Text>
              </View>
            </View>
            <Text
              style={{ fontSize: 16, paddingLeft: '2%', paddingBottom: '8%' }}
            >
              최근 코칭기록
            </Text>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              //onEndReached={() => navigation.navigate('CoachPg')}
              //horizontal={true}
              style={{ height: '15%' }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default CchDetail;
