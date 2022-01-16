import React, { useState, useEffect, useContext } from 'react'
import {
    View,
    Text,
    TextInput,
    Pressable,
} from 'react-native';
import { useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './LoginScreen.styles';
import { SIGNIN } from '../../../gql';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signIn, { data, error, loading }] = useMutation(SIGNIN);

    return (
        <View>
            <Text style={styles.title}>MusicShare</Text>
            <TextInput style={styles.username} placeholder="Username" />
            <TextInput style={styles.password} placeholder="Password" />
            <Pressable
                style={styles.signup}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signupText}>Sign Up</Text>
            </Pressable>
        </View>
    );
};

export default LoginScreen;