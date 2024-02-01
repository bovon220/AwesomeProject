import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import PokemonTab from "./PokemonTab";
import Travel from "../screens/week3/Travel";
import Resort from "../screens/week4/Resort";
import Health from "../screens/week5/Health";
//week9
import Book from "../screens/week9/Book";
import BookDetail from "../screens/week9/BookDetail";
import BookForm from "../screens/week9/BookForm";
import TodoList from "../screens/week9/TodoList";

import Location from "../screens/week10/Location";
import LocationQuiz from "../screens/week10/LocationQuiz";




const Stack = createStackNavigator();

export default function RootStack() {
    return (
        <Stack.Navigator initialRouteName="BottomTab">
            {/* week7 */}
            <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
            <Stack.Screen name="PokemonTab" component={PokemonTab} options={{ title: "Pokemon World" }} />
            <Stack.Screen name="Travel" component={Travel} options={{ title: "Travel" }} />
            <Stack.Screen name="Resort" component={Resort} options={{ title: "Resort" }} />
            <Stack.Screen name="Health" component={Health} options={{ title: "Health" }} />

            {/* week9 */}
            <Stack.Screen name="Book" component={Book} options={{ title: "Book" }} />
            <Stack.Screen name="BookDetail" component={BookDetail} options={{ title: "Book Detail" }} />
            <Stack.Screen name="BookForm" component={BookForm} />
            <Stack.Screen name="TodoList" component={TodoList} />

            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="LocationQuiz" component={LocationQuiz} />


        </Stack.Navigator>
    );
}
