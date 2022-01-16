import React, { useState, useEffect, useContext } from 'react'
import {
    View,
    Text,
    TextInput,
    Pressable,
} from 'react-native';

import styles from './LoginScreen.styles';
import { SIGNIN } from '../../../gql';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text style={styles.title}>MusicShare</Text>
            <TextInput
                style={styles.username}
                placeholder="Username"
                value={email}
                onChangeText={email => setEmail(email)}
            />
            <TextInput
                style={styles.password}
                placeholder="Password"
                value={password}
                onChangeText={password => setPassword(password)}
            />
            <Pressable
                style={styles.login}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.loginText}>Log In</Text>
            </Pressable>
            <Pressable
                style={styles.signup}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signupText}>Sign Up</Text>
            </Pressable>
        </View>
    );
};

export default LoginScreen;