import { useState } from "react";
import PrimaryForm from "../PrimaryForm";
import ListGenerator from "./ListGenerator";


const DEFAULT_TEMP_NEW_FORM = { text : "" , value : "" };

const DropDown = ({ setSettingStore , settingStore }) => {
    const [tempCreateItem, setTempCreateItem] = useState(DEFAULT_TEMP_NEW_FORM);


    return (
        <div className="dropDownElement">
            <PrimaryForm store={settingStore} setStore={setSettingStore} />
            <ListGenerator
                setterKeyAs={{ storeKeyAs : "text" , storeValueAs : "value" }}
                createdOptions={settingStore?.options}
                defaultResetter={DEFAULT_TEMP_NEW_FORM}
                setTempCreateItem={setTempCreateItem}
                tempCreateItem={tempCreateItem}
                setParentStore={setSettingStore}

            />
        </div>
    )
}


export default DropDown;