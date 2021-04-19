import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
    usernameInput:{
        borderColor: 'black',
        borderWidth: 1,
        width: 250,
        height: 40,
        alignSelf: 'center',
        top: 150,
        borderRadius: 5,
        padding: 10
    },

    passwordInput:{
        borderColor: 'black',
        borderWidth: 1,
        width: 250,
        height: 40,
        alignSelf: 'center',
        top: 190,
        borderRadius: 5,
        padding:10
    },

    LoginButton:{
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        width: 100,
        height: 40,
        alignSelf: 'center',
        top: 250
    },

    loginTxt:{
        alignSelf:'center',
        top: 7,
        fontSize: 15
    }
   
})


export default Style;