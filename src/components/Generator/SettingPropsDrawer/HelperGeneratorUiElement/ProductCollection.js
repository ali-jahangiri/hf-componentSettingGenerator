import PrimaryForm from "../PrimaryForm";

const ProductCollection = ({ setSettingStore , settingStore }) => {
    return (
        <div>
            <PrimaryForm
                setStore={setSettingStore} 
                store={settingStore} />
        </div>
    )
}


export default ProductCollection;