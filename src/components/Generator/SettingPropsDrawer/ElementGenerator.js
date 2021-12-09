import { BoxShadow, DropDown, Input , Spacing } from "./HelperGeneratorUiElement";

const elementClone = passedProps => ({
    dropdown : <DropDown {...passedProps} />,
    input : <Input {...passedProps} />,
    'box-shadow' : <BoxShadow {...passedProps} />,
    spacing : <Spacing {...passedProps} />
})

const ElementGenerator = ({ 
    targetElement ,
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