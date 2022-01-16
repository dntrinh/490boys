import React from 'react'
import {
    View,
    Text,
    TextInput,
    Pressable,
    Image,
} from 'react-native';

import styles from './HomeScreen.styles';

const HomeScreen = ({navigation}) => {
    return  (
        <View>
           <Image source = {require('./cactusjack.jpg')} style={styles.profile_image} />
           <Image source = {require('./istockphoto-868646936-612x612.jpg')} style={styles.profile_image_two} />
            <Text style={styles.title}>kchandel posted</Text>
            <Text style={styles.title_two}>kent reposted from x</Text>
            <Text style={styles.caption}>This guy is pushing 🅿️</Text>
            <Text style={styles.caption_two}>This guy is pushing 🅿️</Text>
            <TextInput style={styles.search} placeholder="Search"/>
            <Text style={styles.post} placeholder="kchandel posted"/>
            <Text style={styles.post_two} placeholder="Post_two"/>
            <Text style={styles.post_three} placeholder="Post_three"/>
            <Text style={styles.post_four} placeholder="Post_four"/>
            <Pressable 
                style={styles.GotoProfile}
                onPress={() => navigation.navigate('Profile')}>
                <Image source = {require('./istockphoto-868646936-612x612.jpg')} style={styles.GotoProfileImage} />        
                </Pressable>
        </View>
    );
};

export default HomeScreen;