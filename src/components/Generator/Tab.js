import React, { useState } from "react";
import SettingPropsDrawer from "./SettingPropsDrawer";
import { elementAdditionalProp } from "./SettingPropsDrawer/developerDefaultSettingElement";

const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/></svg>

const Tab = ({
    createNewOption,
    index,
    name,
    id,
    changeDetailsHandler,
    onDrawerStatusChange,
    options = [{ name : "" , config : {} , defaultValue : "" }],
    removeOption
}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedSettingType, setSelectedSettingType] = useState(null);
    const [settingStore, setSettingStore] = useState({});

    
    const openSettingPropsHandler = () => {
        setIsDrawerOpen(true)
        onDrawerStatusChange(true);
    }

    const closeSettingPropsHandler = () => {
        setIsDrawerOpen(false);
        onDrawerStatusChange(false);
        setSelectedSettingType(null);
        setSettingStore({});
    }

    const openCreatedSettingHandler = option => {
        setIsDrawerOpen(true);
        onDrawerStatusChange(true)
        setSelectedSettingType(option.config.type);
        // setSettingStore({  })
    }


    const removeSettingHandler = (option , ev) => {
        ev.stopPropagation();
        removeOption(option.id);
    }

    return (
        <React.Fragment>
            <div className="tab">
                <div className="tab__headerPanel">
                    <input 
                        value={name} 
                        placeholder="نام تب" 
                        onChange={({ target : { value } }) => changeDetailsHandler(id , "name" , value)} />
                    <div>
                        <p>{index}</p>
                    </div>
                </div>
                <div className="tab__optionDirectory">
                    {
                        options.map((option , index) => (
                            <div onClick={() => openCreatedSettingHandler(option)} key={index} className="tab__createdOption">
                                <div className="tab__createdOption__controller">
                                    <div onClick={e => removeSettingHandler(option , e)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>50 bin</title><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/><path d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z"/></svg>
                                    </div>
                                </div>
                                <div className="tab__createdOption__details">
                                    <p>{option.name}</p>
                                    <span>{option.config.title}</span>
                                </div>
                                <div className="tab__createdOption__iconBox" style={{ backgroundColor : `${elementAdditionalProp[option.config.type].color}90` }}>
                                    {elementAdditionalProp[option.config.type].icon}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="tab__createNewOption">
                    <button onClick={openSettingPropsHandler}>
                        <PlusIcon />
                        <p>تنظیمات جدید</p>
                    </button>
                </div>
            </div>
            {
                isDrawerOpen && 
                <SettingPropsDrawer
                    setSettingStore={setSettingStore}
                    settingStore={settingStore}
                    selectedSettingType={selectedSettingType}
                    setSelectedSettingType={setSelectedSettingType}
                    createNewOption={createNewOption}
                    closeHandler={closeSettingPropsHandler}
                    visible={isDrawerOpen} />
            }
        </React.Fragment>
    )
}

export default Tab;