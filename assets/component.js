import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./stylesheet";
import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";
import componentStyle, { colorStyle } from './componentStyleSheet';
import Svg, { SvgXml } from 'react-native-svg';
import { searchIcon, infoIcon, leftArrow, shareIcon, heartDouble, bookmark, Xbutton, } from "./svgXml";
import { useNavigation } from '@react-navigation/native';
import { useNavigatio, NavigationContainer } from '@react-navigation/native';

export const logoBar = ([w, h], title, environmentColor, profileSoure, icon, fnc) => {
    const navigation = useNavigation();

    return (
        <View style={[styles.positionRelative, { zIndex: 10 }]}>
            <View style={[styles.flexRowBetweenCenter, { paddingHorizontal: vw(6), paddingBottom: vw(6) }]}>
                {profileSoure == null ?
                    null :
                    < Image source={profileSoure == undefined ? require('../assets/images/placeholder.jpg') : profileSoure} style={[{ borderWidth: vw(0.5), borderColor: 'black', width: w, height: h, borderRadius: vw(100) }]} />

                }
                {title ?
                    <Text>{title}</Text>
                    : <Image source={require('../assets/images/logo.png')} style={[{ width: vw(44.75), height: vw(19) }]} />
                }
                {icon ?
                    <TouchableOpacity
                        onPress={fnc}
                    >
                        {icon}
                    </TouchableOpacity>
                    : null
                }
            </View>
            <View style={[styles.positionAbsolute, styles.w100, styles.h100, { zIndex: -1, backgroundColor: environmentColor }]}></View>
        </View>
    )
}

export const searchComponent = (color = colorStyle.iconDefault, backarrow, placeholder, environmentColor, icon, gap, fnc, suggest,) => {
    const [search, setSearch] = React.useState("");
    const [searchBar, setSearchBar] = React.useState(false);
    const navigation = useNavigation();

    return (
        <View style={[styles.flexCol, styles.gap5vw]}>
            <View style={[styles.flexRowBetweenCenter, { gap: gap }]}>
                {backarrow ?
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>{backarrow(color, vw(10), vw(10))}</TouchableOpacity> : null
                }
                <View style={[styles.flexRow, styles.flex1, { gap: vw(2.5), padding: vw(3.5), backgroundColor: environmentColor, borderRadius: vw(100) }]}>
                    {searchIcon(color, vw(4), vw(4))}
                    <TextInput
                        style={[styles.flex1]}
                        placeholder={placeholder}
                        placeholderTextColor={color}
                        placeholderStyle={{ fontFamily: 'OpenSans_500Medium' }}
                        onChangeText={(text) => setSearch(text)}
                        value={search}
                        editable
                        numberOfLines={1}
                        onFocus={() => setSearchBar(true)}
                        onBlur={() => setSearchBar(false)}
                    />
                </View>
                {icon ?
                    <TouchableOpacity onPress={fnc}>{icon}</TouchableOpacity> : null
                }
            </View>
            {suggest ?
                <View style={[styles.flexRow, styles.flexWrap, { gap: vw(2.5) }]}>
                    {suggest.map(
                        (item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.flexRowBetweenCenter, styles.border1, { borderColor: color, borderRadius: vw(6) }]}>
                                    <Text style={[componentStyle.Mon14Reg, { color: colorStyle.grey }]}>{item}</Text>
                                    {Xbutton(color, vw(5), vw(5))}
                                </TouchableOpacity>
                            )
                        }
                    )}
                </View>
                : null
            }
        </View>
    )
}

export const navTopBar = ([w, h], environmentColor, title, item, fnc) => {
    const navigation = useNavigation();

    return (
        <View style={[styles.positionRelative, { zIndex: 10 }]}>
            <View style={[styles.dFlex, styles.flexRow, styles.w100, styles.justifyContentSpaceBetween, styles.gap4vw, styles.alignItemsCenter, { backgroundColor: null, paddingBottom: vw(5), paddingTop: vw(2), paddingHorizontal: vw(6.5), borderBottomRightRadius: vw(5), borderBottomLeftRadius: vw(5) }]}>
                <TouchableOpacity
                    style={[{
                        padding: vw(2), borderRadius: vw(1.5), backgroundColor: null,
                    },
                    styles.alignItemsCenter, styles.justifyContentCenter, styles.flexRow,]}

                    onPress={() => { navigation.goBack() }}>
                    {leftArrow(w, h)}
                </TouchableOpacity>

                <Text>{title}</Text>

                <TouchableOpacity
                    style={[{
                        padding: vw(2), borderRadius: vw(1.5), backgroundColor: null,
                    },
                    styles.alignItemsCenter, styles.justifyContentCenter, styles.flexRow,]}
                    onPress={() => { fnc }}>
                    {item}
                </TouchableOpacity>
            </View>
            <View style={[styles.w100, styles.h100, styles.positionAbsolute, { zIndex: -1, backgroundColor: environmentColor }]}></View>
        </View>
    );
}

export const notiModal = (toggle = false, topLeftNormal, centerBig, centerNormal, actionMessage, fnc, onClose) => {
    // const [isPressed, setIsPressed] = useState(toggle);
    if (toggle) {
        return (
            <View style={[styles.positionAbsolute, styles.w100vw, styles.h100vh, styles.flexRow, styles.justifyContentCenter, styles.alignItemsCenter, { backgroundColor: 'rgba(0,0,0,0.4)' }]}>
                <View style={[styles.w90, styles.flexCol, styles.gap2vw, styles.justifyContentCenter, styles.alignItemsCenter, { paddingHorizontal: vw(5), paddingVertical: vw(4), borderRadius: vw(4), backgroundColor: colorStyle.white }]}>
                    {{ topLeftNormal } ? <Text style={[componentStyle.Mon14Bold, { color: colorStyle.black }]}>{topLeftNormal}</Text> : null}
                    {{ centerBig } ? <Text style={[componentStyle.Os24Bold, { color: colorStyle.blue4 }]}>{centerBig}</Text> : null}
                    {{ centerNormal } ? <Text style={[componentStyle.Mon12Reg, { color: colorStyle.black }]}>{centerNormal}</Text> : null}
                    <View style={[styles.flexRow, styles.justifyContentCenter, styles.gap4vw, { paddingVertical: vw(2.5) }]}>
                        <TouchableOpacity
                            onPress={() => { onClose() }}
                            style={[{ borderWidth: vw(0.5), borderColor: colorStyle.blue1, borderRadius: vw(1.5), paddingVertical: vw(2.5), paddingHorizontal: vw(5) }]}>
                            <Text style={[componentStyle.Mon14Bold, { color: colorStyle.black }]}>Quay lại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[{ borderWidth: vw(0.5), borderColor: colorStyle.blue1, borderRadius: vw(1.5), paddingVertical: vw(2.5), paddingHorizontal: vw(5), backgroundColor: colorStyle.blue1 }]}
                            onPress={() => { fnc() }}>
                            <Text style={[componentStyle.Mon14Bold, { color: colorStyle.tan1 }]}>{actionMessage}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    }
}

export const marginBottomForScrollView = () => {
    return (
        <View style={{ height: vh(5), opacity: 0 }}></View>
    )
}
