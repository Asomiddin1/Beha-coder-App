import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Settings = () => {
    const navigation = useNavigation()
    return (
        <View className='flex-1  justify-center items-center'>
             <View className='absolute  mx-[5%] mb-[1%] flex-row justify-between items-center px-4 rounded-[20px] bottom-0 w-[90%] h-[10vh] bg-slate-800'>
          <TouchableOpacity className='flex-col justify-center items-center' onPress={()=> navigation.navigate('Home')}>
              <Ionicons name='home-outline' color={'white'} size={30}/>
            <Text className='text-white'>Home</Text>
          </TouchableOpacity>
         
          <TouchableOpacity className='flex-col justify-center items-center' onPress={()=> navigation.navigate('Profile')}>
           <Ionicons name='person-outline' size={30} color={'white'}/>
          <Text className='text-white'>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity className='flex-col justify-center items-center' onPress={()=> navigation.navigate('Settings')}>
          <Ionicons name='settings' size={30} color={'crimson'}/>
          <Text className='text-[#e61942]'>Settings</Text>
          </TouchableOpacity>
     </View>
        </View>
    )
}

export default Settings