import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { View, Text, TouchableOpacity, Button , Linking } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Settings = () => {
    const navigation = useNavigation()
    const  url = 'https://t.me/asomiddin_004'

    
    return (
        <View className='flex-1 bg-slate-900  justify-center items-center'>
           <View>
               <View>
                   {/* Profle image */}
               </View>
               <View>
   
       

                    <View className='flex-row gap-2 mb-4  items-center'>
                        <Ionicons name='cog-sharp' color={'white'} size={40} />
                        <Text className='text-white  text-[27px] '>Settings</Text>
                    </View>
                    <TouchableOpacity className='flex-row gap-2 mb-4 tems-center'>
                        <Ionicons name='help-buoy-sharp' color={'white'} size={40} />
                        <Text onPress={()=> Linking.openURL('https://t.me/asomiddin_004')} className='text-white  text-[27px] '>Help</Text>
                    </TouchableOpacity>

                    <View className='flex-row gap-2 tems-center'>
                        <Ionicons name='log-out-sharp' color={'white'} size={40} />
                        <Text className='text-white ml-4  text-[27px] '>Loguot</Text>
                    </View>
               </View>
           </View>
              
             <View className='absolute  mx-[5%] mb-[8%] flex-row justify-between items-center px-4 rounded-[20px] bottom-0 w-[90%] h-[10vh] bg-slate-800'>
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