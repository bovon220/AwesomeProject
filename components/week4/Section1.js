import React from 'react';
import { Image, Text, View, ViewComponent } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section1() {
    return (
        <View style={{ flex: 1 }}>
            {/* <View style={{justifyContent:'space-between',flexDirection:'column'}}>
                <FontAwesome name='angle-left' size={20} color="blue" />
                <FontAwesome name='clone' size={20} color="blue" />
            </View> */}
            <View style={{ flexDirection: 'row' }}>

                <Image style={{ flex: 1, resizeMode: 'center', aspectRatio: 16 / 11 }} source={require('../../assets/week3/room-6.jpg')} />
            </View>

        </View>
    );
}
