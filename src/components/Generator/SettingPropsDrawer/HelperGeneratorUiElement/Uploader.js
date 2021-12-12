import PrimaryForm from "../PrimaryForm";

const Uploader = ({ setSettingStore , settingStore }) => {
    return (
        <div>
            <PrimaryForm
                setStore={setSettingStore} 
                store={settingStore} />
        </div>
    )
}


export default Uploader;