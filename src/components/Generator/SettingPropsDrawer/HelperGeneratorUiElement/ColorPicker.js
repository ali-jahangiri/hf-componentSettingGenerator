import { useState } from 'react';
import { SliderPicker } from 'react-color';


const colors = ["519259" , "8E806A" , "5584AC" , "CD1818" , "f47373" , "697689" , "ff8a65"]
const ColorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M22.327,18.422C23.055,19.456,24,20.651,24,21.5a2.5,2.5,0,0,1-5,0c0-.775.961-2.008,1.692-3.069A1,1,0,0,1,22.327,18.422Zm-.877-4.558-8.672,8.672a5.006,5.006,0,0,1-7.071,0L1.465,18.293a5,5,0,0,1,0-7.071l5.709-5.71L4.318,2.622A1,1,0,0,1,5.74,1.216L8.588,4.1,10.136,2.55l-.843-.843A1,1,0,0,1,10.707.293l13,13a1,1,0,1,1-1.414,1.414ZM20.036,12.45,11.55,3.964,9.993,5.522,14.711,10.3A1,1,0,1,1,13.289,11.7L8.58,6.935l-5.7,5.7a3,3,0,0,0,0,4.243l4.242,4.243a3.005,3.005,0,0,0,4.243,0Z"/></svg>

const ColorPicker = ({ selectHandler , selected }) => {
    const [userDecide, setUserDecide] = useState(null);
    const [hashColor, setHashColor] = useState("");

    return (
        <div className={`customColorPicker customColorPicker--${userDecide}`}>
            <div className="customColorPicker__suggestBar">
                {
                    colors.map((color , i) => (
                        <div onClick={() => selectHandler({ hex : `#${color}` })} style={{ backgroundColor : `#${color}` }} key={i}>
                            <span style={{ backgroundColor : `#${color}`, transform : selected?.hex === `#${color}` ? "scale(1.3)" : "scale(1)" }}/>
                        </div>
                    ))
                }
            </div>
            <div onClick={() => setUserDecide(null)} className={`customColorPicker__controller ${userDecide ? "customColorPicker__controller--show" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z"/></svg>
                <p>بازگشت</p>
            </div>
            <div className="customColorPicker__pickerPen">
                {
                    <div className={`customColorPicker__pickerPen__overlay ${userDecide ? (userDecide === "colorPicker" ? "customColorPicker__pickerPen__overlay--colorPicker" : "customColorPicker__pickerPen__overlay--code") : ""}`}>
                        <div onClick={() => setUserDecide("colorPicker")}>
                            <p>استفاده از انتخاب کننده رنگ</p>
                            <div>
                                <ColorIcon />
                            </div>
                        </div>
                        <div onClick={() => setUserDecide("code")}>
                            <p>وارد کردن کد رنگ</p>
                            <div>
                                <span>#</span>
                            </div>
                        </div>
                    </div>
                }
                {
                    userDecide && (userDecide === "colorPicker"
                        ? <SliderPicker
                            className='customColorPicker__libraryNode' 
                            onChange={selectHandler} 
                            color={selected || ""} /> 
                        : <div className='customColorPicker__hashColor'>
                            <div style={{ backgroundColor : `#${hashColor}` }} />
                                <input
                                    style={{ background : `linear-gradient(270deg, #${hashColor}99, white)` }}
                                    value={hashColor}
                                    onChange={({ target : { value } }) => {
                                        setHashColor(value);
                                        selectHandler({
                                            hex : `#${value}`
                                        })
                                    }} />
                            <span>#</span>
                        </div>)
                }
            </div>
        </div>
    )
}

export default ColorPicker;