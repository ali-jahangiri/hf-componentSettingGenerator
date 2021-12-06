import React from "react";
import { elementAdditionalProp } from "./developerDefaultSettingElement";
import ElementGenerator from "./ElementGenerator";

const RightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>155 arrow left</title><path d="M.876,14.088l3.879,3.879a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L2.614,13,23,13a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1L2.553,11,6.169,7.381a1,1,0,0,0,0-1.414h0a1,1,0,0,0-1.414,0L.875,9.846A3.007,3.007,0,0,0,.876,14.088Z"/></svg>

const SettingElementBox = ({
    selectHandler,
    config,
    name : identifier,
    index,
    selectedSetting,
    settingStore,
    setSettingStore
}) => {
    
    return (
        <div
            onClick={() => selectHandler(identifier)}
            style={{ animationDelay : `${index * 50}ms` }}
            className={`settingElementBox ${selectedSetting ? (selectedSetting === identifier ? "settingElementBox--selected" : "settingElementBox--getHide") :""}`}>
            <span style={{ boxShadow : `${elementAdditionalProp[identifier].color} 17px 20px 480px ${selectedSetting ? (selectedSetting === identifier ? 900 : 90) : 90}px`}} className="settingElementBox__fadeBul" />
            {
                elementAdditionalProp[identifier]?.icon && <div className="settingElementBox__iconBox">
                    {elementAdditionalProp[identifier]?.icon}
                </div>
            }
            <div className="settingElementBox__name">
                {
                    config.title 
                    ? <div className="settingElementBox__name--full">
                        <p>{config.title}</p>
                        <p>
                            <span>{config.type}</span>
                            <span>به عنوان</span>
                        </p>
                    </div> 
                    : <p>{config.type}</p>
                }
            </div>
            <div className="settingElementBox__clickIcon">
                <RightIcon />
            </div>
            {
                selectedSetting === identifier && <div className="settingElementBox__forms">
                    <ElementGenerator
                        setSettingStore={setSettingStore}
                        settingStore={settingStore}
                        elementConfig={config}
                        targetElement={config.type} />
                </div>
            }
        </div>
    )
}


export default SettingElementBox;