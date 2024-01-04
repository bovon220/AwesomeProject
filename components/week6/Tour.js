import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import TourItem from "./TourItem";

export default function Tour(props) {
    return (

        <View style={props.style}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Tour</Text>
            <Text style={{ fontSize: 18, color: "gray", marginVertical: 10 }}>Let find out what most interesting things</Text>
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: 'row' }}>
                    {/* <TourItem />
                    <TourItem />
                    <TourItem /> */}

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg' }}
                            style={{ width: 200, height: 150, borderRadius: 10 }} />
                        <View style={{ marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Tour in Somewhere</Text>
                        </View>
                    </View>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg' }}
                            style={{ width: 200, height: 150, borderRadius: 10 }} />
                        <View style={{ marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Tour in Somewhere</Text>
                        </View>
                    </View>

                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg' }}
                            style={{ width: 200, height: 150, borderRadius: 10 }} />
                        <View style={{ marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Tour in Somewhere</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
