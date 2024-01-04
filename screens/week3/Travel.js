import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Signup from '../../components/week3/Signup';
import Card from '../../components/week3/Card';
import Hotel from '../../components/week3/Hotel';
import { useNavigation } from "@react-navigation/native";

export default function Travel() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop : 50  }}>
                <Text> Week 3 </Text>
                <Signup />
                <Card/>
                <Hotel/>
            </View>
        </ScrollView>
    );
}
