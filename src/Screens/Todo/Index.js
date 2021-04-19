import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Style from './Styles';
//import { CheckBox } from 'react-native-elements'



const TodoScreen = ()=>{

    return(
       <View style={Style.container} >
          <TextInput
            style={Style.addTaskInput}
            placeholder='Add Task'
            placeholderTextColor='black'
            color='black' />

          <TouchableOpacity style={Style.addTaskButton}>
            <Text style={{top:8, alignSelf:'center'}}>    Add     </Text>
          </TouchableOpacity>

          

       </View>
    )
}

export default TodoScreen; 