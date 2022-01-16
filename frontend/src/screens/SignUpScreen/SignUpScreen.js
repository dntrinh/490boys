import React from 'react'
import {
    View,
    Text,
    TextInput,
    Pressable,
} from 'react-native';

import styles from './SignUpScreen.styles';

const SignUpScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.title}>MusicShare</Text>
            <TextInput style={styles.username} placeholder="Username" />
            <TextInput style={styles.password} placeholder="Password" />
            <TextInput style={styles.confirmPassword} placeholder="Confirm Password" />
            <Pressable
                style={styles.signup}
                onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.signupText}>Sign Up</Text>
            </Pressable>
        </View>
    );
};

export default SignUpScreen;