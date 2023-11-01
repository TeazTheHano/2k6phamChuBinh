import React, { useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { useCustomFonts } from "../assets/componentStyleSheet";
import { useNavigation } from '@react-navigation/native';

function PreLoad() {
    let [fontsLoaded] = useCustomFonts();
    const navigation = useNavigation();

    useEffect(() => {
        if (fontsLoaded) {
            navigateToHome();
        }
    }, [fontsLoaded]);

    function navigateToHome() {

        navigation.navigate('Tab');
    }

    if (!fontsLoaded) {
        return null;
    } else {
        return (
            <View>
                {/* your other components go here */}
            </View>
        );
    }
}

export default PreLoad;