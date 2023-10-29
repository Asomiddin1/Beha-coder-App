import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { View , Text, ScrollView , Image } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import Videos from '../components/videos';

const HomeScreen = () => {
  const [data, setData] = useState([])
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
    <View className='flex-1 pt-10 '>
        <StatusBar style='auto'/>
        <View className='py-3 px-6'>
          <Text className='text-[22px]'>Beha coder</Text>
        </View>
      <ScrollView>
      <YoutubePlayer
        height={350}
        play={true}
        videoId={'ruEJCHrh9a0'}
      /> 
      
      <Videos data={data}/>
      

      
            
          <View className='   bg-red-600 w-full mx-4 h-[10vh]'>
            <Text>
              Asomiddin
            </Text>
          </View>
      </ScrollView>
     
     
    </View>
  )
}

export default HomeScreen