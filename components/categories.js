import { View, Text ,ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { categories } from '../constants'
import { useState } from 'react'

export default function Categories() {
    const[activeCategory, setActiveCategory]=useState(null);


  return (
    <View style={tw`mt-4`}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`overflow-visible`}
        contentContainerStyle={{
            paddingHorizontal:15
        }}>
            {
                categories.map((category, index)=>{
                    let isActive= category.id==activeCategory;
                    let btnClass=isActive? 'bg-gray-600' : 'bg-gray-200';
                    let textClass=isActive? 'font-semibold text-gray-800' : 'text-gray-500';
                    return(
                        <View key={index} 
                            style={tw`flex justify-center items-center mr-6`}>
                            <TouchableOpacity
                                onPress={()=>setActiveCategory(category.id)}
                                style={tw`p-1 rounded-full shadow bg-gray-200 ${btnClass}`}>
                                    <Image style={{width: 45, height:45}}
                                        source={category.image}
                                    />
                                   
                                </TouchableOpacity>
                                <Text style={tw`text-sm ${textClass}`}>{category.name}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    </View>
  )
}