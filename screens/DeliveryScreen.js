import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import tw from 'twrnc'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import MapView ,{Marker}from 'react-native-maps'

export default function DeliveryScreen() {
  const restaurant=featured.restaurants[0];
  const navigation=useNavigation();

  return (
    <View style={tw`flex-1`}>
      {/* map view */}
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        style={tw`flex-1`}
        mapType='standard'>
          <Marker
            coordinate={{
              latitude: restaurant.lat,
              longitude: restaurant.lng,
            }}
          />
        </MapView>
      <Text>hiiiii</Text>
    </View>
  )
}

const styles = StyleSheet.create({})