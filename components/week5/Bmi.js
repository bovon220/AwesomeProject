import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('0');
    const [description, setdescription] = useState();

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight / (height / 100 * height / 100));
        setBmi(output.toFixed(2));
        // หา
        let description = "";
        if (output < 18.5)
            description = "Underweight";
        else if (output >= 18.5 && output <= 24.99)
            description = "Normal";
        else if (output >= 25 && output <= 29.99)
            description = "Overweight";
        else if (output >= 30 && output <= 39.99)
            description = "Obese";
        else
            description = "Morbidly Obese"; 
            setdescription(description);
    };

    return (
        <View>
            {/* แถว 1 */}
            <View style={{ padding: 10, backgroundColor: "white", borderRadius: 10, height: 100, justifyContent: "space-around", marginBottom: 30, }}>
                <Text style={{ fontSize: 24 }}>Weight (kg.)</Text>
                <TextInput onChangeText={(newWeight) => setWeight(newWeight)} placeholder="Input your Weight..." keyboardType="numeric" value={weight} style={{ fontSize: 24 }} />
            </View>

            {/* แถว 2 */}
            <View style={{ padding: 10, backgroundColor: "white", borderRadius: 10, height: 100, justifyContent: "space-around", marginBottom: 30 }}>
                <Text style={{ fontSize: 24 }}>Hight (cm.)</Text>
                <TextInput onChangeText={(newHeight) => setHeight(newHeight)} placeholder="Input your Hight..." value={height} keyboardType="numeric" style={{ fontSize: 24 }} />
            </View>

            {/* แถว 3 */}
            <View style={{ padding: 10, borderRadius: 10, height: 100, justifyContent: "space-between", marginBottom: 30, flexDirection: "row" }}>
                <View style={{ flex: 1, marginRight: 10, padding: 10, backgroundColor: "white", borderRadius: 10, height: 100, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 42, textAlign: "center" }}>{bmi}</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 10, padding: 10, backgroundColor: "white", borderRadius: 10, height: 100, justifyContent: 'center' }}>
                    <Text onPressButton={(newdescription) => setdescription(newdescription)}
                     value={description} style={{ fontSize: 20, textAlign: "center" }}>{description}</Text>
                </View>
            </View>

            {/* ปุ่ม */}
            <View style={{ marginTop: 20 }}>
                {/* <Button onPress={onPressButton} title='calculate' color={"blue"} /> */}
                <TouchableOpacity onPress={onPressButton}>
                    <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                        <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                            Calculate
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
