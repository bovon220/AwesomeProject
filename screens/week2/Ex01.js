import React from 'react';
import { Button, View } from 'react-native';

//import navigation ก่อน
import { useNavigation } from "@react-navigation/native";

export default function Ex01() {
  //ต้องประกาศก่อนใช้เสมอ
  const navigation = useNavigation();
  return (
    //ทำ View ใหญ๋ครอบ
    <View style={{ flex: 1 }}>

      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ backgroundColor: '#50E3C2', height: 100 }}></View>
      </View>

      {/* ปุ่ม next ใส่ตัวแปร navigation ลงไปใในปุ่ม ให้ไป Ex02*/}
      <Button title="Next" onPress={() => navigation.navigate("Ex02")} />
    </View>
  );
}
