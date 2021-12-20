import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
// apollo

import { ApolloProvider } from '@apollo/client';

// graphQl

import { client } from './src/Client';

// context

import AuthContext from './src/AuthContext';

import Home from './Screens/Home';

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
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
