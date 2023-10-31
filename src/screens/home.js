import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { View , Text, ScrollView , Image, Dimensions, TouchableOpacity } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe';
import Videos from '../components/videos';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width , height} = Dimensions.get('window')

const HomeScreen = () => {
  const [data, setData] = useState([])

  const navigation = useNavigation()

  const getData =async ()=>{
    const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCGLnocEooUs0csJwHbp2qTA&part=snippet%2Cid&order=date&maxResults=50';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cd9076b2b2msh00e1b3c67d31e1cp1a6d93jsn65daf823f1bb',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	setData(result.items);
} catch (error) {
	console.error(error);
}
}

useEffect(()=>{
getData()
} ,[])
  return (
    <View className='flex-1 pt-10 bg-slate-900'>
        <StatusBar style='light'/>
        <View className='py-3 px-6 flex-row items-center gap-2'>
          <Image  className='rounded-full w-[50px] h-[50px]'  source={require('../../assets/logo.jpg')} />
          <Text className='text-[22px] text-white'>Beha coder</Text>
        </View>
      <ScrollView>
      <View className={``}>
            <Text className='text-white px-6 text-[20px] py-3'>
              All videos
            </Text>
      </View>
      {/* <YoutubePlayer
        height={350}
        play={true}
        videoId={'ruEJCHrh9a0'}
      />  */}
      
      <Videos data={data}/>
 
      </ScrollView>
     
     <View className='absolute  mx-[5%] mb-[1%] flex-row justify-between items-center px-4 rounded-[20px] bottom-0 w-[90%] h-[10vh] bg-slate-800'>
          <TouchableOpacity className='flex-col justify-center items-center' onPress={()=> navigation.navigate('Home')}>
              <Ionicons name='home' color={'crimson'} size={30}/>
            <Text className='text-[#e61942]'>Home</Text>
          </TouchableOpacity>
         
          <TouchableOpacity className='flex-col justify-center items-center' onPress={()=> navigation.navigate('Profile')}>
           <Ionicons name='person-outline' size={30} color={'white'}/>
          <Text className='text-white'>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity className='flex-col justify-center items-center' onPress={()=> navigation.navigate('Settings')}>
          <Ionicons name='settings-outline' size={30} color={'white'}/>
          <Text className='text-white'>Settings</Text>
          </TouchableOpacity>
     </View>
    </View>
  )
}

export default HomeScreen