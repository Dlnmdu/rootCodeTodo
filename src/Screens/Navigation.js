import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoScreen from './Todo/Index';
import DeletedTodoScreen from './DeletedTodo/Index';
import ProfileScreen from './Profile/Index';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




const Tab = createBottomTabNavigator();

const TabNavigation = ()=>{

    return(
       <Tab.Navigator initialRouteName ='ToDo'>
           <Tab.Screen name='ToDo' component={TodoScreen}
                options= {{
                    tabBarLabel: 'Task',
                    tabBarIcon: ({focused, color, size}) => (
                        <MaterialIcons name="add-task" size={25} />
                        
                    )}} />
           <Tab.Screen name='Deleted' component={DeletedTodoScreen} 
                options= {{
                    tabBarLabel: 'Deleted Task',
                    tabBarIcon: ({focused, color, size}) => (
                        <MaterialIcons name="delete" size={25} />
                        
                    )}}/>
           <Tab.Screen name='Profile' component={ProfileScreen}
                 options= {{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({focused, color, size}) => (
                        <MaterialIcons name="supervised-user-circle" size={25} />
                        
                    )}} />
       </Tab.Navigator>
    )
}

export default TabNavigation; 