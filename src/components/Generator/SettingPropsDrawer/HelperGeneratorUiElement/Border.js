import React, { useEffect, useRef, useState } from "react";
import Slider from 'react-input-slider';
import { borderGenerator, borderRadiusGenerator, hexToRgb } from "../../../../utils";
import RangeSlider from "../../../RangeSlider";
import SelectBox from "../../../SelectBox";
import HelperBox from "../HelperBox";
import PrimaryForm from "../PrimaryForm";
import ColorPicker from "./ColorPicker";

const radiusList = [
    {
        label : "TL",
        style : {
            top : 0 ,
            left : 0
        },
        rotateAngle : 140,
        perfectValueStyle : {
            top : -30 , 
            left: "-4%"
        }
    },
    {
        label : "TR",
        style : {
            top : 0 ,
            left : "100%"
        },
        rotateAngle : 225,
        perfectValueStyle : {
            top : -30 , 
            left: '102%'
        }
    },
    {
        label : "BL",
        style : {
            top : "102%" ,
            left : 0
        },
        rotateAngle : 45,
        perfectValueStyle : {
            top : "102%" , 
            left: "-4%"
        }
    },
    {
        label : "BR",
        style : {
            top : "100%" ,
            left : "100%"
        },
        rotateAngle : -45,
        perfectValueStyle : {
            top : "100%" , 
            left: "102%"
        }
    },
]

const borderTypeList = [
    {
        label : "solid",
    },
    {
        label : "dashed",
    },
    {
        label : "dotted",
    },
    {
        label : "double",
    },
]

const enableList = ["width" , "color" , "radius" , "style"];

const Border = ({ setSettingStore , settingStore }) => {
    const [radiusClone, setRadiusClone] = useState({});
    const [borderSettingClone, setBorderSettingClone] = useState({ color : "" , width : 0 , style : "solid" });
    const [enableStyle, setEnableStyle] = useState({ width : true , color : true , radius : true , style : true })
    const isInInitialRender = useRef(true);

    const changeRadiusHandler = (dir , value) => {
        setRadiusClone(prev => ({
            ...prev,
            [dir] : value.y
        }))
    }

    const changeBorderSettingHandler = (key , value) => {
        setBorderSettingClone(prev => ({
            ...prev , 
            [key] : value
        }))
    }

    useEffect(function liftDefaultValueToParent() {
        const color = (() => {
            const { r , g , b } = borderSettingClone.color ? hexToRgb(borderSettingClone.color.hex) : { r : 0 , g : 0 , b : 0 };
            return `rgba(${r} , ${g} , ${b} , 1)`
        })();
        setSettingStore('defaultValue' , {
            ...borderSettingClone,
            radius : borderRadiusGenerator(radiusClone),
            color,
        });
        setSettingStore("additionalConfig" , enableStyle);

    } , [borderSettingClone , radiusClone])


    const changeEnableStatusHandler = (key) => {
        setEnableStyle(prev => ({
            ...prev,
            [key] : !prev[key]
        }))
    }

    return (
        <div className="border">
            <PrimaryForm 
                hideItems={["defaultValue"]} 
                setStore={setSettingStore} 
                store={settingStore} />
            <div className="border__container">
                    <div style={{ width : "80%" }}>
                        <div
                            className="border__mainContent" 
                            style={{ 
                                borderRadius : borderRadiusGenerator(radiusClone),
                                border: borderGenerator(borderSettingClone)
                            }} 
                        >
                            <div className="border__enableContainer">
                                {
                                    enableList.map((el , i) => (
                                        <div onClick={() => changeEnableStatusHandler(el)} key={i} className={`border__enableItem ${!enableStyle[el] ? "border__enableItem--disable" : ""}`}>
                                            <p>{el}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            {
                                radiusList.map((radiusItem , index) => (
                                    <React.Fragment key={index}>
                                        <div
                                            className="border__radiusContainer" 
                                            style={{ ...radiusItem.style , transform : `rotate(${radiusItem.rotateAngle}deg) translate(-50% , -50%)` }}>
                                            <Slider
                                                styles={{
                                                    track : {
                                                        height : 80,
                                                },
                                                    thumb : {
                                                        width : 15, 
                                                        height : 15
                                                }}} 
                                                axis="y"
                                                y={radiusClone[radiusItem.label] || 0}
                                                onChange={value => changeRadiusHandler(radiusItem.label , value)}
                                            />
                                        </div>
                                        <div style={{ ...radiusItem.perfectValueStyle }} className="border__radiusPerfectValue">
                                            <p>{radiusClone[radiusItem.label] || 0}<span>px</span></p>
                                        </div>
                                    </React.Fragment>
                                ))
                            }
                        </div>

                        <ColorPicker
                            selected={borderSettingClone.color}
                            selectHandler={color => changeBorderSettingHandler('color' , color)}
                        />

                        <RangeSlider
                            min={0}
                            max={50}
                            label="ضخامت حاشیه"
                            value={{ values : [borderSettingClone.width] }}
                            onChange={passedValue => changeBorderSettingHandler('width' , passedValue.values[0])}
                        />

                        <SelectBox
                            onSelect={value => changeBorderSettingHandler('style' , value)}
                            label="نوع حاشیه"
                            options={borderTypeList.map(el => ({ label : el.label , value : el.label }))} /> 
                    </div>
                    <HelperBox 
                            title="تهیه حاشیه"
                            desc="به کمک ابزار مقابل میتوانید مقدار پیشفرض تنظیمات حاشیه را تهیه نمایید . همچنین میتوانید با غیر فعال کردن جعبه های داخلی ، مقادیر دریافتی توسط کاربر را حذف کنید ."
                        />
            </div>
        </div>
    )
}


export default Border;