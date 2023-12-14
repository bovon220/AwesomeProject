import React from 'react';
import { Button, Image, StyleSheet, Text, View, ViewComponent } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default function Section8() {

    return (
        <View style={{ padding: 10, marginHorizontal: 20, marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 2 }}>
            <View style={{ flexDirection: 'column' }}>
                <Text>Price</Text>
                <Text style={{ fontSize: 26, color: 'orange', fontWeight: 'bold' }}>$399.99</Text>
                <Text>AVG/Night</Text>
            </View>
            <View>
                <Button title='Book Now' color={"green"} />
            </View>
        </View>
    );
}
