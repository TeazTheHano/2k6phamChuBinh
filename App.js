import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from "react";

import Home from "./screens/Home";
import PreLoad from './screens/PreLoad';
import Tab from './assets/BottomTab';
import SearchScreen from './screens/SearchScreen';
import RecordScreen from './screens/RecordScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PreLoad" component={PreLoad} />
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="RecordScreen" component={RecordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}