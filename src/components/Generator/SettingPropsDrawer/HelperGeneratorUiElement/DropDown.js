import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import PrimaryForm from "../PrimaryForm";
import ListGenerator from "./ListGenerator";


const DEFAULT_TEMP_NEW_FORM = { text : "" , value : "" };

const DropDown = ({ setSettingStore , settingStore , setIsValidInNested }) => {
    const [tempCreateItem, setTempCreateItem] = useState(DEFAULT_TEMP_NEW_FORM);

    useEffect(function setRecoverStoreHandlerInEditMode () {
        if(settingStore?.defaultValue) {
            setIsValidInNested(true)
        }
    } , []);
    
    

    const optionsForMapping = (() => {
        if(settingStore?.additionalConfig?.options) {
            return settingStore?.additionalConfig?.options;
        }else return settingStore?._config?.options
    })();

    return (
        <div className="dropDownElement">
            <PrimaryForm store={settingStore} setStore={setSettingStore} />
            <ListGenerator
                setterKeyAs={{ storeKeyAs : "text" , storeValueAs : "value" }}
                createdOptions={optionsForMapping}
                defaultResetter={DEFAULT_TEMP_NEW_FORM}
                setTempCreateItem={setTempCreateItem}
                tempCreateItem={tempCreateItem}
                setParentStore={setSettingStore}

            />
        </div>
    )
}


export default DropDown;