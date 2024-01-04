import React from 'react';
import { Button, View, ViewComponent } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function Ex10() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ backgroundColor: '#4A90E2', flex: 1, }}></View>
      </View>
      <Button title="Next" onPress={() => navigation.navigate("Ex11")} />
    </View >
  );
}