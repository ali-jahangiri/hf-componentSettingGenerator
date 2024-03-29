import React, { useLayoutEffect, useRef, useState } from "react";
import { developerDefaultSet, developerTabDefaultSet } from "./static/DeveloperDefaultSet";

import Input from "../../components/Input";
import TabHeader from "./TabHeader";
import EmptyCanvas from "./EmptyCanvas";

import { filterKeyFromObject, idGenerator, selfClearTimeout } from "../../utils";
import Tab from "./Tab";
import RowCreator from "./RowCreator";
import Controllers from "./Controllers";

const Generator = () => {
    const [store, setStore] = useState({ sections : [{ tabs : [{ id : idGenerator() , name : "" , options : [] }] , id : idGenerator() , name : ""}] , primary: developerDefaultSet.primaryList.map(el => ({ name : el.key , value : "" })) });
    const containerRef = useRef();
    const [headerPos, setHeaderPos] = useState('top');
    const [isSomeSettingDrawerOpen, setIsSomeSettingDrawerOpen] = useState(false);


    useLayoutEffect(function windowsScrollHandler() {
        window.addEventListener("scroll" , () => {
            const scrolledCount = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
            if(scrolledCount <= 25) setHeaderPos('top')
            else setHeaderPos("scrolled");
        })
    } , []);

    const onPrimaryFieldChangeHandler = (key , value) => {
        setStore(prev => ({
            ...prev ,
            primary : prev.primary.map(el => el.name === key ? {...el , value} : el)
        }))
    }

    const createNewColumnHandler = sectionId => {
        setStore(prev => ({
            ...prev ,
            sections : prev.sections.map(el => el.id === sectionId ? {
                ...el,
                tabs : [...el.tabs , { id : idGenerator() , ...developerTabDefaultSet }]
            } : el)
        }))
    }

    const createNewRowHandler = () => {
        setStore(prev => ({
            ...prev ,
            sections : [...prev.sections , {tabs : [] , id : idGenerator() , name :"" }]
        }))

        selfClearTimeout(() => {
            window.scrollTo({ left : 0 , top : containerRef.current.scrollHeight , behavior: 'smooth' })
        } , 1000)
    }

    const changeTabDetailsHandler = (sectionId ,tabId , targetKey , value) => {
       setStore(prev => ({
            ...prev ,
            sections : prev.sections.map(el => el.id === sectionId ? ({
                ...el,
                tabs : el.tabs.map(tab => tab.id === tabId ? {
                    ...tab,
                    [targetKey] : value
                } : tab)
            }) : el)
        }))
    }


    const changeSectionDetailsHandler = (sectionId , targetKey , value) => {
        setStore(prev => ({
            ...prev,
            sections : prev.sections.map(el => el.id === sectionId ? ({
                ...el,
                [targetKey] : value
            }) : el)
        }))
    }
    
    const injectNewSettingToTabOptionHandler = (sectionId , tabId , newSettingStoreForInject) => {
        setStore(prev => ({
            ...prev ,
            sections : prev.sections.map(section => section.id === sectionId ? ({
                ...section,
                tabs : section.tabs.map(el => el.id === tabId ? ({
                    ...el,
                    options : [...el.options , newSettingStoreForInject]
                }) : el)
            }) : section)
        }))
    }


    const removeTabSetting = (sectionId , tabId , optionId) => {
        setStore(prev => ({
            ...prev,
            sections : prev.sections.map(section => section.id === sectionId ? ({
                ...section,
                tabs : section.tabs.map(tab => tab.id === tabId ? ({
                    ...tab,
                    options : tab.options.filter(option => option.id !== optionId)
                }) : tab)
            }) : section)
        }))
    }

    const editTabSettingHandler = (sectionId , newData) => {
        const additionalToConfig = (() => {
            if(newData?.additionalConfig) return newData.additionalConfig;
            else return filterKeyFromObject(newData._config , ['defaultValue' , 'type' , 'title'])
        })();

        setStore(prev => ({
            ...prev,
            sections : prev.sections.map(section => section.id === sectionId ? ({
                ...section,
                tabs : section.tabs.map(tab => tab.options.some(option => option.id === newData.id) ? ({
                    ...tab,
                    options : tab.options.map(option => option.id === newData.id ? ({
                        config : {
                            type : option.config.type,
                            defaultValue : newData.defaultValue,
                            title : newData.title,
                            ...(additionalToConfig)
                        },
                        name : newData.name,
                        id : newData.id
                    }) : option)
                }) : tab)
            }): section)
        }));

}


    console.log(store);

    return (
        <div ref={containerRef} className="generator">
            <div className="generator__header">
                <div className={`generator__header__innerContainer ${isSomeSettingDrawerOpen ? "generator__header__innerContainer--hide" : ""} ${headerPos === "scrolled" ? "generator__header__innerContainer--scrolled" : ""}`}>
                    <Controllers />
                    <div className="generator__header__intro">
                        <p>ساخت تنظیمات جدید</p>
                        <div />
                    </div>
                </div>
            </div>
            <div className="generator__primaryForm">
                {
                    developerDefaultSet.primaryList.map((el , i) => (
                        <div key={i}>
                            <Input
                                inputStyle={{ backgroundColor : "transparent" }}
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
                        <TabHeader
                            nameChangeHandler={value => changeSectionDetailsHandler(section.id , "name" , value)}
                            createTabHandler={() => createNewColumnHandler(section.id)} />
                        <div className="generator__tabDirectory">
                            {
                            !section.tabs.length 
                                ? <EmptyCanvas onClick={() => createNewColumnHandler(section.id)} /> 
                                : section.tabs.map((el , i) => <Tab
                                                                    editOption={newData => editTabSettingHandler(section.id , newData)}
                                                                    removeOption={settingId => removeTabSetting(section.id , el.id , settingId)}
                                                                    createNewOption={newSettingStoreForInject => injectNewSettingToTabOptionHandler(section.id , el.id , newSettingStoreForInject)}
                                                                    onDrawerStatusChange={setIsSomeSettingDrawerOpen} 
                                                                    changeDetailsHandler={(...rest) => changeTabDetailsHandler(section.id , ...rest)} 
                                                                    index={i + 1} 
                                                                    key={i} 
                                                                    {...el} />)
                            }
                        </div>
                        {
                            index !== (store.sections.length - 1) && <div className="section__divider" />
                        }
                    </div>
                )) 
            }
            <RowCreator createNewRowHandler={createNewRowHandler} />
        </div>
    )
}


export default Generator;