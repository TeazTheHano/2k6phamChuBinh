import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, StatusBar, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";
import { useNavigatio, NavigationContainer } from '@react-navigation/native';

import { colorStyle, useCustomFonts } from "../assets/componentStyleSheet";
import componentStyle from "../assets/componentStyleSheet";
import styles from "../assets/stylesheet";

import { logoBar, marginBottomForScrollView, searchComponent, searchNav, } from "../assets/component";
import { bellNav, bookmark, filterIcon, headphoneIcon } from "../assets/svgXml";

function SearchScreen({ navigation }) {
    const [isShowResult, setIsShowResult] = React.useState(false);

    let user1
    let categoryPlaceHolder = [
        {
            id: 1,
            name: 'Truyen dan gian',
        },
        {
            id: 2,
            name: 'Truyen dan gian',
        },
        {
            id: 3,
            name: 'Truyen dan gian',
        },
        {
            id: 4,
            name: 'Truyen dan gian',
        },
        {
            id: 5,
            name: 'Truyen dan gian',
        }
    ]

    const categoryShow = () => {
        return (
            <View style={[styles.flexRow, styles.w100, styles.flexWrap, { rowGap: vw(5) }]}>
                {/* change data cate */}
                {user1 ?
                    user1.slice(0, 10).map((item, index) => {
                        let bgImage
                        switch (index) {
                            case 1:
                                bgImage = require('../assets/images/background/cateBG2.png')
                                break;
                            case 2:
                                bgImage = require('../assets/images/background/cateBG3.png')
                                break;
                            case 3:
                                bgImage = require('../assets/images/background/cateBG4.png')
                                break;
                            default:
                                bgImage = require('../assets/images/background/cateBG1.png')
                                break;
                        }
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => { navigation.navigate('BookDetail', { item: item }) }}
                                style={[styles.flexCol, styles.marginLeft5vw, { width: vw(42.5), height: vw(35), borderRadius: vw(1.25), }]}>
                                <Image source={bgImage ? bgImage : require('../assets/images/placeholder.jpg')} resizeMode="center" style={[styles.image100Cover, { borderRadius: vw(1.25), }]} />
                                <View style={[styles.positionAbsolute, styles.w100, styles.h100, styles.flexCol, styles.justifyContentCenter]}>
                                    <Text numberOfLines={3} style={[styles.textCenter, { marginLeft: vw(2), width: '84%', fontFamily: 'Nunito_900Black', fontSize: vw(5), overflow: 'hidden' }]}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                    :
                    categoryPlaceHolder.map((item, index) => {
                        let bgImage
                        switch (index) {
                            case 1:
                                bgImage = require('../assets/images/background/cateBG2.png')
                                break;
                            case 2:
                                bgImage = require('../assets/images/background/cateBG3.png')
                                break;
                            case 3:
                                bgImage = require('../assets/images/background/cateBG4.png')
                                break;
                            default:
                                bgImage = require('../assets/images/background/cateBG1.png')
                                break;
                        }
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => { navigation.navigate('BookDetail', { item: item }) }}
                                style={[styles.flexCol, styles.marginLeft5vw, { width: vw(42.5), height: vw(35), borderRadius: vw(1.25), }]}>
                                <Image source={bgImage ? bgImage : require('../assets/images/placeholder.jpg')} resizeMode="center" style={[styles.image100Cover, { borderRadius: vw(1.25), }]} />
                                <View style={[styles.positionAbsolute, styles.w100, styles.h100, styles.flexCol, styles.justifyContentCenter]}>
                                    <Text numberOfLines={3} style={[styles.textCenter, { marginLeft: vw(2), width: '84%', fontFamily: 'Nunito_900Black', fontSize: vw(5), overflow: 'hidden' }]}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
            </View>
        )
    }

    const ResultShow = () => {
        return (
            <View>
            </View>
        )
    }
    return (
        <SafeAreaView style={[styles.flex1, { backgroundColor: 'white' }]}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            <View style={[{ paddingHorizontal: vw(7.5) }]}>
                {searchComponent(colorStyle.gray2, null, 'Search', '#0000000D', filterIcon(colorStyle.iconDefault, vw(10), vw(10)), vw(4), null, null)}
            </View>
            <ScrollView contentContainerStyle={[styles.flexCol, styles.gap4vw]} style={[styles.flex1,]}>
                {!isShowResult ?
                    categoryShow()
                    : ResultShow()
                }
            </ScrollView>
        </SafeAreaView>
    )
}
export default SearchScreen;