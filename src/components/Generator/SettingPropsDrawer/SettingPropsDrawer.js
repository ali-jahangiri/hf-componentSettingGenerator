import { useEffect, useState } from "react";
import { selfClearTimeout } from "../../../utils";
import { developerDefaultSettingElement } from "./developerDefaultSettingElement";
import SettingElementBox from "./SettingElementBox";

const BackIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M10.88,17.715a1,1,0,0,0,0-1.415L7.588,13.007,18,13a1,1,0,0,0,0-2l-10.414.007L10.88,7.715A1,1,0,0,0,9.466,6.3L5.88,9.886a3,3,0,0,0,0,4.243l3.586,3.586A1,1,0,0,0,10.88,17.715Z"/></svg>

const SettingPropsDrawer = ({
    closeHandler,
    visible
}) => {
    const [shouldDrawerGetDestroyed, setShouldDrawerGetDestroyed] = useState(true);
    const [isInTransition, setIsInTransition] = useState(false);

    useEffect(() => {
        if(visible) {
            selfClearTimeout(() => {
                setShouldDrawerGetDestroyed(false)
            } , 500);
            
            selfClearTimeout(() => {
                setIsInTransition(true)
            } , 600)
        }
    } , [visible]);

    const innerCloseHandler = () => {
        setIsInTransition(false);
        selfClearTimeout(() => {
            setShouldDrawerGetDestroyed(true);
            closeHandler();
        } , 1000);
    }

    return !shouldDrawerGetDestroyed ? <>
        <div className={`settingPropsDrawer ${isInTransition ? "settingPropsDrawer--transition" : ""}`}>
            <div className="settingPropsDrawer__header">
                <div className="settingPropsDrawer__header__controller">
                    <button onClick={innerCloseHandler}>
                        <BackIcon />
                        <span>بستن</span>
                    </button>
                </div>
                <p>ایجاد تنظیمات جدید</p>
            </div>
            <div className="settingPropsDrawer__itemDirectory">
                {
                    developerDefaultSettingElement
                        .map((settingElement , index) => <SettingElementBox key={index} {...settingElement} />)
                }
            </div>
        </div>
        <div className={`settingPropsDrawer__overlay ${isInTransition ? "settingPropsDrawer__overlay--show" : ""}`} />
    </> : null
}

export default SettingPropsDrawer;