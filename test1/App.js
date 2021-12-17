import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// apollo

import { ApolloProvider } from '@apollo/client';

// graphQl

import { client } from './src/Client';

// context

import AuthContext from './src/AuthContext';

import Home from './src/Screens/Home';
import Page1 from './src/Screens/Page1';
import Page2 from './src/Screens/Page2';
import Page3 from './src/Screens/Page3';
import Page4 from './src/Screens/Page4';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState({
    info: {
      email: '',

      nick: '',

      isLogin: false,

      area1: '',

      areaNo1: 0,

      area2: '',

      areaNo2: 0,

      area3: '',

      areaNo3: 0,

      jwt: '',

      notiId: '',
    },
  });
  const userInfoState = { user, setUser };
  return (
    <AuthContext.Provider value={userInfoState}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
              name='Home'
              component={Home}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name='Page1'
              component={Page1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Page2'
              component={Page2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Page3'
              component={Page3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Page4'
              component={Page4}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </AuthContext.Provider>
  );
}
/*
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.content}>
          <View style={styles.elem}>
            <View style={styles.userInfo}>
              <View style={styles.profile} />
              <Text style={styles.name}>윾또막</Text>
            </View>
            <View style={styles.userComment}>
              <Text>대화명을 입력하세요</Text>
            </View>
          </View>

          <View style={styles.elem}>
            <View style={styles.userInfo}>
              <View style={styles.profile} />
              <Text style={styles.name}>저커버그</Text>
            </View>
            <View style={styles.userComment}>
              <Text>정말 맥주라도 한 잔 사는게 어떻겠니?</Text>
            </View>
          </View>
        </View>
        <View style={styles.footer} />
      </View>
    </NavigationContainer>
    */
