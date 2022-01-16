import React from 'react'
import {
    View,
    Text,
    TextInput,
    Pressable,
} from 'react-native';

import styles from './LoginScreen.styles';

const LoginScreen = ({ navigation }) => {
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