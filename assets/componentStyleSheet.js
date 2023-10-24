import { StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';
import { useFonts } from 'expo-font';

import {
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light_Italic,
    Nunito_400Regular_Italic,
    Nunito_500Medium_Italic,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito';

export const useCustomFonts = () => {
    return useFonts({
        Nunito_200ExtraLight,
        Nunito_300Light,
        Nunito_400Regular,
        Nunito_500Medium,
        Nunito_600SemiBold,
        Nunito_700Bold,
        Nunito_800ExtraBold,
        Nunito_900Black,
        Nunito_200ExtraLight_Italic,
        Nunito_300Light_Italic,
        Nunito_400Regular_Italic,
        Nunito_500Medium_Italic,
        Nunito_600SemiBold_Italic,
        Nunito_700Bold_Italic,
        Nunito_800ExtraBold_Italic,
        Nunito_900Black_Italic,
        'fsThin': require('../assets/fonts/FS-PF-BeauSans-Pro-Thin.ttf'),
        'fsLight': require('../assets/fonts/FS-PF-BeauSans-Pro-Light.ttf'),
        'fsBold': require('../assets/fonts/FS-PF-BeauSans-Pro-Bold.ttf'),
        'fsSemiBold': require('../assets/fonts/FS-PF-BeauSans-Pro-SemiBold.ttf'),
        'fsBlack': require('../assets/fonts/FS-PF-BeauSans-Pro-Black.ttf'),
    });
};

export const colorStyle = StyleSheet.create({

    sec1: '#F89A11',
    sec3: '#EA4E4E',
    neu1: '#000000',
    neu2: '#A4A4A4',
    neu3: '#FFFFFF',
    topBarProfile: '#2D81FF',
    stroke: '#EAEAEA',
    saoAV: '#F1C303',
    saoUNAV: '#DAD9D5',
    secCPN: 'rgba(0,0,0,0.1)',
    blue: '#4133FA',
    red: '#BC2648',
    pink: '#FFEEFE',
    skin: '#FFA660',
    green: '#90C099',
    iconDefault: '#2F2F2F',
    gray2: '#939999',
});

const componentStyle = StyleSheet.create({

    // font
    chatNam: {
        fontFamily: 'fsBold',
        fontSize: vw(4),
        lineHeight: vw(5),
    },

    nu24ExBold140: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: vw(6),
        lineHeight: vw(8.4),
    },

    nu10ExBold100: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: vw(2.5),
        lineHeight: vw(2.5),
    },

    nu16ExBold122: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: vw(4),
        lineHeight: vw(4.88),
    },

    nu12ExBold120: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: vw(3),
        lineHeight: vw(3.6),
    },

    nu20ExBold140: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: vw(5),
        lineHeight: vw(7),
    },

    nu10Reg140: {
        fontFamily: 'Nunito_400Regular',
        fontSize: vw(2.5),
        lineHeight: vw(3.5),
    },

    nu14Reg140: {
        fontFamily: 'Nunito_400Regular',
        fontSize: vw(3.5),
        lineHeight: vw(4.5),
    },

    nu12Reg120: {
        fontFamily: 'Nunito_400Regular',
        fontSize: vw(3),
        lineHeight: vw(3.6),
    },

    nu24Reg140: {
        fontFamily: 'Nunito_400Regular',
        fontSize: vw(6),
        lineHeight: vw(8.4),
    },

    nu20Reg140: {
        fontFamily: 'Nunito_400Regular',
        fontSize: vw(5),
        lineHeight: vw(7),
    },

    nu16Reg140: {
        fontFamily: 'Nunito_400Regular',
        fontSize: vw(4),
        lineHeight: vw(5),
    },

    nu6Med8: {
        fontFamily: 'Nunito_500Medium',
        fontSize: vw(1.5),
        lineHeight: vw(1.8),
    },

    nu6Light8: {
        fontFamily: 'Nunito_300Light',
        fontSize: vw(1.5),
        lineHeight: vw(1.8),
    },

    fs16ExBold140: {
        fontFamily: 'fsBold',
        fontSize: vw(4),
        lineHeight: vw(5),
    },

    // shadow
    shadowW0H1: {
        shadowColor: 'black',
        shadowOffset: { width: vw(0), height: vw(1) },
        shadowOpacity: 0.25,
    },

    shadowW1H1: {
        shadowColor: 'black',
        shadowOffset: { width: vw(1), height: vw(1) },
        shadowOpacity: 0.25,
    },

    shadowW0H1B1S0: {
        shadowColor: 'black',
        shadowOffset: { width: vw(0), height: vw(1) },
        shadowOpacity: 0.25,
        shadowRadius: vw(1),
    },

    shadowBtn: {
        borderBottomColor: colorStyle.main4,
        borderBottomWidth: vw(0.5),
        backgroundColor: colorStyle.main2,
    },

    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: vw(4),
        width: '90%',
        marginLeft: '5%'
    },

    loginInput: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw(2.5),
        borderRadius: vw(4),
        paddingHorizontal: vw(5),
        width: '100%',
    },

    loginInputText: {
        fontSize: vw(3.5),
        lineHeight: vw(4.5),
        paddingVertical: vw(4),
        paddingHorizontal: vw(2),
        width: '100%',
        height: '100%',
    },

    submitBtn: {
        borderWidth: 2,
        borderRadius: vw(4),
        width: '90%',
        marginLeft: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto'
    },

    submitBtnText: {
        fontSize: vw(4.5),
        lineHeight: vw(4.5),
        paddingVertical: vw(4.5),
    },

});

export default componentStyle;