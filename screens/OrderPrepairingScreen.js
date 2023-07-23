import { StyleSheet, Text,View ,Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {useEffect} from 'react'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'

export default function OrderPrepairingScreen() {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(() => {
      //move to delivery wali screen 
      navigation.navigate('Delivery');
    }, 3000)
  },[])
  return (
    <View style={tw`flex-1 bg-white justify-center items-center`}>
      <Image source={require('../assets/images/bikeGuy2.gif')} 
        style={tw`h-80 w-80`}/>

    </View>
  )
}

const styles = StyleSheet.create({})