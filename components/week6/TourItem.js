import React from "react";
import { Image, Text, View } from "react-native";

export default function TourItem(props) {
    return (
        <View style={{ marginLeft: 10 }}>
            <Image source={{ uri: props.item.uri }}
                style={{ width: 200, height: 150, borderRadius: 10 }} />
            <View style={{ marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                <Text style={{ fontSize: 20, color: 'white' }}>{props.item.title}</Text>
            </View>
        </View>
    );
}
