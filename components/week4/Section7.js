import React from 'react';
import { Image, Text, View, ViewComponent } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Section7() {
    return (
        <View style={{marginHorizontal:20,marginTop:10}}>
            <View>
                <Text style={{fontSize:22,fontWeight:'bold',marginVertical:10}}>Room Type</Text>
            </View>
            <View style={{flexDirection: 'row' }}>
                <Image style={{width: 100, height: 100, borderRadius: 10 }} source={require("../../assets/week3/room-8.jpg")}></Image>
                <View style={{paddingLeft:10}}>
                    <Text style={{fontSize:20,paddingBottom:15}}>Standard Twin Room</Text>
                    <Text style={{fontSize:26,color:'orange',fontWeight:'bold'}}>$399.99</Text>
                    <Text style={{fontSize:18,color:'blue'}}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
        </View>
    );
}
