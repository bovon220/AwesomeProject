import React from 'react';
import { Image, Text, View, ViewComponent } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Section6() {
    return (
        <View style={{ flexDirection: 'column', marginHorizontal: 20 ,marginTop:10}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Location</Text>
            <Text>218 Austen Mountain, consectetur adipiscing, sed do
                eiusmod tempor incididunt ut labore et…
            </Text>
            <View>
                <Image style={{ flex: 1, borderRadius: 5, resizeMode: 'cover' }} source={require("../../assets/week3/map.jpg")}></Image>
            </View>
        </View>
    );
}
