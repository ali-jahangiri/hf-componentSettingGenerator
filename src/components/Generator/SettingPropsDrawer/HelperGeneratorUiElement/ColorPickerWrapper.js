import HelperBox from "../HelperBox";
import PrimaryForm from "../PrimaryForm";
import ColorPicker from "./ColorPicker";

const ColorPickerWrapper = ({ setSettingStore , settingStore }) => {
    return (
        <div className="colorPickerWrapper">
            <PrimaryForm store={settingStore} hideItems={["defaultValue"]} setStore={setSettingStore} />
            <div className="colorPickerWrapper__container">
                <div style={{ width : "70%" , padding : "0 1.5rem" }}>
                    <ColorPicker
                        selectHandler={color => setSettingStore("defaultValue" , color)}
                        selected={settingStore['defaultValue']}
                    />
                </div>
                <HelperBox
                    title="تهیه رنگ"
                    desc="به کمک ابزار مقابل میتوانید مقدار پیشفرض تنظیمات رنگ را تهیه نمایید"
                />
            </div>
        </div>
    )
}

export default ColorPickerWrapper;