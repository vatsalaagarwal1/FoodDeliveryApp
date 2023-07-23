import { StyleSheet, Text, View ,ScrollView, Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { themeColors } from '../theme';
import tw from 'twrnc'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native';

export default function CartScreen() {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation();
  return (
    <View style={tw`bg-white flex-1`}>
        {/* back button */}
        <View style={tw`relative py-4 shadow-sm`}>
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                style={[tw`absolute z-10 rounded-full p-1 shadow top-5 left-2`,{backgroundColor: themeColors.bgColor(1)}]}>
                    <Icon.ArrowLeft strokeWidth={3} stroke={'white'}/>
                </TouchableOpacity>
                <View>
                    <Text style={tw`text-center font-bold text-xl`}>Your Cart</Text>
                    <Text style={tw`text-center text-gray-500`}>{restaurant.name}</Text>
                </View>
        </View>
        <View style={[tw`flex-row px-4 items-center`, {backgroundColor: themeColors.bgColor(0.5)}]}>
            <Image 
                source={require('../assets/images/bikeGuy.png')} style={tw`w-20 h-20 rounded-full`}/>
                <Text style={tw`flex-1 pl-4 font-bold`}>Deliver in 20-30 mins</Text>
                <TouchableOpacity>
                    <Text style={[tw`font-bold`,{color:themeColors.text, fontWeight:"900"}]}>
                        Change
                    </Text>
                </TouchableOpacity>
        </View>
        {/* dishes */}
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: 50
            }}
            style={tw`bg-white pt-5`}
            >
                {
                    restaurant.dishes.map((dish,index)=>{
                        return(
                            <View key={index}
                            style={tw`flex-row items-center py-2 px-4 bg-white rounded-3xl mx-2 my-2 shadow-md`}>
                                <Text style={[tw`font-bold`,{color:themeColors.text}]}>
                                    2  x    .
                                </Text>
                                <Image style={tw`h-14 w-14 rounded-full`}
                                    source={dish.image}/>
                                <Text style={tw`flex-1 font-bold text-gray-700 mx-2`}>{dish.name}</Text>
                                <Text style={tw`font-semibold text-base`}>${dish.price}</Text>
                                <TouchableOpacity
                                    style={[tw`p-1 rounded-full m-2`,{backgroundColor:themeColors.bgColor(1)}]}>
                                        <Icon.Minus strokeWidth={2} height={20} width={20} stroke={"white"}/>
                                    </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
            {/* totals */}
            <View style={[tw`p-6 px-8 rounded-t-3xl`,{backgroundColor:themeColors.bgColor(0.2)}]}>
                <View style={tw`flex-row justify-between mb-2`}>
                    <Text style={tw`text-gray-700 `}>Subtotal</Text>
                    <Text style={tw`text-gray-700 `}>$28</Text>
                </View>
                <View style={tw`flex-row justify-between mb-2`}>
                    <Text style={tw`text-gray-700 `}>Delivery Fee</Text>
                    <Text style={tw`text-gray-700 `}>$2</Text>
                </View>
                <View style={tw`flex-row justify-between mb-2`}>
                    <Text style={tw`text-gray-700 font-bold`}>Order Total</Text>
                    <Text style={tw`text-gray-700 font-bold`}>$30</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('OrderPrepairing')}
                        style={[tw`p-3 rounded-full`,{backgroundColor:themeColors.bgColor(1)}]}>
                            <Text style={tw`text-white text-center font-bold text-lg`}>
                                Place Order
                            </Text>
                        </TouchableOpacity>
                </View>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({})