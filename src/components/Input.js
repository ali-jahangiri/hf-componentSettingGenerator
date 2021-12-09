import { useEffect, useRef, useState } from "react"

const Input = ({
    value ,
    onChange,
    label,
    containerStyle = {},
    inputStyle = {},
    isInvalid,
    isSuccess,
    primary,
    type = "text",
    disable,
    defaultValue
}) => {
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef();
    
    const onChangeHandler = ({ target : { value } }) => onChange(value)

    const focusHandler = () => setIsFocused(true)

    useEffect(() => {
        if(!value && !isFocused) setIsFocused(false)
        else if(value && !isFocused) setIsFocused(true);
    } , [value, isFocused])



    const blurHandler = () => {
        if(!value) setIsFocused(false);
    }


    return (
        <div style={containerStyle} className={`input ${disable ? "input--disable" : ""} ${isSuccess ? "input--success" : ""} ${isInvalid ? "input--invalid" : ""} ${isFocused ? "input--focus" : ""}`}>
            {
                disable && <div className="input__disableOverlay" />
            }
            <input
                type={type} 
                style={inputStyle} 
                ref={inputRef} 
                onBlur={blurHandler}
                onFocus={focusHandler} 
                onChange={onChangeHandler} 
                value={value}
            />
            <p onClick={() => {
                focusHandler();
                inputRef.current.focus()
            }}>{label}</p>
            <span style={{
                ...(primary && {
                    backgroundColor : primary
                })
            }} />
        </div>
    )
}


export default Input