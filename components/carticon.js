import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather'
import tw from 'twrnc'

export default function CartIcon() {
  return (
    <View style={tw`absolute bottom-5 w-full z-50`}>
        <TouchableOpacity
            style={[tw`flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg`,{backgroundColor: themeColors.bgColor(1)}]}>
            <View style={[tw`p-2 px-4 rounded-full`, {backgroundColor:'rgba(255,255,255,0.3'}]}>
                <Text style={tw`font-extrabold text-white text-lg`}>
                    3
                </Text>
            </View>
            <Text style={tw`flex-1 text-center font-extrabold text-white text-lg`}>
                View Cart
            </Text>
            <Text style={tw`font-extrabold text-white text-lg`}>
                ${23}
            </Text>
        </TouchableOpacity>

      
    </View>
  )
}

const styles = StyleSheet.create({})