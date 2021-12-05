import React, { useState } from "react";
import SettingPropsDrawer from "./SettingPropsDrawer";

const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/></svg>

const Tab = ({
    createNewOption,
    options,
    index,
    name,
    id,
    changeDetailsHandler,
    onDrawerStatusChange,
}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openSettingPropsHandler = () => {
        setIsDrawerOpen(true)
        onDrawerStatusChange(true);
    }

    const closeSettingPropsHandler = () => {
        setIsDrawerOpen(false)
        onDrawerStatusChange(false)
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
                </div>
                <div className="tab__createNewOption">
                    <button onClick={openSettingPropsHandler}>
                        <PlusIcon />
                        <p>تنظیمات جدید</p>
                    </button>
                </div>
            </div>
            <SettingPropsDrawer closeHandler={closeSettingPropsHandler} visible={isDrawerOpen} />
        </React.Fragment>
    )
}

export default Tab;