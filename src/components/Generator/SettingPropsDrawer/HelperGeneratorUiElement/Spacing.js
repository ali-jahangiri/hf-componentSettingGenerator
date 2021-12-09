import { useEffect, useState } from "react";
import { extractSpace } from "../../../../utils";
import Input from "../../../Input";
import HelperBox from "../HelperBox";
import PrimaryForm from "../PrimaryForm";

const TwoAxisArrowIcon = ({ isHorizontal }) => <div className={`towAxisArrow ${isHorizontal ? "towAxisArrow--horizontal" : ""}`}>
    <svg id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.707,5.462,14.121.875a3.007,3.007,0,0,0-4.242,0L5.293,5.462A1,1,0,1,0,6.707,6.876L11,2.584V23a1,1,0,0,0,2,0V2.583l4.293,4.293a1,1,0,1,0,1.414-1.414Z"/></svg>
    <svg id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.707,5.462,14.121.875a3.007,3.007,0,0,0-4.242,0L5.293,5.462A1,1,0,1,0,6.707,6.876L11,2.584V23a1,1,0,0,0,2,0V2.583l4.293,4.293a1,1,0,1,0,1.414-1.414Z"/></svg>
</div>


const LockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>71 lock</title><path d="M19,8.424V7A7,7,0,0,0,5,7V8.424A5,5,0,0,0,2,13v6a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V13A5,5,0,0,0,19,8.424ZM7,7A5,5,0,0,1,17,7V8H7ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H17a3,3,0,0,1,3,3Z"/><path d="M12,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Z"/></svg>

const axisList = {
    margin: [{
        label : 'horizontal',
        includes : ['ML',"MR"],
        icon : <TwoAxisArrowIcon isHorizontal />
    },{
        label : 'vertical',
        includes : ['MT',"MB"],
        icon : <TwoAxisArrowIcon />
    }],
    padding: [{
        label : 'horizontal',
        includes : ['PL',"PR"],
        icon : <TwoAxisArrowIcon isHorizontal />
    }, {
        label : 'vertical',
        includes : ['PT',"PB"],
        icon : <TwoAxisArrowIcon />
    }]
}

const marginInputs = [
    {
        style: {
            left: -40,
            top: "50%"
        },
        label : "ML"
    },
    {
        style : {
            left: 'calc(100% + 40px)',
            top: "50%"
        },
        label : "MR"
    },
    {
        style : {
            left: "50%",
            top : -30
        },
        
        label : "MT"
    },
    {
        style : {
            left: '50%',
            bottom: -60
        },
        label : "MB"
    },
]

const paddingInputs = [
    {
        style: {
            left: 40,
            top: "50%"
        },
        label : "PL"
    },
    {
        style : {
            left: 'calc(100% - 40px)',
            top: "50%"
        },
        label : "PR"
    },
    {
        style : {
            left: "50%",
            top: 40
        },
        label : "PT"
    },
    {
        style : {
            left: "50%",
            bottom: 0
        },
        label : "PB"
    },
]

const Spacing = ({ setSettingStore , settingStore }) => {
    const [spacesClone, setSpacesClone] = useState({ margin : {} , padding : {} });
    const [activeStatus, setActiveStatus] = useState({ margin : [] , padding : [] });

    const changeActiveStatus = (prop = "" , targetAxis) => {
        const targetProps = activeStatus[prop];
        
        setActiveStatus(prev => ({
            ...prev , 
            [prop] : targetProps.includes(targetAxis) ? prev[prop].filter(axis => axis !== targetAxis) : [...prev[prop] , targetAxis]
        }))

    }
    
    const changeSpaceCloneHandler = (targetClone , axis , value) => {
        setSpacesClone(prev => ({
            ...prev,
            [targetClone] : {
                ...prev[targetClone],
                [axis] : value
            }
        }))
    }


    const detectIsAxisEnable = (input , spaceType) => {
        return axisList
                [spaceType]
                    .some(el => activeStatus[spaceType].includes(el.label) && el.includes.includes(input.label));
    }


    useEffect(function liftDefaultValueToParent() {
        const { padding , margin } = spacesClone;
        
        setSettingStore("defaultValue" , {
            margin : extractSpace(margin , "M"),
            padding: extractSpace(padding , "P")
        });

        setSettingStore('additionalConfig' , activeStatus)


    } , [spacesClone , activeStatus])

    return (
        <div className="spacing">
            <div className="spacing__container">
                <PrimaryForm store={settingStore} hideItems={["defaultValue"]} setStore={setSettingStore} />
                <div className="spacing__content">
                    <div className="spacing__mainBox">
                        <div className="spacing__margin">
                            <div className="spacing__axisContainer">
                                <div className="spacing__axisContainer__item">
                                    {
                                        axisList.margin.map((el , i) => (
                                            <div 
                                                onClick={() => changeActiveStatus('margin' , el.label)}
                                                style={{ 
                                                        backgroundColor : "#105652a6" , 
                                                        border : "3px solid transparent" ,
                                                        borderColor : activeStatus.margin.includes(el.label) ? "white" : "transparent",
                                                        opacity : activeStatus.margin.includes(el.label) ? .5 : 1
                                                }} 
                                                key={i}
                                            >
                                                {el.icon}
                                                <p>Margin {el.label}</p>
                                                {
                                                    activeStatus.margin.includes(el.label) && <div className="spacing__axisContainer__item spacing__axisContainer__item--lock">
                                                        <LockIcon />
                                                    </div>
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="spacing__axisContainer__item">
                                    {
                                        axisList.padding.map((el , i) => (
                                            <div
                                                onClick={() => changeActiveStatus('padding' , el.label)}
                                                style={{
                                                    backgroundColor : "#ffe06d",
                                                    border : "3px solid transparent" , 
                                                    borderColor : activeStatus.padding.includes(el.label) ? "white" : "transparent" ,
                                                    opacity : activeStatus.padding.includes(el.label) ? .5 : 1
                                                    
                                                }} 
                                                key={i}>
                                                {el.icon}
                                                <p>Padding {el.label}</p>
                                                {
                                                    activeStatus.padding.includes(el.label) && <div className="spacing__axisContainer__item spacing__axisContainer__item--lock">
                                                        <LockIcon />
                                                    </div>
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {
                                marginInputs.map((input , i) => (
                                    <div
                                        key={i}
                                        style={input.style} 
                                        className="spacing__axis">
                                        <Input
                                            type="number"
                                            disable={detectIsAxisEnable(input , "margin")}
                                            onChange={value => changeSpaceCloneHandler("margin" , input.label , +value)}
                                            primary="#105652a6"
                                            value={spacesClone["margin"][input.label]}
                                            label={input.label} />
                                    </div>
                                ))
                            }
                            {
                                paddingInputs.map((input , i) => (
                                    <div
                                        key={i}
                                        style={input.style} 
                                        className="spacing__axis">
                                        <Input
                                            type="number"
                                            disable={detectIsAxisEnable(input , "padding")}
                                            onChange={value => changeSpaceCloneHandler("padding" , input.label , +value)}
                                            primary="#ffc9006b"
                                            value={spacesClone["padding"][input.label]}
                                            label={input.label} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <HelperBox
                        containerStyle={{ width : "50%" }}
                        title="تهیه فواصل"    
                        desc={<div >
                            <span>به کمک ابزار مقابل میتوانید مقدار پیشفرض تنظیمات فاصله را تهیه نمایید . ارزش ابتدایی فرم های فاصله صفر میباشد.</span>
                        </div>}
                    />


                </div>
            </div>
        </div>
    )
}


export default Spacing;