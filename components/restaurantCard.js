import { Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function RestaurantCard({item}) {
    const navigation = useNavigation();

  return (
   <TouchableWithoutFeedback
    onPress={()=> navigation.navigate('Restaurant',{...item})}
   >
    <View style={[tw`mr-6 bg-white rounded-3xl shadow-lg mb-2`,{shadowColor: themeColors.bgColor(0.8), shadowRadius:7}]}>
        <Image style={tw`h-36 w-64 rounded-t-3xl`}
            source={item.image}/>
        <View style={tw`px-3 pb-4`}>
            <Text style={tw`text-lg font-bold pt-2`}>{item.name}</Text>
            <View style={tw`flex-row items-center `}>
                <Image source={require('../assets/images/fullStar.png')} style={tw`h-4 w-4`}/>
                <Text style={tw`text-xs`}>
                    <Text style={tw`text-green-700`}>{item.stars}</Text>
                    <Text style={tw`text-gray-700`}>
                        ({item.reviews}review) . <Text style={tw`font-semibold`}>{item.category}</Text>
                    </Text>
                </Text>
            </View>
            <View style={tw`flex-row items-center `}>
                <Icon.MapPin color="gray" width={15} height={15}/>
                <Text style={tw`text-gray-700 text-xs`}>Nearby.{item.address}</Text>
            </View>
        </View>

    </View>
   </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({})