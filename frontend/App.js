import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { client } from './apollo';

import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';

import LoginStackScreen from './src/navigation/LoginStackScreen';

const App = () => {

  return (
    <NavigationContainer>
      <LoginStackScreen />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;
