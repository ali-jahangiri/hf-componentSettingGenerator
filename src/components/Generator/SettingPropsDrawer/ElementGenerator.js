import { Border, BoxShadow, CarouselUploader, ColorPickerWrapper, DropDown, DynamicList, Input , Spacing, TextShadow, Uploader } from "./HelperGeneratorUiElement";
import BackgroundImage from "./HelperGeneratorUiElement/BackgroundImage";
import ProductCollection from "./HelperGeneratorUiElement/ProductCollection";

const elementClone = passedProps => ({
    dropdown : <DropDown {...passedProps} />,
    input : <Input {...passedProps} />,
    'box-shadow' : <BoxShadow {...passedProps} />,
    spacing : <Spacing {...passedProps} />,
    colorpicker : <ColorPickerWrapper {...passedProps} />,
    border : <Border {...passedProps} />,
    "text-shadow" : <TextShadow {...passedProps} />,
    "background-image" : <BackgroundImage {...passedProps} />,
    "carousel-upload" : <CarouselUploader {...passedProps} />,
    "product-collection" : <ProductCollection {...passedProps} /> ,
    upload : <Uploader {...passedProps} />,
    "dynamic-list" : <DynamicList {...passedProps} />
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