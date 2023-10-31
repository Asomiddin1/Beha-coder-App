import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = () => {
    const navigation = useNavigation()
    return (
        <View className='flex-1 bg-slate-950 justify-center items-center'>
            <Text className='text-white'>Profile</Text>

            <View className='absolute  mx-[5%] mb-[1%] flex-row justify-between items-center px-4 rounded-[20px] bottom-0 w-[90%] h-[10vh] bg-slate-800'>
                <TouchableOpacity className='flex-col justify-center items-center' onPress={() => navigation.navigate('Home')}>
                    <Ionicons name='home-outline' color={'white'} size={30} />
                    <Text className='text-white'>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity className='flex-col justify-center items-center' onPress={() => navigation.navigate('Profile')}>
                    <Ionicons name='person-sharp' color={'crimson'} size={30} />
                    <Text className='text-[#e61942]'>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity className='flex-col justify-center items-center' onPress={() => navigation.navigate('Settings')}>
                    <Ionicons name='settings-outline' color={'white'} size={30} />
                    <Text className='text-white'>Settings</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Profile