const SelectBox = ({ options = [{ label :"" , value : "" , default : false }] , onSelect , label }) => {

    return (
        <div className="selectBox">
            <div className="selectBox__label">
                <p>{label}</p>
                <div />
            </div>
            <select onChange={({ target : { value } }) => onSelect(value)}>
                {
                    options.map((item , index) => (
                        <option key={index} value={item.value}>
                            {item.label}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}


export default SelectBox;