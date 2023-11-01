import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {  View ,Text ,Image, Dimensions, TouchableOpacity } from 'react-native'
import {AsyncStorage} from 'react-native';

const {width , height} = Dimensions.get('window')

const Videos = ({data}) => {

const navigation = useNavigation()

_storeData = async () => {
   try {
     await AsyncStorage.setItem(
       '@MySuperStore:key',
       'I like to save it.',
     );
   } catch (error) {
     // Error saving data
   }
 };

  return (
   <View className=''>
      {data.map(item =>(
        <TouchableOpacity onPress={()=> navigation.navigate('Vid' , item)}  key={item.id.videoId}>
            <View className='px-3 flex-row mb-6   gap-3'>
          
        <Image 
        className='rounded-[10px]'
        width={width / 2} height={height / 7.1}
         source={{uri:item.snippet.thumbnails.medium.url}} alt='image'/> 
            <View className={` w-[40%] px-2`}>
               {item?.snippet?.title.split().map(c => (
                <Text key={c} className='text-[16px] text-white'>{c}</Text>
               ))}
            </View>

            </View>
           
            </TouchableOpacity>
      ))}
   </View>
  )
}

export default Videos