const BoxIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M9,14h6a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Z"/><path d="M19,0H5A5.006,5.006,0,0,0,0,5V6A3,3,0,0,0,1,8.234V19a5.006,5.006,0,0,0,5,5H18a5.006,5.006,0,0,0,5-5V8.234A3,3,0,0,0,24,6V5A5.006,5.006,0,0,0,19,0ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V6a1,1,0,0,1-1,1H3A1,1,0,0,1,2,6ZM21,19a3,3,0,0,1-3,3H6a3,3,0,0,1-3-3V9H21Z"/></svg>
const LeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M.876,14.088l3.879,3.879a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L2.614,13,23,13a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1L2.553,11,6.169,7.381a1,1,0,0,0,0-1.414h0a1,1,0,0,0-1.414,0L.875,9.846A3.007,3.007,0,0,0,.876,14.088Z"/></svg>

const EmptyCanvas = ({ onClick }) => {
    return (
    <div className="emptyCanvas">
        <div className="emptyCanvas__icon">
            <BoxIcon />
        </div>
        <div className="emptyCanvas__details">
            <div onClick={onClick}>
                <LeftIcon />
                <p>شروع کنید</p>
            </div>
            <p>! هنوز هیچ تبی ساخته نشده</p>
        </div>
    </div>
    )
}


export default EmptyCanvas;