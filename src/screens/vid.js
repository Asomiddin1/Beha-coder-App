import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import IconVixod from 'react-native-vector-icons/Ionicons'
import YoutubePlayer from 'react-native-youtube-iframe';
import { HeartIcon} from 'react-native-heroicons/solid'

const Vid = () => {
  const [dataVideo, setDataVideo] = useState([])
  const { params: item } = useRoute();
  const navigation = useNavigation()

  console.log('videosGlobal', item);


  return (
    <View className='flex-1 bg-slate-900 pt-4 '>
      <SafeAreaView className='py-6 px-4 flex-row h-[10vh] justify-between items-center '>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconVixod name='arrow-back-outline'
            color={'white'}
            size={30} />
        </TouchableOpacity>
       
        <HeartIcon color={'white'} size={30} />
      </SafeAreaView>

      <ScrollView>
        <View className=''>
          <YoutubePlayer
            height={340}
            play={true}
            videoId={item?.id?.videoId}
          />
          <Text className='text-white text-[22px] px-4 py-2'>
            {item?.snippet?.title}
          </Text>
          <Text className='text-white pt-[10] px-4'>
            {item?.snippet?.description}
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Vid