const HelperBox = ({ title , desc , containerStyle = {} }) => {
    return (
        <div style={containerStyle} className="helperBox">
            <div className="helperBox__content">
                <div className="helperBox__title">
                    <p>{title}</p>
                </div>
                <div className="helperBox__desc">
                    <p>{desc}</p>
                </div>
            </div>
            <div className="helperBox__index" />
        </div>
    )
}


export default HelperBox;