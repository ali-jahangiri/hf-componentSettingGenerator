import PrimaryForm from "../PrimaryForm";

const Input = ({ settingStore , setSettingStore }) => {
    return (
        <div className="inputElement">
            <PrimaryForm setStore={setSettingStore} store={settingStore} />
        </div>
    )
}


export default Input;
