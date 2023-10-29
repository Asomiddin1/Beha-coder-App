import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import Settings from '../screens/settings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../screens/profile';
import Vid from '../screens/vid';

 
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Home') {
							iconName = focused ? 'home' : 'home-outline';
						} else if (route.name === 'Settings') {
							iconName = focused ? 'settings' : 'settings-outline';
						} else if (route.name === 'Profile') {
							iconName = focused ? 'person-sharp' : 'person-outline';
						}

						return (
							<Ionicons name={iconName} size={size} color={color} />
						);
					},
					tabBarActiveTintColor: 'crimson',
					tabBarInactiveTintColor: 'black',
				})}
			>
				<Tab.Screen
					name='Home'
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
                <Tab.Screen
					name='Profile'
					component={Profile}
					options={{ headerShown: false }}
				/>
				<Tab.Screen
					name='Settings'
					component={Settings}
					options={{ headerShown: false, }}
				/>

				<Tab.Screen name='Vid' 
				component={Vid}
				options={{ headerShown: false,  }}
				/>
				
			
			</Tab.Navigator>
		</NavigationContainer>
  )
}



export default TabNavigation