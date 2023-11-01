import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, StatusBar, SafeAreaView, ScrollView, TouchableOpacity, Modal } from "react-native";
import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";
import { useNavigatio, NavigationContainer } from '@react-navigation/native';

import { colorStyle, useCustomFonts } from "../assets/componentStyleSheet";
import componentStyle from "../assets/componentStyleSheet";
import styles from "../assets/stylesheet";

import { logoBar, marginBottomForScrollView, navTopBar, searchComponent, searchNav, } from "../assets/component";
import { bellNav, bookmark, headphoneIcon, leftArrow } from "../assets/svgXml";
import { SvgXml } from "react-native-svg";

function RecordScreen({ navigation }) {
    const [dataUser2, setDataUser2] = React.useState(false);
    const [modalVisible, setModalVisible] = useState(true);

    return (
        <SafeAreaView style={[styles.flex1, { backgroundColor: 'white' }]}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />

            <View style={[styles.flexColCenter, styles.flex1, styles.gap6vw]}>
                <SvgXml xml={`<svg width="195" height="194" viewBox="0 0 195 194" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" width="194" height="194" rx="97" fill="#EA4E4E"/><path d="M73.25 48.5C73.25 35.1071 84.1071 24.25 97.5 24.25C110.893 24.25 121.75 35.1071 121.75 48.5V97C121.75 110.393 110.893 121.25 97.5 121.25C84.1071 121.25 73.25 110.393 73.25 97V48.5Z" fill="white"/><path d="M146 97C146 123.786 124.286 145.5 97.5 145.5M97.5 145.5C70.7142 145.5 49 123.786 49 97M97.5 145.5V169.75M97.5 169.75H121.75M97.5 169.75H73.25M121.75 48.5V97C121.75 110.393 110.893 121.25 97.5 121.25C84.1071 121.25 73.25 110.393 73.25 97V48.5C73.25 35.1071 84.1071 24.25 97.5 24.25C110.893 24.25 121.75 35.1071 121.75 48.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
                    width={vw(50)} height={vw(50)} />
                <Text style={[componentStyle.nu24Reg140, styles.textCenter,]}>Tạo một bản ghi mới để bé được nghe giọng của bạn nào!</Text>
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <SafeAreaView style={[styles.flex1, { backgroundColor: 'white' }]}>
                    <StatusBar backgroundColor="transparent" barStyle="dark-content" />
                    <View style={[styles.shadowW0H05Black, styles.flexRowBetweenCenter, { borderBottomRightRadius: vw(6.25), borderBottomLeftRadius: vw(6.25), padding: vw(6) }]}>
                        <TouchableOpacity
                            onPress={() => { setModalVisible(false) }}>
                            {leftArrow(vw(9), vw(9), colorStyle.blue)}
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={[styles.flex1, { backgroundColor: colorStyle.neu3 }]}>

                    </ScrollView>
                </SafeAreaView>
            </Modal>
        </SafeAreaView>
    )
}
export default RecordScreen;