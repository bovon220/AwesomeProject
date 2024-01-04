import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import TourItem from "./TourItem";

export default function Event(props) {
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json '
            );
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }
    useEffect(() => {
        loadOnlineTours();
    }, []);
    const Event = [
        { "id": "1", "title": "Truckfighters: Performing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg", "month": "DEC", "date": "30", "datetime": "Thu, DEC 30, 09.00 am", "place": "London" },
        { "id": "2", "title": "Paris Motor Show", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg", "month": "DEC", "date": "31", "datetime": "Thu, DEC 30, 09.00 am", "place": "Paris" },
        { "id": "3", "title": "Bearded Theory Spring", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg", "month": "JAN", "date": "01", "datetime": "Thu, JAN 01, 09.00 am", "place": "Canada" },
        { "id": "4", "title": "BBC Music Introducing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg", "month": "JAN", "date": "11", "datetime": "Thu, JAN 11, 09.00 am", "place": "USA" },
        { "id": "5", "title": "Start-Up Meeting 2022", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg", "month": "JAN", "date": "21", "datetime": "Thu, JAN 21, 09.00 am", "place": "Thailand" }
    ]
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Upcoming Event</Text>
            <Text style={{ fontSize: 18, color: "gray", marginVertical: 10 }}>What the.....</Text>
            <FlatList
                horizontal={true}
                data={onlineTours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10 ,backgroundColor:'lightsteelblue' ,borderTopRightRadius:10 ,borderTopLeftRadius:10,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                                <Image source={{ uri: item.uri }} style={{ width: 350, height: 150, borderTopRightRadius:10 ,borderTopLeftRadius:10 }} />
                                {/* Text */}
                                <View style={{ flexDirection: 'row', borderWidth: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderColor: 'lightsteelblue' }}>
                                    <View style={{ padding: 10 }}>
                                        <Text style={{ fontSize: 20, color: 'red', textAlign: 'center', fontWeight: 'bold' }}>{item.month}</Text>
                                        <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>{item.date}</Text>
                                    </View>

                                    <View style={{ padding: 10 }}>
                                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>{item.title}</Text>
                                        <Text style={{ fontSize: 18, color: 'black' }}>{item.datetime}</Text>
                                        <Text style={{ fontSize: 18, color: 'black' }}>{item.place}</Text>
                                    </View>
                                </View>
                            </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            />
        </View>
    );
}

