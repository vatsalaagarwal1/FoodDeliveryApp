import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import tw from 'twrnc';

const App = () => {


  return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-red-500 text-4xl`}>Hello World</Text>
      </View>
  );
}



export default App;
