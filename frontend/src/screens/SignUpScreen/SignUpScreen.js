import React from 'react'
import {
    View,
    Text,
    TextInput,
    Pressable,
    Image
} from 'react-native';

import styles from './SignUpScreen.styles';

const SignUpScreen = () => {
    return (
        <View>

            <Text style={styles.title}>MusicShare</Text>
            <TextInput style={styles.username} placeholder="Username" />
            <TextInput style={styles.password} placeholder="Password" />
            <TextInput style={styles.confirmPassword} placeholder="Confirm Password" />
        </View>
    );
};

export default SignUpScreen;