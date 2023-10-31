import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Intro from '../components/intro';

const Profile = () => {
    const navigation = useNavigation()
    return (
        <View className='flex-1 bg-slate-900 pt-[10vh]'>
            <ScrollView>
                <View className='flex-row justify-center'>
                    <View className='h-[200px] w-[200px] rounded-full border-[2px] border-white'>

                    </View>
                </View>

                <View className='py-6'>
                   <View className='w-[90%] px-4 mb-6 rounded-[10px] mx-auto py-4  border-[1px] border-white'>
                      <Text className='text-white text-[20px]'>Asomiddin</Text>
                   </View>
                   <View className='w-[90%] px-4 mb-6 rounded-[10px] mx-auto py-4  border-[1px] border-white'>
                      <Text className='text-white text-[20px]'>asomiddin320@gmail.com</Text>
                   </View>

                   <View className='w-[90%] px-4 mb-6 rounded-[10px] mx-auto py-4  border-[1px] border-white'>
                      <Text className='text-white text-[20px]'>Adrees</Text>
                   </View>
                </View>
            </ScrollView>

            <View className='absolute  mx-[5%]  mb-[8%] flex-row justify-between items-center px-4 rounded-[20px] bottom-0 w-[90%] h-[10vh] bg-slate-800'>
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