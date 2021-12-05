export const developerDefaultSettingElement = [
    {
        name: 'text', 
        value: 'نمونه لینک',
        config: {
            defaultValue: 'نمونه لینک',
            type: 'input',
            title: 'ورودی متن',
        },
    },
    {
        name: 'box-shadow',
        value: '0 0 0 0 rgba(0,0,0,0)',
        config: {
            defaultValue: '0 0 0 0 rgba(0,0,0,0)',
            type: 'box-shadow',
            title: 'سایه'
        },
    },
    {
        name: 'src',
        value: null,
        config: {
            defaultValue: null,
            type: 'upload',
            title: 'آپلودر',
        },
    },
    {
        name: 'spacing',
        value: {
            padding: `0px 0px 0px 0px`,
            margin: `0px 0px 0px 0px`
        },
        config: {
            type: 'spacing',
            title: 'فاصله',
            defaultValue: {
                padding: `0px 0px 0px 0px`,
                margin: `0px 0px 0px 0px`
            },
            margin: ['horizontal','vertical'],
            padding: ['horizontal','vertical']
        },
    },
    {
        name: 'dropdown',
        value: 'slide',
        config: {
            options:[
                {
                    text: 'اسلاید',
                    value: 'slide'
                },
                {
                    text: 'محو شدن',
                    value: 'fade'
                },
                {
                    text: 'مکعب',
                    value: 'cube'
                },
                {
                    text: 'کاور',
                    value: 'coverflow'
                },
                {
                    text: 'چرخش',
                    value: 'flip'
                }
            ],
            type: 'dropdown',
            title: 'لیست بازشونده',
            defaultValue: 'slide',
        },
    },
    {
        name: 'colorpicker',
        value: '',
        config: {
            type: 'colorpicker',
            title: 'انتخاب کننده رنگ',
            defaultValue: '',
        },
    },
    {
        name: 'dynamic-list',
        value: '',
        config: {
            type: 'dynamic-list',
            defaultValue: '',
            title: 'لیست پویا',
        },
    },
    {
        name: 'product-collection',
        value: '',
        config: {
            type: 'product-collection',
            defaultValue: '',
            title: 'دسته بندی محصولات',
        },
    },
    {
        name: 'carousel-items',
        value: [],
        config: {
            defaultValue: [],
            type: 'carousel-upload',
            title: 'مجموعه تصویر',
        },
    },
    {
        name: 'background-image',
        value: `url() 100% 100% / 100% 100% no-repeat scroll`,
        config: {
            defaultValue: `url() 100% 100% / 100% 100% no-repeat scroll`,
            type: 'background-image',
            title: 'تصویر پس زمینه',
        },
    },
    {
        name: 'text-shadow',
        value: '0 6px 12px rgba(0,0,0,0)',
        config: {
            defaultValue: '0 3px 6px rgba(0,0,0,0)',
            type: 'text-shadow',
            title: 'سایه متن'
        },
    },
    {
        name: 'border',
        default: true, // Boolean
        value: {width: 0, radius: '8px 8px 8px 8px', style: 'solid', color: 'rgba(0,0,0,0)'},
        config: {
            defaultValue: {width: 0, radius: '8px 8px 8px 8px', style: 'solid', color: 'rgba(0,0,0,0)'},
            type: 'border',
            title: 'حاشیه',
            width: true,
            radius: true,
            style: true,
            color: true
        },
    }
]

const TextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M18,22H16a3,3,0,0,1-3-3V16h3a1,1,0,0,0,0-2H13V5a3,3,0,0,1,3-3h2a1,1,0,0,0,0-2H16a4.982,4.982,0,0,0-4,2.031A4.982,4.982,0,0,0,8,0H6A1,1,0,0,0,6,2H8a3,3,0,0,1,3,3v9H8a1,1,0,0,0,0,2h3v3a3,3,0,0,1-3,3H6a1,1,0,0,0,0,2H8a4.982,4.982,0,0,0,4-2.031A4.982,4.982,0,0,0,16,24h2a1,1,0,0,0,0-2Z"/></svg>
const PicIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM5,2H19a3,3,0,0,1,3,3V19a2.951,2.951,0,0,1-.3,1.285l-9.163-9.163a5,5,0,0,0-7.072,0L2,14.586V5A3,3,0,0,1,5,2ZM5,22a3,3,0,0,1-3-3V17.414l4.878-4.878a3,3,0,0,1,4.244,0L20.285,21.7A2.951,2.951,0,0,1,19,22Z"/><path d="M16,10.5A3.5,3.5,0,1,0,12.5,7,3.5,3.5,0,0,0,16,10.5Zm0-5A1.5,1.5,0,1,1,14.5,7,1.5,1.5,0,0,1,16,5.5Z"/></svg>;
const GalleryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M19,0H13A5.006,5.006,0,0,0,8,5v.1A5.009,5.009,0,0,0,4,10v.1A5.009,5.009,0,0,0,0,15v4a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5v-.1A5.009,5.009,0,0,0,20,14v-.1A5.009,5.009,0,0,0,24,9V5A5.006,5.006,0,0,0,19,0ZM2,15a3,3,0,0,1,3-3h6a2.988,2.988,0,0,1,2.638,1.6l-3.455,3.463-.475-.479A1.992,1.992,0,0,0,7,16.473l-4.621,3.96A2.96,2.96,0,0,1,2,19Zm12,4a3,3,0,0,1-3,3H5a2.971,2.971,0,0,1-1.118-.221L8.288,18l.476.481a2,2,0,0,0,2.828,0L14,16.068Zm4-5a3,3,0,0,1-2,2.816V15a5.006,5.006,0,0,0-5-5H6A3,3,0,0,1,9,7h6a3,3,0,0,1,3,3Zm4-5a3,3,0,0,1-2,2.816V10a5.006,5.006,0,0,0-5-5H10a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3ZM4,15a1,1,0,1,1,1,1A1,1,0,0,1,4,15Z"/></svg>
const DropDown = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M7,6H23a1,1,0,0,0,0-2H7A1,1,0,0,0,7,6Z"/><path d="M23,11H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/><path d="M23,18H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/><circle cx="2" cy="5" r="2"/><circle cx="2" cy="12" r="2"/><circle cx="2" cy="19" r="2"/></svg>
const PickerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M23.112,5.165a3.025,3.025,0,0,0,0-4.279,3.094,3.094,0,0,0-4.276,0L16.4,3.324c-1.012,1.013-3.123.789-4.579-.013A2.6,2.6,0,0,0,8.764,7.455L10.18,8.871,2.025,17.025a3.455,3.455,0,0,0-.593,4.129L.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0l1.139-1.139a3.455,3.455,0,0,0,4.129-.593l8.154-8.155,1.416,1.416a2.6,2.6,0,0,0,4.144-3.057c-.8-1.456-1.025-3.568-.013-4.58ZM5.56,20.561a1.536,1.536,0,0,1-2.121,0,1.5,1.5,0,0,1,0-2.121l8.155-8.154,2.121,2.121Zm13.7-14.376c-1.759,1.759-1.5,4.832-.325,6.958a.578.578,0,0,1-.119.679.621.621,0,0,1-.859,0L10.178,6.041A.612.612,0,0,1,10.606,5a.522.522,0,0,1,.251.063c2.126,1.17,5.2,1.434,6.958-.325L20.254,2.3a1.045,1.045,0,0,1,1.446,0,1.024,1.024,0,0,1,0,1.449Z"/></svg>;
const SpaceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M19,24H17a1,1,0,0,1,0-2h2a3,3,0,0,0,3-3V17a1,1,0,0,1,2,0v2A5.006,5.006,0,0,1,19,24Z"/><path d="M1,8A1,1,0,0,1,0,7V5A5.006,5.006,0,0,1,5,0H7A1,1,0,0,1,7,2H5A3,3,0,0,0,2,5V7A1,1,0,0,1,1,8Z"/><path d="M7,24H5a5.006,5.006,0,0,1-5-5V17a1,1,0,0,1,2,0v2a3,3,0,0,0,3,3H7a1,1,0,0,1,0,2Z"/><path d="M23,8a1,1,0,0,1-1-1V5a3,3,0,0,0-3-3H17a1,1,0,0,1,0-2h2a5.006,5.006,0,0,1,5,5V7A1,1,0,0,1,23,8Z"/></svg>
const ProductIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>101 grid</title><path d="M4.5,17.5H2a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2H4.5a2,2,0,0,0,2-2V19.5A2,2,0,0,0,4.5,17.5Zm0,4.5H2V19.5H4.5Z"/><path d="M22,17.5H19.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V19.5A2,2,0,0,0,22,17.5ZM22,22H19.5V19.5H22Z"/><path d="M4.5,8.75H2a2,2,0,0,0-2,2v2.5a2,2,0,0,0,2,2H4.5a2,2,0,0,0,2-2v-2.5A2,2,0,0,0,4.5,8.75Zm0,4.5H2v-2.5H4.5Z"/><path d="M22,8.75H19.5a2,2,0,0,0-2,2v2.5a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2v-2.5A2,2,0,0,0,22,8.75Zm0,4.5H19.5v-2.5H22Z"/><path d="M4.5,0H2A2,2,0,0,0,0,2V4.5a2,2,0,0,0,2,2H4.5a2,2,0,0,0,2-2V2A2,2,0,0,0,4.5,0Zm0,4.5H2V2H4.5Z"/><path d="M13.25,17.5h-2.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h2.5a2,2,0,0,0,2-2V19.5A2,2,0,0,0,13.25,17.5Zm0,4.5h-2.5V19.5h2.5Z"/><path d="M13.25,8.75h-2.5a2,2,0,0,0-2,2v2.5a2,2,0,0,0,2,2h2.5a2,2,0,0,0,2-2v-2.5A2,2,0,0,0,13.25,8.75Zm0,4.5h-2.5v-2.5h2.5Z"/><path d="M13.25,0h-2.5a2,2,0,0,0-2,2V4.5a2,2,0,0,0,2,2h2.5a2,2,0,0,0,2-2V2A2,2,0,0,0,13.25,0Zm0,4.5h-2.5V2h2.5Z"/><path d="M22,0H19.5a2,2,0,0,0-2,2V4.5a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V2A2,2,0,0,0,22,0Zm0,4.5H19.5V2H22Z"/></svg>
const BorderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M24,18v1a5.006,5.006,0,0,1-5,5H18a1,1,0,0,1,0-2h1a3,3,0,0,0,3-3V18a1,1,0,0,1,2,0ZM19,0H18a1,1,0,0,0,0,2h1a3,3,0,0,1,3,3V6a1,1,0,0,0,2,0V5A5.006,5.006,0,0,0,19,0Zm4,9a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V10A1,1,0,0,0,23,9ZM6,22H5a3,3,0,0,1-3-3V18a1,1,0,0,0-2,0v1a5.006,5.006,0,0,0,5,5H6a1,1,0,0,0,0-2ZM6,0H5A5.006,5.006,0,0,0,0,5V6A1,1,0,0,0,2,6V5A3,3,0,0,1,5,2H6A1,1,0,0,0,6,0ZM1,15a1,1,0,0,0,1-1V10a1,1,0,0,0-2,0v4A1,1,0,0,0,1,15ZM10,2h3.932a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Zm4,20H10a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z"/></svg>
const ShadowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15,20H5a5.006,5.006,0,0,1-5-5V5A5.006,5.006,0,0,1,5,0H15a5.006,5.006,0,0,1,5,5V15A5.006,5.006,0,0,1,15,20ZM5,2A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H15a3,3,0,0,0,3-3V5a3,3,0,0,0-3-3ZM24,19V6a1,1,0,0,0-2,0V19a3,3,0,0,1-3,3H6a1,1,0,0,0,0,2H19A5.006,5.006,0,0,0,24,19Z"/></svg>
const ListIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>76 sort collection</title><path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"/><path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"/><path d="M22.293,19.049,20,21.339V2.633l2.293,2.29a1,1,0,1,0,1.414-1.415L21.12.925a3,3,0,0,0-4.24,0L14.293,3.508a1,1,0,1,0,1.414,1.415L18,2.633V21.339l-2.293-2.29a1,1,0,1,0-1.414,1.415l2.587,2.583a3,3,0,0,0,4.24,0l2.587-2.583a1,1,0,1,0-1.414-1.415Z"/></svg>

export const elementAdditionalProp = {
    "box-shadow" : {
        color : "",
        icon : <ShadowIcon />   
    },
    "dynamic-list" : {
        color : "",
        icon : <ListIcon />
    },
    dropdown : {
        color : "",
        icon : <DropDown />
    },
    text : {
        color : "#292C6D",
        icon : <TextIcon />
    },
    src : {
        color : "#D0CAB2",
        icon : <PicIcon />
    },
    "carousel-items" : {
        color : "#8A8635",
        icon : <GalleryIcon />
    },
    colorpicker : {
        color : "",
        icon : <PickerIcon />
    },
    border : {
        color : "",
        icon : <BorderIcon />
    },
    "product-collection" : {
        color : "",
        icon : <ProductIcon />
    },
    spacing : {
        color : "" ,
        icon : <SpaceIcon />
    }
}