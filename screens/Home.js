import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, StatusBar, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";
import { useNavigatio, NavigationContainer } from '@react-navigation/native';

import { colorStyle, useCustomFonts } from "../assets/componentStyleSheet";
import componentStyle from "../assets/componentStyleSheet";
import styles from "../assets/stylesheet";

import { logoBar, marginBottomForScrollView, searchComponent, searchNav, } from "../assets/component";
import { bellNav, bookmark, headphoneIcon } from "../assets/svgXml";

function Home({ navigation }) {
    const [dataUser2, setDataUser2] = React.useState(false);

    let user1
    let user2

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

    let categoryList = [
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

    const [bookmarkStates, setBookmarkStates] = useState(Array(dataPlaceHolder.length).fill(false));
    function toggleBookmark(index) {
        const newBookmarkStates = [...bookmarkStates];
        newBookmarkStates[index] = !newBookmarkStates[index];
        setBookmarkStates(newBookmarkStates);
    }

    /** ACTIVE WITH FIREBASE */
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await retrieveData('books');
    //             setDATA(data);
    //         } catch (error) {
    //             console.error("Error retriveing data:", error);
    //         }
    //     };
    //     fetchData();
    // }, []);
    // const toggleBookmark = async (itemId) => {
    //     try {
    //         // change it in local
    //         setBookmark(!bookmark);

    //         const bookRef = doc(firestore, 'books', itemId); // Assuming 'books' is your Firestore collection

    //         // Get the current bookmark state from Firestore
    //         const docSnapshot = await getDoc(bookRef);
    //         const currentBookmarkState = docSnapshot.data().bookmark;

    //         // Update the bookmark state by toggling it
    //         await updateDoc(bookRef, {
    //             bookmark: !currentBookmarkState,
    //         });

    //         // Update the local state (DATA) to reflect the change
    //         setDATA((prevData) => {
    //             return prevData.map((item) => {
    //                 if (item.id === itemId) {
    //                     return { ...item, bookmark: !currentBookmarkState };
    //                 }
    //                 return item;
    //             });
    //         });
    //     } catch (error) {
    //         console.error('Error toggling bookmark:', error);
    //     }
    // };

    return (
        <SafeAreaView style={[styles.flex1, { backgroundColor: 'white' }]}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            {logoBar([vw(11), vw(11)], null, 'white', [], bellNav('black', vw(10.5), vw(10.5)), null)}
            <ScrollView contentContainerStyle={[styles.flexCol, styles.gap4vw]} style={[styles.flex1,]}>
                <View style={[{ marginHorizontal: vw(5), }]}>
                    {searchComponent(colorStyle.neu2, null, 'Search', 'rgba(0, 0, 0, 0.05)', null, null, null)}
                </View>
                <View>
                    <View style={[styles.flexRowEvenlyCenter, { marginHorizontal: vw(5), gap: vw(5), marginTop: vw(4) }]}>
                        <TouchableOpacity
                            style={[styles.flex1, styles.flexRowCenter, styles.borderRadius100, styles.border1, { paddingVertical: vw(1.5), paddingHorizontal: vw(2.5), backgroundColor: !dataUser2 ? colorStyle.blue : 'white', borderColor: colorStyle.blue }]}
                            onPress={() => { setDataUser2(false) }}>
                            <Text style={[!dataUser2 ? componentStyle.nu20ExBold140 : componentStyle.nu20Reg140, { color: !dataUser2 ? 'white' : colorStyle.blue }]}>Của Tôm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.flex1, styles.flexRowCenter, styles.borderRadius100, styles.border1, { paddingVertical: vw(1.5), paddingHorizontal: vw(2.5), backgroundColor: dataUser2 ? colorStyle.blue : 'white', borderColor: colorStyle.blue }]}
                            onPress={() => { setDataUser2(true) }}>
                            <Text style={[dataUser2 ? componentStyle.nu20ExBold140 : componentStyle.nu20Reg140, { color: dataUser2 ? 'white' : colorStyle.blue }]}>Của Cua</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={[componentStyle.nu24ExBold140, styles.marginHorizontal5vw]}>{user1 ? !dataUser2 ? user1.name : user2.name : !dataUser2 ? 'Tôm' : 'Cua'} tiếp tục nghe</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={[styles.flexRow, styles.w100, styles.overflowXScroll]}>
                    {user1 ?
                        user1.slice(0, 10).map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => { navigation.navigate('BookDetail', { item: item }) }}
                                    style={[styles.flexCol, styles.marginLeft5vw, { width: vw(42.5), backgroundColor: !dataUser2 ? colorStyle.red : colorStyle.sec1, borderRadius: vw(2.5), borderWidth: vw(0.5), borderColor: !dataUser2 ? colorStyle.red : colorStyle.sec1, }]}>
                                    <Image source={item.img ? item.img : require('../assets/images/placeholder.jpg')} resizeMode="center" style={[styles.flex1, { height: vw(15.5), width: '100%', borderTopRightRadius: vw(2), borderTopLeftRadius: vw(2), }]} />
                                    <View style={[{ marginTop: vw(1.25), marginHorizontal: vw(2.5), marginBottom: vw(2) }]}>
                                        <Text numberOfLines={1} style={[componentStyle.nu12ExBold120, styles.overflowHiddenEllipsis, { color: !dataUser2 ? colorStyle.neu3 : colorStyle.neu1 }]}>{item.name}</Text>
                                        <Text numberOfLines={1} style={[componentStyle.nu10Reg140, styles.overflowHiddenEllipsis, { color: !dataUser2 ? colorStyle.saoAV : colorStyle.neu3 }]}>| {item.category}</Text>
                                        <View style={[styles.flexRow, styles.gap2vw]}>{headphoneIcon(!dataUser2 ? colorStyle.saoAV : colorStyle.neu3, vw(2), vw(2))}<Text numberOfLines={1} style={[componentStyle.nu10ExBold100, styles.overflowHiddenEllipsis, { color: !dataUser2 ? colorStyle.saoAV : colorStyle.neu3 }]}>Còn lại: {item.timeLeft}</Text></View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                        :
                        dataPlaceHolder.slice(0, 10).map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => { navigation.navigate('BookDetail', { item: item }) }}
                                    style={[styles.flexCol, styles.marginLeft5vw, { width: vw(42.5), backgroundColor: !dataUser2 ? colorStyle.red : colorStyle.sec1, borderRadius: vw(2.5), borderWidth: vw(0.5), borderColor: !dataUser2 ? colorStyle.red : colorStyle.sec1, }]}>
                                    <Image source={item.img ? item.img : require('../assets/images/placeholder.jpg')} resizeMode="center" style={[styles.flex1, { height: vw(15.5), width: '100%', borderTopRightRadius: vw(2), borderTopLeftRadius: vw(2), }]} />
                                    <View style={[{ marginTop: vw(1.25), marginHorizontal: vw(2.5), marginBottom: vw(2) }]}>
                                        <Text numberOfLines={1} style={[componentStyle.nu12ExBold120, styles.overflowHiddenEllipsis, { color: !dataUser2 ? colorStyle.neu3 : colorStyle.neu1 }]}>{item.name}</Text>
                                        <Text numberOfLines={1} style={[componentStyle.nu10Reg140, styles.overflowHiddenEllipsis, { color: !dataUser2 ? colorStyle.saoAV : colorStyle.neu3 }]}>| {item.category}</Text>
                                        <View style={[styles.flexRow, styles.gap2vw]}>{headphoneIcon(!dataUser2 ? colorStyle.saoAV : colorStyle.neu3, vw(2), vw(2))}<Text numberOfLines={1} style={[componentStyle.nu10ExBold100, styles.overflowHiddenEllipsis, { color: !dataUser2 ? colorStyle.saoAV : colorStyle.neu3 }]}>Còn lại: {item.timeLeft}</Text></View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                </ScrollView>

                <View style={[styles.flexRowBetweenCenter, styles.marginHorizontal5vw]}>
                    <Text style={[componentStyle.nu24ExBold140,]}>Gợi ý cho {user1 ? !dataUser2 ? user1.name : user2.name : !dataUser2 ? 'Tôm' : 'Cua'}</Text>
                    <TouchableOpacity
                    // onPress={()=>{navigation.navigate('BookList')}} // ACTIVE & EDIT WITH FIREBASE
                    >
                        <Text style={[componentStyle.nu14Reg140,]}>Xem thêm</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.flexRow, styles.w90, styles.justifyContentSpaceBetween, styles.flexWrap, styles.alignSelfCenter, styles.gap5vw]}>
                    {user1 ?
                        user1.slice(0, 4).map((item, index) => {
                            const isBookmarked = bookmarkStates[index];
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => { navigation.navigate('BookDetail', { item: item }) }}
                                    style={[styles.flexCol, styles.shadowW0H05Black, { width: vw(42.5), backgroundColor: colorStyle.pink, borderRadius: vw(2.5), }]}>
                                    <Image source={item.img ? item.img : require('../assets/images/placeholder.jpg')} resizeMode="center" style={[styles.alignSelfCenter, { height: vw(37.5), width: vw(37.5), marginTop: vw(2.5), borderRadius: vw(2.5), }]} />
                                    <View style={[{ marginTop: vw(1.25), marginHorizontal: vw(2.5), marginTop: vw(2), marginBottom: vw(3) }]}>
                                        <Text numberOfLines={1} style={[componentStyle.nu16ExBold122, styles.overflowHiddenEllipsis, { color: colorStyle.neu1, marginVertical: vw(1) }]}>{item.name}</Text>
                                        <View style={[styles.flexRowBetweenCenter, styles.gap2vw]}>
                                            <View>
                                                <Text numberOfLines={1} style={[componentStyle.nu10Reg140, styles.overflowHiddenEllipsis, { color: colorStyle.blue }]}>{item.category}</Text>
                                                <Text numberOfLines={1} style={[componentStyle.nu10Reg140, styles.overflowHiddenEllipsis, { color: colorStyle.neu1 }]}>Thời lượng: {item.timeLeft}</Text>
                                            </View>
                                            <TouchableOpacity
                                                style={{ backgroundColor: colorStyle.secCPN, borderRadius: vw(100), padding: vw(1) }}
                                                //onPress={() => { toggleBookmark(item.id) }} // ACTIVE WITH FIREBASE
                                                onPress={() => { toggleBookmark(index) }}>
                                                {bookmark(isBookmarked, vw(6), vw(6))}
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                        :
                        dataPlaceHolder.slice(0, 4).map((item, index) => {
                            const isBookmarked = bookmarkStates[index];
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => { navigation.navigate('BookDetail', { item: item }) }}
                                    style={[styles.flexCol, styles.shadowW0H05Black, { width: vw(42.5), backgroundColor: colorStyle.pink, borderRadius: vw(2.5), }]}>
                                    <Image source={item.img ? item.img : require('../assets/images/placeholder.jpg')} resizeMode="center" style={[styles.alignSelfCenter, { height: vw(37.5), width: vw(37.5), marginTop: vw(2.5), borderRadius: vw(2.5), }]} />
                                    <View style={[{ marginTop: vw(1.25), marginHorizontal: vw(2.5), marginTop: vw(2), marginBottom: vw(3) }]}>
                                        <Text numberOfLines={1} style={[componentStyle.nu16ExBold122, styles.overflowHiddenEllipsis, { color: colorStyle.neu1, marginVertical: vw(1) }]}>{item.name}</Text>
                                        <View style={[styles.flexRowBetweenCenter, styles.gap2vw]}>
                                            <View>
                                                <Text numberOfLines={1} style={[componentStyle.nu10Reg140, styles.overflowHiddenEllipsis, { color: colorStyle.blue }]}>{item.category}</Text>
                                                <Text numberOfLines={1} style={[componentStyle.nu10Reg140, styles.overflowHiddenEllipsis, { color: colorStyle.neu1 }]}>Thời lượng: {item.timeLeft}</Text>
                                            </View>
                                            <TouchableOpacity
                                                style={{ backgroundColor: colorStyle.secCPN, borderRadius: vw(100), padding: vw(1) }}
                                                //onPress={() => { toggleBookmark(item.id) }} // ACTIVE WITH FIREBASE
                                                onPress={() => { toggleBookmark(index) }}>
                                                {bookmark(isBookmarked, vw(6), vw(6))}
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                </View>

                <View style={[styles.flexRowBetweenCenter, styles.marginHorizontal5vw]}>
                    <Text style={[componentStyle.nu24ExBold140,]}>Danh mục sách nói</Text>
                    <TouchableOpacity
                    // onPress={()=>{navigation.navigate('BookList')}} // ACTIVE & EDIT WITH FIREBASE
                    >
                        <Text style={[componentStyle.nu14Reg140,]}>Xem thêm</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={[styles.flexRow, styles.w100, styles.overflowXScroll]}>
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
                </ScrollView>


                <View style={[{ backgroundColor: colorStyle.blue, borderTopRightRadius: vw(5), borderTopLeftRadius: vw(5), paddingVertical: vw(4) }]}>
                    <View style={[styles.flexRowBetweenCenter, styles.marginHorizontal5vw, { marginBottom: vw(5) }]}>
                        <Text style={[componentStyle.nu24ExBold140, { color: colorStyle.neu3 }]}>Sách mới</Text>
                        <TouchableOpacity
                        // onPress={()=>{navigation.navigate('BookList')}} // ACTIVE & EDIT WITH FIREBASE
                        >
                            <Text style={[componentStyle.nu14Reg140, { color: colorStyle.neu3 }]}>Xem thêm</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.flexRow, styles.w90, styles.justifyContentSpaceBetween, styles.flexWrap, styles.alignSelfCenter, styles.gap5vw]}>
                        {user1 ?
                            user1.slice(0, 4).map((item, index) => {
                                const isBookmarked = bookmarkStates[index];
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => { navigation.navigate('BookDetail', { item: item }) }}
                                        style={[styles.flexCol, styles.shadowW0H05Black, { width: vw(42.5), backgroundColor: '#CAEBFF', borderRadius: vw(2.5), }]}>
                                        <Image source={item.img ? item.img : require('../assets/images/placeholder.jpg')} resizeMode="center" style={[styles.alignSelfCenter, { height: vw(37.5), width: vw(37.5), marginTop: vw(2.5), borderRadius: vw(2.5), }]} />
                                        <View style={[{ marginTop: vw(1.25), marginHorizontal: vw(2.5), marginTop: vw(2), marginBottom: vw(3) }]}>
                                            <Text numberOfLines={1} style={[componentStyle.nu16ExBold122, styles.overflowHiddenEllipsis, { color: colorStyle.neu1, marginVertical: vw(1) }]}>{item.name}</Text>
                                            <View style={[styles.flexRowBetweenCenter, styles.gap2vw]}>
                                                <View>
                                                    <Text numberOfLines={1} style={[componentStyle.nu10Reg140, styles.overflowHiddenEllipsis, { color: colorStyle.blue }]}>{item.category}</Text>
                                                    <Text numberOfLines={1} style={[componentStyle.nu10Reg140, styles.overflowHiddenEllipsis, { color: colorStyle.neu1 }]}>Thời lượng: {item.timeLeft}</Text>
                                                </View>
                                                <TouchableOpacity
                                                    style={{ backgroundColor: colorStyle.secCPN, borderRadius: vw(100), padding: vw(1) }}
                                                    //onPress={() => { toggleBookmark(item.id) }} // ACTIVE WITH FIREBASE
                                                    onPress={() => { toggleBookmark(index) }}>
                                                    {bookmark(isBookmarked, vw(6), vw(6))}
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                            :
                            dataPlaceHolder.slice(0, 4).map((item, index) => {
                                const isBookmarked = bookmarkStates[index];
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => { navigation.navigate('BookDetail', { item: item }) }}
                                        style={[styles.flexCol, styles.shadowW0H05Black, { width: vw(42.5), backgroundColor: '#CAEBFF', borderRadius: vw(2.5), }]}>
                                        <Image source={item.img ? item.img : require('../assets/images/placeholder.jpg')} resizeMode="center" style={[styles.alignSelfCenter, { height: vw(37.5), width: vw(37.5), marginTop: vw(2.5), borderRadius: vw(2.5), }]} />
                                        <View style={[{ marginTop: vw(1.25), marginHorizontal: vw(2.5), marginTop: vw(2), marginBottom: vw(3) }]}>
                                            <Text numberOfLines={1} style={[componentStyle.nu16ExBold122, styles.overflowHiddenEllipsis, { color: colorStyle.neu1, marginVertical: vw(1) }]}>{item.name}</Text>
                                            <View style={[styles.flexRowBetweenCenter, styles.gap2vw]}>
                                                <View>
                                                    <Text numberOfLines={1} style={[componentStyle.nu10Reg140, styles.overflowHiddenEllipsis, { color: colorStyle.blue }]}>{item.category}</Text>
                                                    <Text numberOfLines={1} style={[componentStyle.nu10Reg140, styles.overflowHiddenEllipsis, { color: colorStyle.neu1 }]}>Thời lượng: {item.timeLeft}</Text>
                                                </View>
                                                <TouchableOpacity
                                                    style={{ backgroundColor: colorStyle.secCPN, borderRadius: vw(100), padding: vw(1) }}
                                                    //onPress={() => { toggleBookmark(item.id) }} // ACTIVE WITH FIREBASE
                                                    onPress={() => { toggleBookmark(index) }}>
                                                    {bookmark(isBookmarked, vw(6), vw(6))}
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                    </View>
                    {marginBottomForScrollView()}
                    {marginBottomForScrollView()}
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
export default Home;