import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, StatusBar, SafeAreaView, ScrollView, TouchableOpacity, Alert, Modal, } from "react-native";
import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";
import { useNavigatio, NavigationContainer } from '@react-navigation/native';

import { colorStyle, useCustomFonts } from "../assets/componentStyleSheet";
import componentStyle from "../assets/componentStyleSheet";
import styles from "../assets/stylesheet";

import { logoBar, marginBottomForScrollView, searchComponent, searchNav, } from "../assets/component";
import { Xbutton, bellNav, bookmark, filterIcon, headphoneIcon } from "../assets/svgXml";

function SearchScreen({ navigation }) {
    const [isShowResult, setIsShowResult] = React.useState(false);
    const [isActiveFilter, setIsActiveFilter] = React.useState(false);
    const [resultData, setResultData] = React.useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [overSeaFilter, setOverSeaFilter] = useState(0);
    const [fiveStarRateFilter, setFiveStarRateFilter] = useState(0);
    const [resetFilter, setResetFilter] = useState(false);

    let user1
    const selectedFilter = []

    let categoryList = [
        {
            id: 0,
            name: 'Tất cả'
        },
        {
            id: 1,
            name: 'Truyện dân gian',
        },
        {
            id: 2,
            name: 'Truyện cổ tích',
        },
        {
            id: 3,
            name: 'Sự tích',
        },
        {
            id: 4,
            name: 'Thơ, ca dao tục ngữ',
        },
        {
            id: 5,
            name: 'Bách khoa toàn thư',
        },
        {
            id: 6,
            name: 'Truyện cười',
        },
        {
            id: 7,
            name: 'Hát ru/Đồng dao',
        },
    ]

    let timeFilter = [
        {
            id: 1,
            name: 'Tất cả',
        },
        {
            id: 1,
            name: `< 10 phút`,
        },
        {
            id: 1,
            name: `> 10 phút`,
        },
        {
            id: 1,
            name: `< 30 phút`,
        },
        {
            id: 1,
            name: `> 30 phút`,
        },
    ]

    let dataPlaceHolder = [
        {
            id: 1,
            img: require('../assets/images/placeholder.jpg'),
            name: 'Tri khon cua ta day',
            category: 'Truyen dan gian',
            timeLeft: '1h 30m',
            duaration: '2h 30m',
            isBookmarked: true,
        },
        {
            id: 2,
            img: require('../assets/images/placeholder.jpg'),
            name: 'Tri khon cua taasdfasdf day',
            category: 'Truyen dan gian',
            timeLeft: '1h 30m',
            duaration: '2h 30m',
            isBookmarked: false,
        },
        {
            id: 3,
            img: require('../assets/images/placeholder.jpg'),
            name: 'Tri khasfason cua taadsfasdfasdf day',
            category: 'Truyen dan gian',
            timeLeft: '1h 30m',
            duaration: '2h 30m',
            isBookmarked: false,
        },
        {
            id: 4,
            img: require('../assets/images/placeholder.jpg'),
            name: 'Tri khasfason cua taadsfasdfasdf day',
            category: 'Truyen dan gian',
            timeLeft: '1h 30m',
            duaration: '2h 30m',
            isBookmarked: false,
        },
        {
            id: 5,
            img: require('../assets/images/placeholder.jpg'),
            name: 'Tri khasfason cua taadsfasdfasdf day',
            category: 'Truyen dan gian',
            timeLeft: '1h 30m',
            duaration: '2h 30m',
            isBookmarked: false,
        }
    ]

    let suggestSearch = [
        'Tấm cám',
        'Sự tích Trầu cau',
        'Lợn cưới áo mới',
        'Sọ dừa',
        'Tích chu',
    ]

    const [selectedStates, setSelectedStates] = useState(Array(categoryList.length).fill(false));
    function toggleSelected(index) {
        const newSelectedStates = [...selectedStates];
        newSelectedStates[index] = !newSelectedStates[index];
        setSelectedStates(newSelectedStates);
    }
    const [selectedStatesTime, setSelectedStatesTime] = useState(Array(timeFilter.length).fill(false));
    function toggleSelectedTime(index) {
        const newSelectedStatesTime = [...selectedStatesTime];
        newSelectedStatesTime[index] = !newSelectedStatesTime[index];
        setSelectedStatesTime(newSelectedStatesTime);
    }
    const [selectedStatesSuggestion, setSelectedStatesSuggestion] = useState(Array(suggestSearch.length).fill(false));
    function toggleSelectedSuggestion(index) {
        const newSelectedStatesSuggestion = [...selectedStatesSuggestion];
        newSelectedStatesSuggestion[index] = !newSelectedStatesSuggestion[index];
        setSelectedStatesSuggestion(newSelectedStatesSuggestion);
    }


    useEffect(() => {
        if (resetFilter) {
            setOverSeaFilter(0);
            setFiveStarRateFilter(0);
            setResetFilter(false);

            Object.keys(categoryList).forEach((key) => {
                setSelectedStates(key, false);
            });

            Object.keys(timeFilter).forEach((key) => {
                setSelectedStatesTime(key, false);
            });
        }
    }, [resetFilter]);

    const categoryShow = () => {
        return (
            <View style={[styles.flex1]}>
                <View style={[{ paddingHorizontal: vw(7.5), paddingBottom: vw(6) }]}>
                    {searchComponent(colorStyle.gray2, null, 'Search', '#0000000D', filterIcon(colorStyle.iconDefault, vw(10), vw(10)), vw(4), () => { setModalVisible(true) },)}
                    <View style={[styles.flexRow, styles.flexWrap, { gap: vw(2), marginTop: vw(4) }]}>
                        {suggestSearch.map(
                            (item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            !selectedFilter.includes(item)
                                                ? selectedFilter.push(item)
                                                : selectedFilter.includes(item)
                                                    ? selectedFilter.splice(selectedFilter.indexOf(item), 1)
                                                    : null;
                                                    
                                            console.log(selectedFilter);
                                        }}
                                        style={[styles.flexRowBetweenCenter, { paddingHorizontal: vw(3.5), paddingVertical: vw(1), borderWidth: vw(0.5), borderColor: colorStyle.neu2, borderRadius: vw(6), borderColor: colorStyle.neu2 }]}>
                                        <Text style={[componentStyle.nu14Reg140, { color: colorStyle.neu2 }]}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        )}
                    </View>
                </View>
                <ScrollView contentContainerStyle={[styles.flexCol, styles.gap4vw]} style={[styles.flex1,]}>
                    <View style={[styles.flexRow, styles.w100, styles.flexWrap, { rowGap: vw(5) }]}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={[styles.flexColBetweenCenter, styles.w100vw, styles.h100vh, styles.positionRelative]}>
                                <TouchableOpacity style={[styles.w100, styles.h100vh, { backgroundColor: 'rgba(0,0,0,0.3)' }]} onPress={() => { setModalVisible(false) }}></TouchableOpacity>
                                <View style={[styles.flex1, styles.w100, styles.h80vh, styles.positionAbsolute, { backgroundColor: 'white', borderTopLeftRadius: vw(5), borderTopRightRadius: vw(5), bottom: 0 }]}>
                                    <Text style={[componentStyle.nu24ExBold140, styles.textCenter, styles.paddingTop4vw]}>Bộ lọc tìm kiếm</Text>

                                    <ScrollView contentContainerStyle={{ gap: vw(5) }} style={[{ paddingHorizontal: vw(5) }]}>
                                        <Text style={[componentStyle.nu24ExBold140]}>Thể loại</Text>
                                        <View style={[styles.flexRow, styles.flexWrap, { gap: vw(2.5) }]}>
                                            {categoryList.map((item, index) => {
                                                const isSelected = selectedStates[index];
                                                return (
                                                    <TouchableOpacity onPress={() => { toggleSelected(index) }} key={index} style={[styles.flexRowBetweenCenter, styles.border1, { borderColor: isSelected ? colorStyle.blue : colorStyle.neu2, padding: vw(2.5), borderRadius: vw(1.5), backgroundColor: isSelected ? colorStyle.blue : null }]}>
                                                        <Text style={[isSelected ? componentStyle.nu16ExBold122 : componentStyle.nu16Reg140, { color: isSelected ? colorStyle.neu3 : colorStyle.neu2 }]}>{item.name}</Text>
                                                    </TouchableOpacity>
                                                )
                                            })}
                                        </View>

                                        <Text style={[componentStyle.nu24ExBold140]}>Thời gian</Text>
                                        <View style={[styles.flexRow, styles.flexWrap, { gap: vw(2.5) }]}>
                                            {timeFilter.map((item, index) => {
                                                const isSelectedTime = selectedStatesTime[index];
                                                return (
                                                    <TouchableOpacity onPress={() => { toggleSelectedTime(index) }} key={index} style={[styles.flexRowBetweenCenter, styles.border1, { borderColor: isSelectedTime ? colorStyle.blue : colorStyle.neu2, padding: vw(2.5), borderRadius: vw(1.5), backgroundColor: isSelectedTime ? colorStyle.blue : null }]}>
                                                        <Text style={[isSelectedTime ? componentStyle.nu16ExBold122 : componentStyle.nu16Reg140, { color: isSelectedTime ? colorStyle.neu3 : colorStyle.neu2 }]}>{item.name}</Text>
                                                    </TouchableOpacity>
                                                )
                                            })}
                                        </View>

                                        <Text style={[componentStyle.nu24ExBold140]}>Quốc gia</Text>
                                        <View style={[styles.flexRow, styles.flexWrap, { gap: vw(2.5) }]}>
                                            <TouchableOpacity onPress={() => { overSeaFilter != 1 ? setOverSeaFilter(1) : setOverSeaFilter(0) }} style={[styles.flexRowBetweenCenter, styles.border1, { borderColor: overSeaFilter == 1 ? colorStyle.blue : colorStyle.neu2, padding: vw(2.5), borderRadius: vw(1.5), backgroundColor: overSeaFilter == 1 ? colorStyle.blue : null }]}>
                                                <Text style={[overSeaFilter == 1 ? componentStyle.nu16ExBold122 : componentStyle.nu16Reg140, { color: overSeaFilter == 1 ? colorStyle.neu3 : colorStyle.neu2 }]}>Việt Nam</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => { overSeaFilter != 2 ? setOverSeaFilter(2) : setOverSeaFilter(0) }} style={[styles.flexRowBetweenCenter, styles.border1, { borderColor: overSeaFilter == 2 ? colorStyle.blue : colorStyle.neu2, padding: vw(2.5), borderRadius: vw(1.5), backgroundColor: overSeaFilter == 2 ? colorStyle.blue : null }]}>
                                                <Text style={[overSeaFilter == 2 ? componentStyle.nu16ExBold122 : componentStyle.nu16Reg140, { color: overSeaFilter == 2 ? colorStyle.neu3 : colorStyle.neu2 }]}>Nước ngoài</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <Text style={[componentStyle.nu24ExBold140]}>Sắp xếp</Text>
                                        <View style={[styles.flexRow, styles.flexWrap, { gap: vw(2.5) }]}>
                                            <TouchableOpacity onPress={() => { fiveStarRateFilter != 1 ? setFiveStarRateFilter(1) : setFiveStarRateFilter(0) }} style={[styles.flexRowBetweenCenter, styles.border1, { borderColor: fiveStarRateFilter == 1 ? colorStyle.blue : colorStyle.neu2, padding: vw(2.5), borderRadius: vw(1.5), backgroundColor: fiveStarRateFilter == 1 ? colorStyle.blue : null }]}>
                                                <Text style={[fiveStarRateFilter == 1 ? componentStyle.nu16ExBold122 : componentStyle.nu16Reg140, { color: fiveStarRateFilter == 1 ? colorStyle.neu3 : colorStyle.neu2 }]}>Đánh giá trên 3 sao</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => { fiveStarRateFilter != 2 ? setFiveStarRateFilter(2) : setFiveStarRateFilter(0) }} style={[styles.flexRowBetweenCenter, styles.border1, { borderColor: fiveStarRateFilter == 2 ? colorStyle.blue : colorStyle.neu2, padding: vw(2.5), borderRadius: vw(1.5), backgroundColor: fiveStarRateFilter == 2 ? colorStyle.blue : null }]}>
                                                <Text style={[fiveStarRateFilter == 2 ? componentStyle.nu16ExBold122 : componentStyle.nu16Reg140, { color: fiveStarRateFilter == 2 ? colorStyle.neu3 : colorStyle.neu2 }]}>Đánh giá 5 sao</Text>
                                            </TouchableOpacity>
                                        </View>
                                        {marginBottomForScrollView()}
                                    </ScrollView>

                                    <View style={[styles.flexRowEvenlyCenter, { backgroundColor: colorStyle.blue, padding: vw(6), paddingBottom: vw(10) }]}>
                                        <TouchableOpacity onPress={() => { setResetFilter(true); setModalVisible(false) }} style={[styles.border1, styles.w45, { borderColor: 'white', padding: vw(3.5), borderRadius: vw(2.5), }]}>
                                            <Text style={[styles.textCenter, componentStyle.nu16Reg140, { color: 'white' }]}>Xóa bộ lọc</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { console.log(selectedFilter); }} style={[styles.border1, styles.w45, { borderColor: colorStyle.blue, padding: vw(3.5), borderRadius: vw(2.5), backgroundColor: colorStyle.neu3 }]}>
                                            <Text style={[styles.textCenter, componentStyle.nu16Reg140, { color: 'black' }]}>Áp dụng tìm kiếm</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
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
                            categoryList.map((item, index) => {
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
                </ScrollView>
            </View >
        )
    }

    const ResultShow = () => {

        return (
            <View style={[styles.flex1]}>
                <View style={[{ paddingHorizontal: vw(7.5), paddingBottom: vw(6) }]}>
                    {searchComponent(colorStyle.gray2, null, 'Search', '#0000000D', filterIcon(colorStyle.iconDefault, vw(10), vw(10)), vw(4), () => { setModalVisible(true) }, suggestSearch, isActiveFilter)}
                </View>
                <ScrollView contentContainerStyle={[styles.flexCol, styles.gap4vw]} style={[styles.flex1,]}>
                    <View style={[styles.flexRow, styles.w100, styles.flexWrap, { rowGap: vw(5) }]}>
                        <View>
                            <Text>Kết quả tìm kiếm ({resultData.length > 1 ? resultData.length : dataPlaceHolder.length})</Text>
                        </View>
                    </View></ScrollView>
            </View>
        )
    }
    return (
        <SafeAreaView style={[styles.flex1, { backgroundColor: 'white' }]}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            {!isShowResult ?
                categoryShow()
                : ResultShow()
            }
        </SafeAreaView>
    )
}
export default SearchScreen;