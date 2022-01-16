import React from 'react'
import {
    View,
    Text,
    TextInput,
    Pressable,
} from 'react-native';

import styles from './LoginScreen.styles';

const LoginScreen = () => {
    return (
        <View>
            <Text style={styles.title}>MusicShare</Text>
            <TextInput style={styles.username} placeholder="Username"/>
            <TextInput style={styles.password} placeholder="Password"/>
            <Pressable 
            style={styles.signup}
            onPress={() => console.log('pressed')}>
                <Text style={styles.signupText}>Sign Up</Text>
                </Pressable>
        </View>
    );
};

export default LoginScreen;