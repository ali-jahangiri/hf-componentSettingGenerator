import { DropDown } from "./HelperGeneratorUiElement";

const elementClone = passedProps => ({
    dropdown : <DropDown {...passedProps} />
})

const ElementGenerator = ({ 
    targetElement ,
    elementConfig ,
    setSettingStore,
    settingStore,
}) => {
    
    return (
        <div className="settingFormItemGenerator">
            {elementClone({ settingStore , setSettingStore })[targetElement]}
        </div>
    )
}


export default ElementGenerator;