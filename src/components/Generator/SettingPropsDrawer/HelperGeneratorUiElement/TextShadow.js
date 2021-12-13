import { useEffect, useState } from "react";
import { hexToRgb, removePxFormString, rgbaStringConvertor, rgbToHex, textShadowGenerator } from "../../../../utils";
import RangeSlider from "../../../RangeSlider";
import PrimaryForm from "../PrimaryForm";
import ColorPicker from "./ColorPicker";
import HelperBox from "../HelperBox";


const TextShadow = ({ setSettingStore , settingStore }) => {
    const [textShadowStore, setTextShadowStore] = useState({ color : "rgba(0,0,0,1)" , x : 0 , y : 0 , blur : 0 });

    const changeStoreHandler = (key , value) => {
        const syncedStore = {
            ...textShadowStore, 
            [key] : value
        }
        setTextShadowStore(syncedStore)
        setSettingStore('defaultValue' , textShadowGenerator(syncedStore));

    }


    useEffect(function setRecoverStoreHandlerInEditMode() {
        if(settingStore?.defaultValue) {
            const [color , h , v , blur] = settingStore.defaultValue.split(" ");
            
            setTextShadowStore({
                x : removePxFormString(h),
                y : removePxFormString(v),
                blur : [removePxFormString(blur)],
                color : rgbToHex(color)
            })

        }
    } , [])

    useEffect(function liftDefaultValueForInitial() {
        if(!settingStore?.defaultValue) setSettingStore('defaultValue' , textShadowStore);
    } , []);


    return (
        <div className="textShadow">
            <PrimaryForm store={settingStore} hideItems={["defaultValue"]} setStore={setSettingStore} />
            <div className="textShadow__container">
                <div className="textShadow__mainContent">
                    <p 
                        style={{ textShadow : textShadowGenerator(textShadowStore) }}
                        className="textShadow__previewText">Beatae odit accusantium dolor beatae et.</p>
                    <ColorPicker
                        selected={textShadowStore.color}
                        selectHandler={value => changeStoreHandler('color' , value)}
                    />
                    <RangeSlider
                        min={-50}
                        max={50}
                        label="جهت حرکت در محور عمودی"
                        value={{ values : [textShadowStore.x] }}
                        onChange={value => changeStoreHandler("x" , value.values)}
                    />
                    <RangeSlider
                        min={-50}
                        max={50}
                        label="جهت حرکت در محور افقی"
                        value={{ values : [textShadowStore.y] }}
                        onChange={value => changeStoreHandler("y" , value.values)}
                    />
                    <RangeSlider
                        label="شدت پخش شدگی رنگ"
                        value={{ values : [textShadowStore.blur] }}
                        onChange={value => changeStoreHandler("blur" , value.values)}
                    />
                </div>
                <HelperBox
                    title="تهیه سایه متن"
                    desc="به کمک ابزار مقابل میتوانید مقدار پیشفرض تنظیمات سایه متن را تهیه نمایید"
                />
            </div>
        </div>
    )
}


export default TextShadow;