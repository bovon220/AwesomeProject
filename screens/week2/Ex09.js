import React from 'react';
import { Button, View, ViewComponent } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function Ex09() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <View style={{ backgroundColor: '#50E3C2', width: 100, height: 100 }}></View>
        <View style={{ backgroundColor: '#50E3C2', width: 100, height: 100 }}></View>
        <View style={{ backgroundColor: '#50E3C2', width: 100, height: 100 }}></View>
      </View>
      <Button title="Next" onPress={() => navigation.navigate("Ex10")} />
    </View >
  );
}


