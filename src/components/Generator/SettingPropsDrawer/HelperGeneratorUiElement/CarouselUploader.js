import PrimaryForm from "../PrimaryForm";

const CarouselUploader = ({ setSettingStore , settingStore }) => {
    return (
        <div>
            <PrimaryForm
                setStore={setSettingStore} 
                store={settingStore} />
        </div>
    )
}


export default CarouselUploader;