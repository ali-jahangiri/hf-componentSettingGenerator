import HelperBox from "../HelperBox";
import PrimaryForm from "../PrimaryForm";
import Slider from 'react-input-slider';
import { useCallback, useEffect, useState } from "react";
import ColorPicker from "./ColorPicker";
import Input from "../../../Input";
import RangeSlider from "../../../RangeSlider";
import { debounce, makeValidDefaultValueForShadowBoxElement } from "../../../../utils";

const BoxShadow = ({ setSettingStore , settingStore , setIsValidInNested }) => {
    const [boxShadowPos, setBoxShadowPos] = useState({ x : 50 , y : 50 });
    const [boxShadowSpread, setBoxShadowSpread] = useState({ values : [0] });
    const [boxShadowBlur, setBoxShadowBlur] = useState({ values : [0] });
    const [boxShadowColor, setBoxShadowColor] = useState("");
    const [interpolatorValue, setInterpolatorValue] = useState("");
    const [haveValidInterpolatedValue, setHaveValidInterpolatedValue] = useState(false);
    const [userTouchInterpolatorForLastTime, setUserTouchInterpolatorForLastTime] = useState(false);

    const interpolateValueChangeHandler = (value = "") => {
        setUserTouchInterpolatorForLastTime(true)
        setInterpolatorValue(value)
        const splittedValue = value.split(" ");
        if(splittedValue.length === 5 && splittedValue.every(el => el !== "")) {
            const [x , y , blur , spread , color] = splittedValue;
            if(!isNaN(y) && !isNaN(x) && !isNaN(blur) && !isNaN(spread) && color.startsWith("#")) {
                setHaveValidInterpolatedValue(true);
                setBoxShadowPos({ x : +x , y: +y });
                setBoxShadowColor({ hex : color })
                setBoxShadowBlur({ values : [Number(blur)] });
                setBoxShadowSpread({ values : [Number(spread)] });
            }else {
                setHaveValidInterpolatedValue(false);
            }
        }else {
            setHaveValidInterpolatedValue(false)
        }
    }

    useEffect(function liftValidationStatusToParent() {
        if(haveValidInterpolatedValue) setIsValidInNested(true);
        else setIsValidInNested(false);
    } , [haveValidInterpolatedValue])

    const debounceLifterHandler = useCallback(debounce(passedValue => {
        setSettingStore('defaultValue' , makeValidDefaultValueForShadowBoxElement(passedValue))
    } , 500) , []);

    useEffect(function liftEndResultValueToParentSettingStore() {
        if(haveValidInterpolatedValue) debounceLifterHandler(interpolatorValue)
    } , [interpolatorValue , haveValidInterpolatedValue])

    useEffect(function automaticSetInterpolatorValueHandler() {
        if(!userTouchInterpolatorForLastTime) {
            setUserTouchInterpolatorForLastTime(false);
            setInterpolatorValue(`${boxShadowPos.x - 50} ${boxShadowPos.y - 50} ${boxShadowBlur.values[0]} ${boxShadowSpread.values[0]} ${boxShadowColor?.hex || "yourColor"}`)
        }
    } , [boxShadowPos , boxShadowColor , userTouchInterpolatorForLastTime , boxShadowBlur , boxShadowSpread])

    return (
        <div className="boxShadow">
            <div className="boxShadow__container">
                <PrimaryForm hideItems={["defaultValue"]} setStore={setSettingStore} store={settingStore} />
                <div className="boxShadow__content">
                    <div className="boxShadow__mainBox">
                    <div style={{ boxShadow :  `${boxShadowColor?.hex} ${boxShadowPos.x - 50}px ${boxShadowPos.y - 50}px ${boxShadowBlur.values[0]}px ${boxShadowSpread.values[0]}px` }}>
                        <Slider
                            styles={{ 
                                track : {
                                    width : "100%",
                                    borderRadius : 9,
                                    backgroundColor : "#262626"
                                }, 
                            thumb : {
                                width : 50 ,
                                height : 50
                            }}} 
                            axis="xy"
                            x={boxShadowPos.x} 
                            y={boxShadowPos.y} 
                            onChange={(pos) => {
                                setBoxShadowPos(pos);
                                setUserTouchInterpolatorForLastTime(false)
                            }}
                        />
                    </div>
                        <ColorPicker 
                            selected={boxShadowColor} 
                            selectHandler={color => {
                                setBoxShadowColor(color);
                                setHaveValidInterpolatedValue(true)
                                setUserTouchInterpolatorForLastTime(false);
                        }} />
                        <RangeSlider
                            value={boxShadowBlur}
                            onChange={value => {
                                setBoxShadowBlur(value);
                                setUserTouchInterpolatorForLastTime(false);
                            }}
                            label="شدت تاری"
                        />

                        <RangeSlider
                            value={boxShadowSpread}
                            onChange={value => {
                                setBoxShadowSpread(value);
                                setUserTouchInterpolatorForLastTime(false);
                            }}
                            label="شدت پخش شدگی رنگ"
                        />
                        <div 
                            className={`boxShadow__interpolatorInput ${interpolateValueChangeHandler ? (haveValidInterpolatedValue ? "boxShadow__interpolatorInput--valid" : "boxShadow__interpolatorInput--invalid") : ""}`}>
                            <Input
                                isInvalid={!haveValidInterpolatedValue}
                                isSuccess={haveValidInterpolatedValue}
                                inputStyle={{ backgroundColor : "transparent" , textAlign : "left" , padding : ".5rem" , direction : "ltr" }}
                                label="Interpolator as default value"
                                value={interpolatorValue} 
                                onChange={interpolateValueChangeHandler} />
                        </div>
                    </div>
                    <HelperBox
                        containerStyle={{ width : "50%" }}
                        title="تهیه سایه"
                        desc={<div >
                                <span>به کمک ابزار مقابل میتوانید مقدار پیشفرض تنظیمات سایه را تهیه نمایید.فرمول</span>
                                <code>X coordinate - Y coordinate - Blur - Spread - Hex Color</code>
                                <span>میباشد</span>
                        </div>} />
                </div>
            </div>
        </div>
    )
}


export default BoxShadow;