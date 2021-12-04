const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/></svg>

const Tab = ({
    createNewOption,
    options,
    index,
    changeDetailsHandler,
    name,
    id
}) => {
    return (
        <div className="tab">
            <div className="tab__headerPanel">
                <input 
                    value={name} 
                    placeholder="نام تب" 
                    onChange={({ target : { value } }) => changeDetailsHandler(id , "name" , value)} />
                <div>
                    <p>{index}</p>
                </div>
            </div>
            <div className="tab__optionDirectory">

            </div>
            <div className="tab__createNewOption">
                <button>
                    <PlusIcon />
                    <p>تنظیمات جدید</p>
                </button>
            </div>
        </div>
    )
}

export default Tab;