import { useEffect, useState } from 'react';
import PrimaryForm from '../PrimaryForm';
import ListGenerator from './ListGenerator';

const DEFAULT_TEMP_NEW_FORM = { title : "" , link : "" }

const DynamicList = ({ setSettingStore , settingStore , setIsValidInNested }) => {
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
        <div className="dynamicList">
            <PrimaryForm
                setStore={setSettingStore}
                store={settingStore} />
            <ListGenerator 
                setterKeyAs={{ storeKeyAs : "title" , storeValueAs : "link" }}
                createdOptions={optionsForMapping}
                defaultResetter={DEFAULT_TEMP_NEW_FORM}
                setTempCreateItem={setTempCreateItem}
                tempCreateItem={tempCreateItem}
                setParentStore={setSettingStore}
            />
        </div>
    )
}


export default DynamicList;