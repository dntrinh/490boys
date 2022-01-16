import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    main:{
        marginHorizontal:20,
        marginVertical:40,
      },

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
        fontSize: 50,
        color: 'black',
    },

    bio: {
        fontSize:15,
        textAlignVertical: 'top',
        width: 220,
        height: 110,
        borderRadius: 10,
        position: 'absolute', top: 35, left:150,
        backgroundColor: 'lightgray',
        borderWidth: 1,
    },

    feed:   {
        fontSize:15,
        textAlign: 'center',
        textAlignVertical: 'bottom',
        width: 370,
        height: 175,
        borderRadius: 10,
        marginVertical: -35, marginHorizontal: 0,
        backgroundColor: 'lightgray',
        borderWidth: 1,
    },

    feed_image: {
        width: 50,
        height: 50,
        borderRadius: 25,    
        position: 'absolute', top: 230, left: 10,
    },



    top_list_text: {
        fontSize: 20,
        color: 'black',
        marginVertical: 50, marginHorizontal: 5,
    },

    top_list_edit_image: { 
        width: 25,
        height: 25,
        borderRadius: 12.5,    
    },

    top_list_image: {



    }


});

export default styles;