import { useState } from 'react';
import PrimaryForm from '../PrimaryForm';
import ListGenerator from './ListGenerator';

const DEFAULT_TEMP_NEW_FORM = { title : "" , link : "" }

const DynamicList = ({ setSettingStore , settingStore }) => {
    const [tempCreateItem, setTempCreateItem] = useState(DEFAULT_TEMP_NEW_FORM);
    
    return (
        <div className="dynamicList">
            <PrimaryForm
                setStore={setSettingStore}
                store={settingStore} />
            <ListGenerator 
                setterKeyAs={{ storeKeyAs : "title" , storeValueAs : "link" }}
                createdOptions={settingStore?.options}
                defaultResetter={DEFAULT_TEMP_NEW_FORM}
                setTempCreateItem={setTempCreateItem}
                tempCreateItem={tempCreateItem}
                setParentStore={setSettingStore}
            />
        </div>
    )
}


export default DynamicList;