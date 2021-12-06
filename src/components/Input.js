import { useEffect, useRef, useState } from "react"

const Input = ({
    value ,
    onChange,
    label,
    containerStyle = {},
    inputStyle = {},
}) => {
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef();
    
    
    const onChangeHandler = ({ target : { value } }) => onChange(value)

    const focusHandler = () => setIsFocused(true)

    useEffect(() => {
        if(!value && !isFocused) setIsFocused(false)
    } , [value, isFocused])

    const blurHandler = () => {
        if(!value) setIsFocused(false);
    }

    return (
        <div style={containerStyle} className={`input ${isFocused ? "input--focus" : ""}`}>
            <input style={inputStyle} ref={inputRef} onBlur={blurHandler} onFocus={focusHandler} onChange={onChangeHandler} value={value} />
            <p onClick={() => {
                focusHandler();
                inputRef.current.focus()
            }}>{label}</p>
        </div>
    )
}


export default Input