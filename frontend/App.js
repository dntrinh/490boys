import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';

const App = () => {

  return (
    <View>
      <LoginScreen />
    </View>
  );
};

const styles = StyleSheet.create({
});

export default App;
