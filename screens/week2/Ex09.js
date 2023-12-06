import React from 'react';
import { View, ViewComponent } from 'react-native';

export default function Ex09() {
  return (
    <View style={{ flex : 1 , flexDirection : 'row' , alignItems : 'baseline', justifyContent: 'space-between'}}>    
      <View style={{ backgroundColor : '#50E3C2',width : 100 , height : 100 }}></View> 
      <View style={{ backgroundColor : '#50E3C2',width : 100 , height : 100 }}></View>
      <View style={{ backgroundColor : '#50E3C2',width : 100 , height : 100 }}></View>
    </View>
  );
}


