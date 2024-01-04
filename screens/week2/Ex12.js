import React from 'react';
import { Button, View, ViewComponent } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function Ex12() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, flexDirection: 'row' }}>
        <View style={{ backgroundColor: '#4A90E2', flex: 2, }}></View>
        <View style={{ backgroundColor: '#50E3C2', flex: 2, }}></View>
        <View style={{ backgroundColor: '#9013FE', flex: 2, }}></View>
      </View>
      <Button title="Next" onPress={() => navigation.navigate("Ex01")} />
    </View >
  );
}