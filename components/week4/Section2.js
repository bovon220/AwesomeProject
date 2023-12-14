import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Section2() {
    return (
        <View style={{ flex: 1, marginHorizontal: 20,marginTop:-80, backgroundColor: 'lemonchiffon', borderRadius: 10, padding: 10 }}>
            <Text style={{ textAlign: 'center', fontSize: 32, fontWeight: 'bold' }}>Hilton San Francisco</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <FontAwesome name='star' size={20} color="orange" />
                <FontAwesome name='star' size={20} color="orange" />
                <FontAwesome name='star' size={20} color="orange" />
                <FontAwesome name='star' size={20} color="orange" />
                <FontAwesome name='star-half-empty' size={20} color="orange" />
            </View>
            <Text style={{ textAlign: 'center' }}>Facilities provided may range from a modest quality
                mattress in a small room to large suites</Text>
        </View>
    );
}
