import React from 'react'
import {
    View,
    Text,
    TextInput,
    Pressable,
    ScrollView,
    TouchableHighlight,
} from 'react-native';

import styles from './ProfileScreen.styles';
import { Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';


const ProfileScreen = () => {
    return (

        <ScrollView style={styles.main}>
        
            <Image source = {require('./istockphoto-868646936-612x612.jpg')} style={styles.profile_image} />
            <Text style={styles.users_name}>User's Name</Text>
            <Text style={styles.text,{position: 'absolute', top: 15, left:155,}}>Bio</Text>
            <TextInput multiline={true} style={styles.bio} placeholder="Bio"></TextInput>
            <Text style={styles.text, {marginVertical: 40, marginHorizontal: 12}}>x days ago</Text>
            <Text style={styles.feed}>Comment</Text>
            <Image source = {require('./istockphoto-868646936-612x612.jpg')} style={styles.feed_image} />

            <Text style={styles.top_list_text}>Top Songs</Text>
            <Pressable
                style={{bottom: 75, marginHorizontal: 115}}
                onPress={() => alert('Songs')}>
                <Image source = {require('./images.png')} style={styles.top_list_edit_image} />
            </Pressable>


            <Text style={styles.top_list_text}>Top Artists</Text>
            <Pressable
                style={{bottom: 75, marginHorizontal: 120}}
                onPress={() => alert('Artists')}>
                <Image source = {require('./images.png')} style={styles.top_list_edit_image} />
            </Pressable>

            <Text style={styles.top_list_text}>Top Albums</Text>
                <Pressable
                style={{bottom: 75, marginHorizontal: 130,}}
                onPress={() => alert('alertkekw')}>
                <Image source = {require('./images.png')} style={styles.top_list_edit_image} />
            </Pressable>

        </ScrollView>
        
    );
};

export default ProfileScreen;