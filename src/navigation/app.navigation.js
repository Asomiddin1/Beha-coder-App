import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Vid from '../screens/vid';
import HomeScreen from '../screens/home';
import Profile from '../screens/profile';
import Settings from '../screens/settings';



const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{headerShown:false}} />

     <Stack.Screen name="Profile" 
       options={{headerShown:false}} component={Profile}
         />

        <Stack.Screen name="Settings" component={Settings}
        options={{headerShown:false}} />


     <Stack.Screen name="Vid" component={Vid}
        options={{headerShown:false}} /> 

    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation