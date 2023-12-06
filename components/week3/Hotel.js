import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Hotel() {
    return (
        <View style={{padding:20}}>
            {/* ก้อน1 */}
            <View style={{flexDirection:'row'}}>
                <Image style={{borderRadius:10,flex:1,resizeMode:'cover',aspectRatio:16/9}} source={require("../../assets/week3/room-1.jpg")}></Image>
            </View>

            {/* ก้อน2 */}
            <View style={{flexDirection:'row', marginVertical:10}}>
                <FontAwesome name="map-marker" size={28} color="tomato" />
                <Text style={{fontside:20,color:'grey'}}>553 Cislason Radial</Text>
            </View>
            {/* ก้อน3 */}
            <View>
                <Text style={{fontSize:20}}>Boston Hotel</Text>
            </View>
            {/* ก้อน4 */}
            <View style={{justifyContent:'space-between',flexDirection:'row', marginVertical:10}}>
                <View style={{flexDirection:'row'}}> 
                <FontAwesome name='star'size={20} color="orange"/>
                <FontAwesome name='star'size={20} color="orange"/>
                <FontAwesome name='star'size={20} color="orange"/>
                <FontAwesome name='star'size={20} color="orange"/>
                <FontAwesome name='star-half'size={20} color="orange"/>
                </View>
            </View>
            <View>
                <Text style={{color:"grey"}}>100 Review</Text>
            </View>
            {/* ก้อน5 */}
            <View>
                <Text style={{fontSize:30,color:"tomato"}}>$125</Text>
            </View>
        </View>    
    );
}
