import PrimaryForm from "../PrimaryForm";

const BackgroundImage = ({ setSettingStore , settingStore }) => {
    return (
        <div>
            <PrimaryForm
                setStore={setSettingStore} 
                store={settingStore} />
        </div>
    )
}


export default BackgroundImage;