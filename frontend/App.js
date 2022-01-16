import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';

import { client } from './apollo';

import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';

import LoginStackScreen from './src/navigation/LoginStackScreen';

const App = () => {

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <LoginStackScreen />
      </NavigationContainer>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
});

export default App;
