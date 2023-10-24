import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colorStyle, useCustomFonts } from "../assets/componentStyleSheet";
import Svg, { SvgUri, SvgXml } from 'react-native-svg';
import { vw, vh, vmax, vmin } from 'react-native-expo-viewport-units';

import Home from '../screens/Home';
import PreLoad from '../screens/PreLoad';
import SearchScreen from '../screens/SearchScreen';
import RecordScreen from '../screens/RecordScreen';

function Tab({ navigation }) {
    const Tab = createBottomTabNavigator();

    const tabBarIcon = (iconXml, focused) => {
        // const fill = focused ? colorStyle.tan1 : 'none';
        return (
            <SvgXml
                xml={iconXml}
            // fill={fill} // Set the fill color based on whether the tab is focused or not
            />
        );
    };

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "black",
                tabBarStyle: [
                    {
                        display: "flex",
                        // paddingVertical:vw(4),
                        backgroundColor: colorStyle.blue,
                    },
                    null
                ]

            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            !focused ?
                                `<svg width="31" height="40" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.62498 8.75013C10.4517 6.92344 12.4919 5.52386 13.8719 4.67622C14.8776 4.05845 16.1223 4.05845 17.1281 4.67622C18.5081 5.52386 20.5483 6.92344 22.375 8.75013C26.3355 12.7106 26.125 15.0001 26.125 18.7501C26.125 20.5124 25.987 21.9986 25.8406 23.0791C25.6867 24.2159 24.6952 25.0001 23.548 25.0001H21.75C20.3693 25.0001 19.25 23.8808 19.25 22.5001V20.0001C19.25 19.0056 18.8549 18.0517 18.1516 17.3485C17.4484 16.6452 16.4945 16.2501 15.5 16.2501C14.5054 16.2501 13.5516 16.6452 12.8483 17.3485C12.1451 18.0517 11.75 19.0056 11.75 20.0001V22.5001C11.75 23.8808 10.6307 25.0001 9.24999 25.0001H7.45193C6.30476 25.0001 5.3133 24.2159 5.15934 23.0791C5.01302 21.9986 4.87499 20.5124 4.87499 18.7501C4.87499 15.0001 4.66449 12.7106 8.62498 8.75013Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                `
                                :
                                `<svg width="31" height="40" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.62498 8.75013C10.4517 6.92344 12.4919 5.52386 13.8719 4.67622C14.8776 4.05845 16.1223 4.05845 17.1281 4.67622C18.5081 5.52386 20.5483 6.92344 22.375 8.75013C26.3355 12.7106 26.125 15.0001 26.125 18.7501C26.125 20.5124 25.987 21.9986 25.8406 23.0791C25.6867 24.2159 24.6952 25.0001 23.548 25.0001H21.75C20.3693 25.0001 19.25 23.8808 19.25 22.5001V20.0001C19.25 19.0056 18.8549 18.0517 18.1516 17.3485C17.4484 16.6452 16.4945 16.2501 15.5 16.2501C14.5054 16.2501 13.5516 16.6452 12.8483 17.3485C12.1451 18.0517 11.75 19.0056 11.75 20.0001V22.5001C11.75 23.8808 10.6307 25.0001 9.24999 25.0001H7.45193C6.30476 25.0001 5.3133 24.2159 5.15934 23.0791C5.01302 21.9986 4.87499 20.5124 4.87499 18.7501C4.87499 15.0001 4.66449 12.7106 8.62498 8.75013Z" fill="white"/><path d="M8.62498 8.75013C10.4517 6.92344 12.4919 5.52386 13.8719 4.67622C14.8776 4.05845 16.1223 4.05845 17.1281 4.67622C18.5081 5.52386 20.5483 6.92344 22.375 8.75013C26.3355 12.7106 26.125 15.0001 26.125 18.7501C26.125 20.5124 25.987 21.9986 25.8406 23.0791C25.6867 24.2159 24.6952 25.0001 23.548 25.0001H21.75C20.3693 25.0001 19.25 23.8808 19.25 22.5001V20.0001C19.25 19.0056 18.8549 18.0517 18.1516 17.3485C17.4484 16.6452 16.4945 16.2501 15.5 16.2501C14.5054 16.2501 13.5516 16.6452 12.8483 17.3485C12.1451 18.0517 11.75 19.0056 11.75 20.0001V22.5001C11.75 23.8808 10.6307 25.0001 9.24999 25.0001H7.45193C6.30476 25.0001 5.3133 24.2159 5.15934 23.0791C5.01302 21.9986 4.87499 20.5124 4.87499 18.7501C4.87499 15.0001 4.66449 12.7106 8.62498 8.75013Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="15.4998" cy="37" rx="3.15217" ry="3" fill="white"/></svg>
                                `
                            ,),
                }} />
            <Tab.Screen name="SearchScreen" component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            !focused ?
                                `<svg width="31" height="40" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 25L20.2541 19.7541M23 13.125C23 7.94733 18.8027 3.75 13.625 3.75C8.44733 3.75 4.25 7.94733 4.25 13.125C4.25 18.3027 8.44733 22.5 13.625 22.5C18.8027 22.5 23 18.3027 23 13.125Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>                                
                                `
                                :
                                `<svg width="31" height="40" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 13.125C23 18.3027 18.8027 22.5 13.625 22.5C8.44733 22.5 4.25 18.3027 4.25 13.125C4.25 7.94733 8.44733 3.75 13.625 3.75C18.8027 3.75 23 7.94733 23 13.125Z" fill="white"/><path d="M25.5 25L20.2541 19.7541M23 13.125C23 7.94733 18.8027 3.75 13.625 3.75C8.44733 3.75 4.25 7.94733 4.25 13.125C4.25 18.3027 8.44733 22.5 13.625 22.5C18.8027 22.5 23 18.3027 23 13.125Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="15.4998" cy="37" rx="3.15217" ry="3" fill="white"/></svg>                                
                                `
                            ,),
                }} />
            <Tab.Screen name="RecordScreen" component={RecordScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            !focused ?
                                `<svg width="61" height="70" viewBox="0 0 61 70" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.5 52.5H38M30.5 52.5H23M30.5 52.5V45M30.5 45C40.5 45 46.75 38.2843 46.75 30M30.5 45C20.5 45 14.25 38.2843 14.25 30M30.5 37.5C38.4294 37.5 39.25 27.5 39.25 22.5C39.25 17.5 38.4294 7.5 30.5 7.5C22.5706 7.5 21.75 17.5 21.75 22.5C21.75 27.5 22.5706 37.5 30.5 37.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
                                :
                                `<svg width="61" height="70" viewBox="0 0 61 70" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.5 7.5C38.4294 7.5 39.25 17.5 39.25 22.5C39.25 27.5 38.4294 37.5 30.5 37.5C22.5706 37.5 21.75 27.5 21.75 22.5C21.75 17.5 22.5706 7.5 30.5 7.5Z" fill="white"/><path d="M30.5 52.5H38M30.5 52.5H23M30.5 52.5V45M30.5 45C40.5 45 46.75 38.2843 46.75 30M30.5 45C20.5 45 14.25 38.2843 14.25 30M30.5 37.5C38.4294 37.5 39.25 27.5 39.25 22.5C39.25 17.5 38.4294 7.5 30.5 7.5C22.5706 7.5 21.75 17.5 21.75 22.5C21.75 27.5 22.5706 37.5 30.5 37.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="30.4998" cy="67" rx="3.15217" ry="3" fill="white"/></svg>                            
                                `
                            ,),
                }} />
            {/* <Tab.Screen name="SearchScreen" component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            !focused ?
                                `<svg width="31" height="40" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.99999C8 6.4817 10.5 5 15.5 5C20.5 5 23 6.48171 23 10V23.8572C23 24.9709 21.6536 25.5286 20.8661 24.7411L16.3839 20.2589C15.8957 19.7707 15.1043 19.7707 14.6161 20.2589L10.1339 24.7411C9.34643 25.5286 8 24.9709 8 23.8572V9.99999Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>                             
                                `
                                :
                                `<svg width="31" height="40" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.99999C8 6.4817 10.5 5 15.5 5C20.5 5 23 6.48171 23 10V23.8572C23 24.9709 21.6536 25.5286 20.8661 24.7411L16.3839 20.2589C15.8957 19.7707 15.1043 19.7707 14.6161 20.2589L10.1339 24.7411C9.34643 25.5286 8 24.9709 8 23.8572V9.99999Z" fill="white"/><path d="M8 9.99999C8 6.4817 10.5 5 15.5 5C20.5 5 23 6.48171 23 10V23.8572C23 24.9709 21.6536 25.5286 20.8661 24.7411L16.3839 20.2589C15.8957 19.7707 15.1043 19.7707 14.6161 20.2589L10.1339 24.7411C9.34643 25.5286 8 24.9709 8 23.8572V9.99999Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="15.4998" cy="37" rx="3.15217" ry="3" fill="white"/></svg>                           
                                `
                            ,),
                }} />
            <Tab.Screen name="SearchScreen" component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            !focused ?
                                `<svg width="31" height="40" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.375 26.2501H8.625C6.89911 26.2501 5.5 24.851 5.5 23.1251C5.5 18.0242 13 18.1251 15.5 18.1251C18 18.1251 25.5 18.0242 25.5 23.1251C25.5 24.851 24.1009 26.2501 22.375 26.2501Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 13.75C18.2614 13.75 20.5 11.5114 20.5 8.75C20.5 5.98858 18.2614 3.75 15.5 3.75C12.7386 3.75 10.5 5.98858 10.5 8.75C10.5 11.5114 12.7386 13.75 15.5 13.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            
                                `
                                :
                                `<svg width="31" height="40" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.375 26.2501H8.625C6.89911 26.2501 5.5 24.851 5.5 23.1251C5.5 18.0242 13 18.1251 15.5 18.1251C18 18.1251 25.5 18.0242 25.5 23.1251C25.5 24.851 24.1009 26.2501 22.375 26.2501Z" fill="white"/><path d="M15.5 13.75C18.2614 13.75 20.5 11.5114 20.5 8.75C20.5 5.98858 18.2614 3.75 15.5 3.75C12.7386 3.75 10.5 5.98858 10.5 8.75C10.5 11.5114 12.7386 13.75 15.5 13.75Z" fill="white"/><path d="M22.375 26.2501H8.625C6.89911 26.2501 5.5 24.851 5.5 23.1251C5.5 18.0242 13 18.1251 15.5 18.1251C18 18.1251 25.5 18.0242 25.5 23.1251C25.5 24.851 24.1009 26.2501 22.375 26.2501Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 13.75C18.2614 13.75 20.5 11.5114 20.5 8.75C20.5 5.98858 18.2614 3.75 15.5 3.75C12.7386 3.75 10.5 5.98858 10.5 8.75C10.5 11.5114 12.7386 13.75 15.5 13.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="15.4998" cy="37" rx="3.15217" ry="3" fill="white"/></svg>
                                `
                            ,),
                }} /> */}
        </Tab.Navigator>
    );
}

export default Tab;
