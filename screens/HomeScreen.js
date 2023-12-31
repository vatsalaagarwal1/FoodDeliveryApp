import { View, Text ,TextInput, StatusBar, ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme'
import Categories from '../components/categories'
import { featured } from '../constants'
import FeaturedRow from '../components/featuredRow'

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-white`}>
      <StatusBar barStyle="dark-content"/>
       <View style={tw`flex-row items-center px-4 pb-2 mt-2 `}>
        <View style={tw`flex-row flex-1 items-center p-3 rounded-full border border-gray-300`}>
          <Icon.Search height='25' width='25' stroke="gray"/>
          <TextInput placeholder='Restaurants' style={tw`ml-2 flex-1 `}/>
          <View style={tw`flex-row items-center border-0 border-l-2 pl-2 border-gray-300`}>
            <Icon.MapPin height="20" width="20" stroke="gray"/>
            <Text style={tw`text-gray-600`}>New York , NYC</Text>
          </View>
        </View>
        <View style={[tw`p-3 ml-2 rounded-full `,{backgroundColor: themeColors.bgColor(1), borderRadius: 30}] }>
          <Icon.Sliders height={20} width={20} strokeWidth={2.5} stroke={"white"}/>
        </View>
       </View>

       {/* main */}

       <ScrollView showsVerticalScrollIndicator={false}
       contentContainerStyle={{
        paddingBottom: 20
       }}
       >
        {/* Categories */}
        <Categories/>

        {/* featured  */}
        <View style={tw`mt-5`}>
          {
            [featured,featured,featured].map((item,index)=>{
              return(
                <FeaturedRow
                  key={index}
                  title={item.title}
                  restaurants={item.restaurants}
                  description={item.description}
                />
              )
            })
          }

        </View>
       </ScrollView>
     </SafeAreaView>
  )
}