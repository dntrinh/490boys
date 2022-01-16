import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        elevation: 10,
        color: 'black',
        textAlignVertical: 'top',
        top: 65,
        left: 10,
    },
    caption: {
        fontSize: 17,
        elevation: 10,
        color: 'black',
        top: 60,
        left: 80,
    },
    caption_two: {
        fontSize: 17,
        elevation: 10,
        color: 'black',
        top: 250,
        left: 80,
    },
    title_two: {
        fontSize: 15,
        elevation: 10,
        color: 'black',
        textAlignVertical: 'top',
        top: 255,
        left: 10,
    },
    search: {
        fontSize: 11,
        color: 'black',
        height: '10%',
        borderColor: 'black',
        position: 'absolute', top: 10, left: 10,
        borderWidth: 1,
        width: '85%',
    },
    post: {
        fontSize: 20,
        backgroundColor: 'lightgray',
        color: 'black',
        height: 175,
        borderColor: 'black',
        borderRadius: 10,
        position: 'absolute', top: 90, left: 10,
        borderWidth: 1,
        width: '95%',
    },
    post_two: {
        fontSize: 10,
        backgroundColor: 'lightgray',
        color: 'black',
        height: 175,
        borderColor: 'black',
        borderRadius: 10,
        position: 'absolute', top: 300, left: 10,
        borderWidth: 1,
        width: '95%',
    },
    
    signup: {
        alignSelf: 'center',
        color: 'blue',
        marginTop: 300,

    },
    signupText: {
        fontSize: 0,
        alignSelf: 'center',
        color: 'blue',
    },
    profile_image: {
        position: 'absolute',
        zIndex: 10,
        elevation: 10,
        width: 50,
        height: 50,
        borderRadius: 25,    
        top: 97,
        left: 17,    
    },
    profile_image_two: {
        position: 'absolute',
        zIndex: 10,
        elevation: 10,
        width: 50,
        height: 50,
        borderRadius: 25,    
        top: 307,
        left: 17,    
    },
    GotoProfile: {
        alignSelf: 'center',
    },

    GotoProfileImage: {
        position: 'absolute',
        zIndex: 10,
        elevation: 10,
        width: 50,
        height: 50,
        borderRadius: 25,    
        top: 97,
        left: 17,    
    },

});

export default styles;