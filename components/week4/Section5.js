import React from 'react';
import { Image, Text, View, ViewComponent } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Section5() {
    return (
        <View >
            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: "space-around", padding: 10 }}>
                <FontAwesome name='wifi' size={20} color="blue" />
                <FontAwesome name='coffee' size={20} color="blue" />
                <FontAwesome name='bath' size={20} color="blue" />
                <FontAwesome name='car' size={20} color="blue" />
                <FontAwesome name='paw' size={20} color="blue" />
            </View>
            <View style={{flexDirection: 'row', justifyContent: "space-around",paddingHorizontal:10}}>
                <Text>wifi</Text>
                <Text>coffee</Text>
                <Text>bath</Text>
                <Text>car</Text>
                <Text>paw</Text>
            </View>
        </View>
    );
}
