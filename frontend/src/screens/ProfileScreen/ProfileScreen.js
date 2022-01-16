import React from 'react'
import {
    View,
    Text,
    TextInput,
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
} from 'react-native';

import styles from './ProfileScreen.styles';
import { Image } from 'react-native'


const ProfileScreen = () => {
    return (
        
        <View>

            <Image source = {require('./istockphoto-868646936-612x612.jpg')} style={styles.profile_image} />
            <Text style={styles.users_name}>User's Name</Text>
            <Text style={styles.text,{position: 'absolute', top: 15, left:155,}}>Bio</Text>
            <TextInput multiline={true} style={styles.bio} placeholder="Bio"></TextInput>
            <Text style={styles.text,{position: 'absolute', top: 200, left:12,}}>x days ago</Text>
            <Text style={styles.feed}>Comment</Text>
            <Image source = {require('./istockphoto-868646936-612x612.jpg')} style={styles.feed_image} />

        </View>
    );
};

export default ProfileScreen;