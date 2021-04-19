import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Style from './Styles';




const LoginScreen = (props)=>{

    return(
       <View style={Style.Container}>
           <TextInput style={Style.usernameInput}
                placeholder='User Name' 
                placeholderTextColor='black'
                color='black' />

           <TextInput style={Style.passwordInput}
                placeholder='Password' 
                placeholderTextColor='black'
                color='black' />

           <TouchableOpacity style={Style.LoginButton}
                onPress={()=>{props.navigation.navigate('tabNav') }} >
                <Text style={Style.loginTxt}>Login</Text>
           </TouchableOpacity>
       </View>
    )
}

export default LoginScreen; 