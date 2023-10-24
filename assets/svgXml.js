import React from "react";
import Svg, { SvgUri, SvgXml } from 'react-native-svg';
import { colorStyle } from "./componentStyleSheet";

export const searchIcon = (color, w, h) => {
    const xml = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00033 1.99984C5.67424 1.99984 4.40247 2.52662 3.46479 3.4643C2.52711 4.40199 2.00033 5.67375 2.00033 6.99984C2.00033 8.32592 2.52711 9.59769 3.46479 10.5354C4.40247 11.4731 5.67424 11.9998 7.00033 11.9998C8.32037 11.9998 9.5866 11.4778 10.523 10.5482C10.5281 10.5427 10.5334 10.5373 10.5387 10.532C10.5435 10.5272 10.5484 10.5225 10.5533 10.5178C11.4801 9.58187 12.0003 8.31767 12.0003 6.99984C12.0003 5.67375 11.4735 4.40199 10.5359 3.4643C9.59818 2.52662 8.32641 1.99984 7.00033 1.99984ZM11.9272 10.9794C12.8331 9.85802 13.3337 8.45473 13.3337 6.99984C13.3337 5.32013 12.6664 3.70922 11.4787 2.52149C10.2909 1.33376 8.68003 0.666504 7.00033 0.666504C5.32062 0.666504 3.70971 1.33376 2.52198 2.52149C1.33425 3.70922 0.666992 5.32013 0.666992 6.99984C0.666992 8.67954 1.33425 10.2905 2.52198 11.4782C3.70971 12.6659 5.32062 13.3332 7.00033 13.3332C8.45739 13.3332 9.86269 12.8311 10.9849 11.9227L13.5285 14.4708C13.7886 14.7314 14.2107 14.7318 14.4713 14.4717C14.7319 14.2115 14.7323 13.7894 14.4722 13.5289L11.9272 10.9794Z" fill=${color}/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const bellNav = (strokeColor, w, h) => {
    xml = `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.75 30.625V32.375C15.75 35.2745 18.1005 36.75 21 36.75C23.8995 36.75 26.25 35.2745 26.25 32.375V30.625M10.5 14.875C10.5 9.07601 15.201 6.125 21 6.125C26.799 6.125 31.5 9.07601 31.5 14.875C31.5 18.2685 32.7338 22.0733 34.0052 25.0931C35.0609 27.6005 33.2888 30.625 30.5683 30.625H11.4316C8.71111 30.625 6.93907 27.6005 7.99473 25.0931C9.26612 22.0733 10.5 18.2685 10.5 14.875Z" stroke=${strokeColor} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const filterIcon = (strokeColor, w, h) => {
    xml = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.66667 8.33333L16.6667 8.33333M16.6667 8.33333C16.6667 10.1743 18.1591 11.6667 20 11.6667C21.841 11.6667 23.3333 10.1743 23.3333 8.33333M16.6667 8.33333C16.6667 6.49239 18.1591 5 20 5C21.841 5 23.3333 6.49238 23.3333 8.33333M23.3333 8.33333L33.3333 8.33333M6.66667 20L26.6667 20M26.6667 20C26.6667 21.841 28.1591 23.3333 30 23.3333C31.841 23.3333 33.3333 21.8409 33.3333 20C33.3333 18.1591 31.841 16.6667 30 16.6667C28.1591 16.6667 26.6667 18.1591 26.6667 20ZM13.3333 31.6667L33.3333 31.6667M13.3333 31.6667C13.3333 29.8257 11.841 28.3333 10 28.3333C8.15906 28.3333 6.66667 29.8257 6.66667 31.6667C6.66667 33.5076 8.15906 35 10 35C11.841 35 13.3333 33.5076 13.3333 31.6667Z" stroke=${strokeColor} stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const Xbutton = (strokeColor, w, h) => {
    xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3333 6.66675L6.66667 13.3334M6.66667 6.66675L13.3333 13.3334" stroke=${strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const headphoneIcon = (color, w, h) => {
    xml = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2478_860)">
    <g opacity="0.15">
    <path d="M1 4.66669H2C2.36819 4.66669 2.66667 4.96516 2.66667 5.33335V6.33335C2.66667 6.70154 2.36819 7.00002 2 7.00002H1V4.66669Z" fill=${color}/>
    <path d="M7 7.00002H6C5.63181 7.00002 5.33333 6.70154 5.33333 6.33335V5.33335C5.33333 4.96516 5.63181 4.66669 6 4.66669H7V7.00002Z" fill=${color}/>
    </g>
    <path d="M1 4.66667H2C2.36819 4.66667 2.66667 4.96514 2.66667 5.33333V6.33333C2.66667 6.70152 2.36819 7 2 7H1V4.66667ZM1 4.66667V4C1 2.34315 2.34315 1 4 1C5.65685 1 7 2.34315 7 4V4.66667M7 4.66667H6C5.63181 4.66667 5.33333 4.96514 5.33333 5.33333V6.33333C5.33333 6.70152 5.63181 7 6 7H7V4.66667Z" stroke=${color} stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_2478_860">
    <rect width="8" height="8" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const bookmark = (isBookmarked, w, h, strokeColor = colorStyle.iconDefault, fillColor = colorStyle.iconDefault) => {
    const xml1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8C6 5.18536 8 4 12 4C16 4 18 5.18537 18 8V19.0858C18 19.9767 16.9229 20.4229 16.2929 19.7929L12.7071 16.2071C12.3166 15.8166 11.6834 15.8166 11.2929 16.2071L7.70711 19.7929C7.07714 20.4229 6 19.9767 6 19.0858V8Z" stroke=${strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    `
    const xml2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8C6 5.18536 8 4 12 4C16 4 18 5.18537 18 8V19.0858C18 19.9767 16.9229 20.4229 16.2929 19.7929L12.7071 16.2071C12.3166 15.8166 11.6834 15.8166 11.2929 16.2071L7.70711 19.7929C7.07714 20.4229 6 19.9767 6 19.0858V8Z" fill=${fillColor} stroke=${strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    return (
        <SvgXml xml={isBookmarked ? xml2 : xml1} width={w} height={h} />
    );
}

export const leftArrow = (w = '100%', h = '100%', strokeColor = colorStyle.iconDefault,) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 20L7 12L15 4" stroke=${strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

// BOTTOM TAB ICON 
