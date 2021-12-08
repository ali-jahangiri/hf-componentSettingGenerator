import { useState } from "react";
import { Range } from "react-range";

const RangeSlider = ({
    label , 
    value , 
    onChange
}) => {
    const [grabbed, setGrabbed] = useState(false);

    const checkValueStatusHandler = () => {
        const enteredValue = value.values[0];
        if(enteredValue > 100) return (
            <div>
                <span>{">"}</span>
                <span>بزرگتر از حداکثر</span>
            </div>
        );
        else if(enteredValue < 0) return (
            <div>
                <span>{"<"}</span>
                <span>کوچکتر از حداقل</span>
            </div>
        )
    }

    return (
        <div className={`rangeSlider ${grabbed ? "rangeSlider--grabbed" : ""}`}>
            <div className="rangeSlider__label">
                <div className="rangeSlider__label__statusOfValue">
                    {checkValueStatusHandler()}
                </div>
                <div className="rangeSlider__label__intro">
                    <p>{label}</p>
                    <div />
                </div>
            </div>
            <Range
                step={1}
                min={0}
                max={100}
                onFinalChange={() => setGrabbed(false)}
                values={value.values}
                onChange={(values) => {
                    onChange({ values })
                    setGrabbed(true)
                }}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className="rangeSlider__track"
                        style={{...props.style}}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                <div
                    {...props}
                    className="rangeSlider__thumb"
                    style={{ ...props.style }}
                >
                    {
                        !!value.values[0] && <span>{value.values[0]}</span>
                    }
                    
                </div>
                )}
            />
        </div>
    )
}


export default RangeSlider;