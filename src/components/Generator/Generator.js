import React, { useState } from "react";
import { developerDefaultSet, developerTabDefaultSet } from "./static/DeveloperDefaultSet";

import Input from "../../components/Input";
import TabCreator from "./TabCreator";
import EmptyCanvas from "./EmptyCanvas";

import { idGenerator } from "../../utils";
import Tab from "./Tab";
import RowCreator from "./RowCreator";
import Controllers from "./Controllers";

const Generator = () => {
    const [store, setStore] = useState({ sections : [{ tabs : [] , id : idGenerator()}] , primary: developerDefaultSet.primaryList.map(el => ({ name : el.key , value : "" })) });

    const onPrimaryFieldChangeHandler = (key , value) => {
        setStore(prev => ({
            ...prev ,
            primary : prev.primary.map(el => el.name === key ? {...el , value} : el)
        }))
    }

    const createNewColumnHandler = () => {
        setStore(prev => ({
            ...prev ,
            tabs : [
                ...prev.tabs,
                {
                    id : idGenerator(),
                    ...developerTabDefaultSet,
                }
            ]
        }))
    }

    const createNewRowHandler = () => {
        setStore(prev => ({
            ...prev ,
            sections : [...prev.sections , {tabs : [] , id : idGenerator()}]
        }))
    }

    const changeTabDetailsHandler = (tabId , targetKey , value) => {
        setStore(prev => ({
            ...prev ,
            tabs : prev.tabs.map(el => el.id === tabId ? ({
                ...el,
                [targetKey] : value
            }) : el)
        }))
    }
    


    return (
        <div className="generator">
            <div className="generator__header">
                <Controllers />
                <p>ساخت تنظیمات جدید</p>
            </div>
            <div className="generator__primaryForm">
                {
                    developerDefaultSet.primaryList.map((el , i) => (
                        <div key={i}>
                            <Input
                                value={store.primary.find(primary => primary.name === el.key).value}
                                containerStyle={{ width : "100%" }} 
                                label={el.label} 
                                onChange={value => onPrimaryFieldChangeHandler(el.key , value)} />
                            <div className="generator__primaryForm__iconBox">
                                {el.icon}
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                store.sections.map((section , index) => (
                    <div className="section" key={index}>
                            <TabCreator createTabHandler={createNewColumnHandler} />
                            <div className="generator__tabDirectory">
                                {
                                !section.tabs.length 
                                    ? <EmptyCanvas onClick={createNewColumnHandler} /> 
                                    : store.tabs.map((el , i) => <Tab changeDetailsHandler={changeTabDetailsHandler} index={i + 1} key={i} {...el} />)
                                }
                            </div>
                    </div>
                )) 
            }
            <RowCreator createNewRowHandler={createNewRowHandler} />
        </div>
    )
}


export default Generator;