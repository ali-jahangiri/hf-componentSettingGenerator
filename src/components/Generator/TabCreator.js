const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/></svg>

const TabCreator = ({
    createTabHandler,
}) => {
    

    return (
        <div className="tabCreator">
            <div className="tabCreator__trigger">
                <button onClick={createTabHandler}>
                    <PlusIcon />
                    <p>ایجاد تب جدید</p>
                </button>
            </div>
            <div className="tabCreator__intro">
                <p>تب ها</p>
                <div>

                </div>
            </div>
        </div>
    )
}


export default TabCreator;