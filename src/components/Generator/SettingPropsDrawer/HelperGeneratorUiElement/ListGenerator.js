
import { useState } from "react";
import Input from "../../../Input";
const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/></svg>
const CancelIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>181 cross small</title><path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z"/></svg>
const TickIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>141 check</title><path d="M22.319,4.431,8.5,18.249a1,1,0,0,1-1.417,0L1.739,12.9a1,1,0,0,0-1.417,0h0a1,1,0,0,0,0,1.417l5.346,5.345a3.008,3.008,0,0,0,4.25,0L23.736,5.847a1,1,0,0,0,0-1.416h0A1,1,0,0,0,22.319,4.431Z"/></svg>
const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>50 bin</title><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg>;


const ListGenerator = ({ tempCreateItem , setTempCreateItem , createdOptions , setParentStore , defaultResetter , setterKeyAs = { storeKeyAs : "" , storeValueAs : "" } }) => {
    const [isCreatorOpened, setIsCreatorOpened] = useState(false);

    const cancelOnCreateProcess = e => {
        e.stopPropagation();
        setIsCreatorOpened(false);
        setTempCreateItem(defaultResetter);
    }

    const changeTempCreateStore = (key , value) => {
        setTempCreateItem(prev => ({
            ...prev, 
            [key] : value
        }))
    }


    const deleteOptionHandler = optionValue => {
        setParentStore("options" , createdOptions.filter(item => item[setterKeyAs.storeValueAs] !== optionValue))
    }



    const createNewItemHandler = () => {
        if(!isCreatorOpened) return setIsCreatorOpened(true);
        else if(tempCreateItem[setterKeyAs.storeKeyAs] && tempCreateItem[setterKeyAs.storeValueAs]){
            setParentStore('options' , [...(createdOptions || []) , tempCreateItem]);
        }
        setTempCreateItem(defaultResetter);
        setIsCreatorOpened(false);
    }

    const checkCreateTriggerRender = () => {
        if(isCreatorOpened) {
            if(tempCreateItem[setterKeyAs.storeKeyAs] && tempCreateItem[setterKeyAs.storeValueAs]) {
                return (
                    <div>
                        <div>
                            <TickIcon />
                            <p>تولید</p>
                        </div>
                        <div onClick={cancelOnCreateProcess}>
                            <CancelIcon />
                            <p>بازگشت</p>
                        </div>
                    </div>
                )
            }else return (
                <div>
                    <CancelIcon />
                    <p>بازگشت</p>
                </div>
            )
        }else return (
            <div>
                    <PlusIcon />
                    <p>افزودن آیتم</p>
            </div>
        )
    }


    return (
        <div>
        <div className="dropDownElement__itemDirectory">
                {
                    createdOptions?.map((option , index) => (
                        <div key={index} className="dropDownElement__item">
                            <div className="dropDownElement__reorderGrabble">

                            </div>
                            <div onClick={() => deleteOptionHandler(option[setterKeyAs.storeValueAs])} className="dropDownElement__item__controller">
                                <TrashIcon />
                            </div>
                            <div className="dropDownElement__item__value">
                                <p>{option[setterKeyAs.storeValueAs]}</p>
                                <span>مقدار</span>
                            </div>
                            <div className="dropDownElement__item__name">
                                <p>{option[setterKeyAs.storeKeyAs]}</p>
                                <span>نام</span>
                            </div>
                            <div className="dropDownElement__item__index">
                                <p>{index + 1}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={`dropDownElement__formForCreate ${isCreatorOpened ? "dropDownElement__formForCreate--open" : ""}`}>
                <div className="dropDownElement__formForCreate__header">
                    <div>
                        <p>ایجاد آیتم جدید</p>
                        <p>عنوان آیتم و مقدار آن را وارد نمایید</p>
                    </div>
                    <span />
                </div>
                <div className="dropDownElement__formForCreate__form">
                    <div>
                        <Input 
                            inputStyle={{ backgroundColor : "transparent" }}
                            value={tempCreateItem[setterKeyAs.storeValueAs]}
                            label="مقدار"
                            onChange={value => changeTempCreateStore(setterKeyAs.storeValueAs , value)} />
                    </div>
                    <div>
                        <Input
                            inputStyle={{ backgroundColor : "transparent" }} 
                            value={tempCreateItem[setterKeyAs.storeKeyAs]} 
                            label="عنوان" 
                            onChange={value => changeTempCreateStore(setterKeyAs.storeKeyAs , value)} />
                    </div>
                </div>
            </div>
            <div className={`dropDownElement__createNewRow ${isCreatorOpened ? "dropDownElement__createNewRow--getLeft" : ""}`}>
                <div onClick={createNewItemHandler}>
                    {checkCreateTriggerRender()}
                </div>
            </div>
        </div>
    )
}

export default ListGenerator;