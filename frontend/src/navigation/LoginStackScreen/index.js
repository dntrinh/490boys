import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import SignUpScreen from '../../screens/SignUpScreen/SignUpScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';

const LoginStack = createStackNavigator();

const LoginStackScreen = () => {
    return (
        <LoginStack.Navigator
            initialRoutename={'Login'}
        >
            <LoginStack.Screen name={'Login'} component={LoginScreen} options={{ headerShown: false }} />
            <LoginStack.Screen name={'Signup'} component={SignUpScreen} options={{ headerShown: false }} />
            <LoginStack.Screen name={'Profile'} component={ProfileScreen} />
        </LoginStack.Navigator>
    );
}

export default LoginStackScreen;