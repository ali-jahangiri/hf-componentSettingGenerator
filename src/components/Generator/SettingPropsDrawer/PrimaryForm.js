import Input from "../../Input";

const PrimaryForm = ({ store , setStore , containerStyle = {} }) => {
    return (
        <div style={containerStyle} className="primaryForm">
            <div>
                <Input 
                    value={store["name"]} 
                    label='عبارت کلیدی'
                    inputStyle={{ backgroundColor : "transparent" }}
                    onChange={value => setStore("name" , value)} />
            </div>
            <div>
                <Input 
                    value={store["defaultValue"]} 
                    label='مقدار اولیه'
                    inputStyle={{ backgroundColor : "transparent" }}
                    onChange={value => setStore("defaultValue" , value)} />
            </div>
            <div>
                <Input value={store["title"]} 
                    label='عنوان'
                    inputStyle={{ backgroundColor : "transparent" }}
                    onChange={value => setStore("title" , value)} />
            </div>
        </div>
    )
}

export default PrimaryForm;