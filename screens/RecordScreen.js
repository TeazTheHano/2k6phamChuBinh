import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, StatusBar, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";
import { useNavigatio, NavigationContainer } from '@react-navigation/native';

import { colorStyle, useCustomFonts } from "../assets/componentStyleSheet";
import componentStyle from "../assets/componentStyleSheet";
import styles from "../assets/stylesheet";

import { logoBar, marginBottomForScrollView, searchComponent, searchNav, } from "../assets/component";
import { bellNav, bookmark, headphoneIcon } from "../assets/svgXml";

function RecordScreen({ navigation }) {
    const [dataUser2, setDataUser2] = React.useState(false);

    return (
        <SafeAreaView style={[styles.flex1, { backgroundColor: 'white' }]}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            {logoBar([vw(11), vw(11)], null, 'white', [], bellNav('black', vw(10.5), vw(10.5)), null)}
            <ScrollView contentContainerStyle={[styles.flexCol, styles.gap4vw]} style={[styles.flex1,]}>
            </ScrollView>
        </SafeAreaView>
    )
}
export default RecordScreen;