import React from 'react';
import { Image, Text, View, ViewComponent } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Section3() {
    return (
        <View style={{ padding: 10 ,marginTop:10}}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color:'white',padding: 9, fontSize: 22, width: 50, height: 50, borderRadius: 50 / 2, backgroundColor: 'orange', justifyContent: 'center' }}>9.5</Text>
                <View style={{ paddingLeft:10 }}>
                    <Text style={{ fontSize: 20, color: 'orange' }}>Excellent</Text>
                    <Text>See 801 reviews </Text>
                </View>
            </View>
        </View>
    );
}
