import React from 'react'
import {  View ,Text ,Image, Dimensions } from 'react-native'

const {width , height} = Dimensions.get('window')

const Videos = ({data}) => {

  return (
   <View className=''>
      {data.map(item => (
        <View key={item.snippet.publishTime}>
            <View className='px-3 flex-row mb-6  gap-3'>
          
        <Image 
        className='rounded-[30px]'
        width={width / 2} height={height / 6}
         source={{uri:item.snippet.thumbnails.medium.url}} alt='image'/> 
            <View className={` w-[40%] px-2`}>
               {item?.snippet?.title.split().map(c => (
                <Text className='text-[25px]'>{c}</Text>
               ))}
            </View>
            </View>
           
            </View>
      ))}
   </View>
  )
}

export default Videos