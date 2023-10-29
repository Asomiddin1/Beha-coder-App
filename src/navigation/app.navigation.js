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

     <Stack.Screen name="Profile" component={Profile}
        options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation