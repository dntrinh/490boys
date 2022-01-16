import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    profile_image: {width: 100,
        height: 100,
        borderRadius: 50,    
        top: 25,
        right: -25,    
    },
    
    users_name: {
        fontSize: 15,
        textAlign: 'center',
        width: 125,
        marginTop: 35,
        left: 12.5,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'lightgray',
        color: 'black',
    },

    text: {
        fontSize: 15,
        color: 'black',
    },

    bio: {
        fontSize:15,
        textAlignVertical: 'top',
        width: 250,
        height: 110,
        borderRadius: 10,
        position: 'absolute', top: 35, left:150,
        backgroundColor: 'lightgray',
    },

    feed:   {
        fontSize:15,
        textAlign: 'center',
        textAlignVertical: 'bottom',
        width: 390,
        height: 175,
        borderRadius: 10,
        position: 'absolute', top: 220, left: 10,
        backgroundColor: 'lightgray',

    },

    feed_image: {
        width: 50,
        height: 50,
        borderRadius: 25,    
        position: 'absolute', top: 230, left: 20,
    },

    

});

export default styles;
