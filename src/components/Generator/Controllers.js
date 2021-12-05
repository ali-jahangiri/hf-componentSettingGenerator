const DraftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M17,14a1,1,0,0,1-1,1H8a1,1,0,0,1,0-2h8A1,1,0,0,1,17,14Zm-4,3H8a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2Zm9-6.515V19a5.006,5.006,0,0,1-5,5H7a5.006,5.006,0,0,1-5-5V5A5.006,5.006,0,0,1,7,0h4.515a6.958,6.958,0,0,1,4.95,2.05l3.484,3.486A6.951,6.951,0,0,1,22,10.485ZM15.051,3.464A5.01,5.01,0,0,0,14,2.684V7a1,1,0,0,0,1,1h4.316a4.983,4.983,0,0,0-.781-1.05ZM20,10.485c0-.165-.032-.323-.047-.485H15a3,3,0,0,1-3-3V2.047C11.838,2.032,11.679,2,11.515,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z"/></svg>


const Controllers = ({

}) => {
    return (
        <div className="generator__controllers">
            <div className="generator__controllers__save">
                <p>ذخیره</p>
            </div>
            <div className="generator__controllers__draft">
                <p>پیش نویس</p>
                {/* <DraftIcon /> */}
            </div>
        </div>
    )
}


export default Controllers