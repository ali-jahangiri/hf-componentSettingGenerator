import { BoxShadow, DropDown, Input } from "./HelperGeneratorUiElement";

const elementClone = passedProps => ({
    dropdown : <DropDown {...passedProps} />,
    input : <Input {...passedProps} />,
    'box-shadow' : <BoxShadow {...passedProps} />
})

const ElementGenerator = ({ 
    targetElement ,
    elementConfig ,
    setSettingStore,
    settingStore,
    setIsValidInNested
}) => {
    
    return (
        <div className="settingFormItemGenerator">
            {elementClone({ settingStore , setSettingStore , setIsValidInNested })[targetElement]}
        </div>
    )
}


export default ElementGenerator;