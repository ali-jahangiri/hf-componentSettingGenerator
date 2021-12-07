import HelperBox from "../HelperBox";
import PrimaryForm from "../PrimaryForm";
import Slider from 'react-input-slider';
import { useEffect, useState } from "react";
import ColorPicker from "./ColorPicker";

const BoxShadow = ({ setSettingStore , settingStore }) => {
    const [boxShadowPos, setBoxShadowPos] = useState({ x : 50 , y : 50 });
    const [interpolatorValue, setInterpolatorValue] = useState("");
    const [boxShadowColor, setBoxShadowColor] = useState("");
    // const [boxShadowShade, setBoxShadowShade] = useState("");
    const [haveValidInterpolatedValue, setHaveValidInterpolatedValue] = useState(false);
    const [userTouchInterpolatorForLastTime, setUserTouchInterpolatorForLastTime] = useState(false);

    const interpolateValueChangeHandler = (value = "") => {
        setUserTouchInterpolatorForLastTime(true)
        const splittedValue = value.split(" ");
        setInterpolatorValue(value)
        if(splittedValue.length === 3 && splittedValue.every(el => !!el === true)) {
            const [color , y , x] = splittedValue;
            if(!isNaN(y) && !isNaN(x)) {
                setHaveValidInterpolatedValue(true);
                setBoxShadowPos({ x : +x , y: +y });
                // const haveHashChar = (() => {
                //     if()
                // })()
                setBoxShadowColor({ hex : color })
            }else {
                setHaveValidInterpolatedValue(false);
            }
        }else {
            setHaveValidInterpolatedValue(false)
        }
    }

    useEffect(() => {
        if(!userTouchInterpolatorForLastTime) {
            setUserTouchInterpolatorForLastTime(false);
            setInterpolatorValue(`${boxShadowColor?.hex || "yourColor"} ${boxShadowPos.x - 50} ${boxShadowPos.y - 50}`)
        }
    } , [boxShadowPos , boxShadowColor , userTouchInterpolatorForLastTime])

    return (
        <div className="boxShadow">
            <div className="boxShadow__container">
                <PrimaryForm setStore={setSettingStore} store={settingStore} />
                <div className="boxShadow__content">
                    <div className="boxShadow__mainBox">
                    <div style={{ boxShadow :  `${boxShadowColor?.hex} ${boxShadowPos.x - 50}px ${boxShadowPos.y - 50}px 20px` }}>
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
                                setUserTouchInterpolatorForLastTime(false);
                        }} />
                        <div className={`boxShadow__interpolatorInput ${interpolateValueChangeHandler ? (haveValidInterpolatedValue ? "boxShadow__interpolatorInput--valid" : "boxShadow__interpolatorInput--invalid") : ""}`}>
                            <input 
                                value={interpolatorValue} 
                                onChange={({ target : { value } }) => {
                                    interpolateValueChangeHandler(value);
                                }} />
                        </div>
                    </div>
                    <HelperBox
                        containerStyle={{ width : "50%" }}
                        title="تهیه سایه"
                        desc={<div >
                                <span>به کمک ابزار مقابل میتوانید مقدار پیشفرض تنظیمات سایه را تهیه نمایید.فرمول</span>
                                <code>Color - X coordinate - Y coordinate</code>
                                <span>میباشد</span>
                        </div>} />
                </div>
            </div>
        </div>
    )
}


export default BoxShadow;