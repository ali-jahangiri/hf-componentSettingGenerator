import { useEffect, useState } from "react";
import { idGenerator, selfClearTimeout } from "../../../utils";
import { developerDefaultSettingElement } from "./developerDefaultSettingElement";
import SettingElementBox from "./SettingElementBox";

const BackIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M10.88,17.715a1,1,0,0,0,0-1.415L7.588,13.007,18,13a1,1,0,0,0,0-2l-10.414.007L10.88,7.715A1,1,0,0,0,9.466,6.3L5.88,9.886a3,3,0,0,0,0,4.243l3.586,3.586A1,1,0,0,0,10.88,17.715Z"/></svg>
const SaveIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>60 box</title><path d="M9,14h6a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Z"/><path d="M19,0H5A5.006,5.006,0,0,0,0,5V6A3,3,0,0,0,1,8.234V19a5.006,5.006,0,0,0,5,5H18a5.006,5.006,0,0,0,5-5V8.234A3,3,0,0,0,24,6V5A5.006,5.006,0,0,0,19,0ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V6a1,1,0,0,1-1,1H3A1,1,0,0,1,2,6ZM21,19a3,3,0,0,1-3,3H6a3,3,0,0,1-3-3V9H21Z"/></svg>
const UpdateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>187 refresh</title><path d="M23,12a.982.982,0,0,0-.988.878A9.986,9.986,0,0,1,4.924,19H7.669a1,1,0,1,0,0-2h-4a2,2,0,0,0-2,2v4a1,1,0,0,0,2,0V20.562A11.977,11.977,0,0,0,24,13.1,1.007,1.007,0,0,0,23,12Z"/><path d="M21.331,0a1,1,0,0,0-1,1V3.438A11.977,11.977,0,0,0,0,10.9,1.007,1.007,0,0,0,1,12a.982.982,0,0,0,.988-.878A9.986,9.986,0,0,1,19.076,5H16.331a1,1,0,0,0,0,2h4a2,2,0,0,0,2-2V1A1,1,0,0,0,21.331,0Z"/></svg>;

const validationSettingStoreHandler = (store = { name : "" , title : "" , defaultValue: "" }) => {
    if(store.name && store.title && store.defaultValue) return true
    else return false
}


const validationSettingInEditHandler = (cloned , newStore , isValidInNested) => {
    console.log(cloned , newStore);
    if(cloned.name !== newStore.name || cloned.defaultValue !== newStore.defaultValue || cloned.title !== newStore.title) return true;
    else return false
}

const SettingPropsDrawer = ({
    closeHandler,
    visible,
    createNewOption,
    selectedSettingType,
    setSelectedSettingType,
    settingStore,
    setSettingStore,
    isInEditMode,
    updateSettingHandler
}) => {
    const [shouldDrawerGetDestroyed, setShouldDrawerGetDestroyed] = useState(true);
    const [isInTransition, setIsInTransition] = useState(false);
    const [shouldRenderOptions, setShouldRenderOptions] = useState(false);
    const [isValidInNested, setIsValidInNested] = useState(true);
    const [recoverCloneForEditMode, setRecoverCloneForEditMode] = useState(null);


    useEffect(function storeRecoverCloneHandler() {
        if(isInEditMode) setRecoverCloneForEditMode(settingStore)
    } , [isInEditMode]);

    useEffect(function initialAnimationHandler() {
        if(visible) {
            selfClearTimeout(() => setShouldDrawerGetDestroyed(false) , 500);
            selfClearTimeout(() => setIsInTransition(true) , 600)
            selfClearTimeout(() => setShouldRenderOptions(true) , 1500)
        }
    } , [visible]);

    const innerCloseHandler = () => {
        setIsInTransition(false);
        selfClearTimeout(() => {
            setShouldDrawerGetDestroyed(true);
            closeHandler();
        } , 1000);
    }


    const selectSettingHandler = settingId => {
        setSelectedSettingType(settingId)
    }

    const changeSettingStoreHandler = (key , value) => {
        setSettingStore(prev => ({
            ...prev,
            [key] : value
        }))
    }

    const attachSettingToStoreHandler = () => {
        const { name , defaultValue , title } = settingStore;
        createNewOption({
            name,
            id: idGenerator(),
            config : {
                type : selectedSettingType,
                defaultValue,
                title,
                ...(settingStore?.additionalConfig)
            }
        })
        closeHandler();
    }

    const innerUpdateHandler = () => {
        console.log(settingStore , "redocu");
        updateSettingHandler(settingStore);
        setIsValidInNested(false)
        innerCloseHandler();
    }

    return !shouldDrawerGetDestroyed ? <>
        <div className={`settingPropsDrawer ${isInTransition ? "settingPropsDrawer--transition" : ""}`}>
            <div className="settingPropsDrawer__header">
                <div className="settingPropsDrawer__header__controller">
                    <button onClick={innerCloseHandler}>
                        <BackIcon />
                        <span>بستن</span>
                    </button>
                    {
                        isInEditMode ? (validationSettingInEditHandler(recoverCloneForEditMode , settingStore , isValidInNested) ? <button onClick={innerUpdateHandler} className="settingPropsDrawer__header__controller__save">
                            <UpdateIcon />
                            <span>بروزرسانی</span>
                        </button> : null) : validationSettingStoreHandler(settingStore) && isValidInNested && <button onClick={attachSettingToStoreHandler} className="settingPropsDrawer__header__controller__save">
                            <SaveIcon />
                            <span>ایجاد</span>
                        </button>
                    }
                </div>
                {
                    isInEditMode ? <p>مشاهده و بروزرسانی تنظیمات</p> : <p>ایجاد تنظیمات جدید</p>
                }
            </div>
            <div className="settingPropsDrawer__itemDirectory">
                {
                    shouldRenderOptions && 
                    developerDefaultSettingElement
                        .map((settingElement , index) => <SettingElementBox
                                                                setIsValidInNested={setIsValidInNested}
                                                                settingStore={settingStore}
                                                                setSettingStore={changeSettingStoreHandler}
                                                                selectHandler={selectSettingHandler}
                                                                key={index}
                                                                index={index}
                                                                selectedSetting={selectedSettingType}
                                                                {...settingElement} />)
                }
            </div>
        </div>
        <div className={`settingPropsDrawer__overlay ${isInTransition ? "settingPropsDrawer__overlay--show" : ""}`} />
    </> : null
}

export default SettingPropsDrawer;