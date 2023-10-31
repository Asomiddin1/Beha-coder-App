import React from 'react'
import { View  ,Text , Image} from 'react-native'

const Intro = () => {
  return (
   <View classname=''>

    <Image className='rounded-full w-[200px] h-[200px]' source={require('../../assets/logo.jpg')} />
    <Text className='text-white text-[30px] mt-4 mx-auto'>Beha coder</Text>

    
   </View>
  )
}

export default Intro