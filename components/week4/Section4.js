import React from 'react';
import { Image, Text, View, ViewComponent } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Section4() {
    return (
        <View style={{marginTop:10, borderTopWidth: 2, borderBottomWidth: 2 ,padding:10,marginHorizontal:10}}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Hotel Description</Text>
            <Text>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
        </View>
    );
}
