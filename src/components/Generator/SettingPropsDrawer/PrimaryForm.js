import Input from "../../Input";


const itemsForMapping = [
    {
        label : "عبارت کلیدی",
        key : "name"
    },
    {
        label : "مقدار اولیه",
        key : "defaultValue"
    },
    {
        label : "عنوان",
        key : "title"
    },
]

const PrimaryForm = ({ store , setStore , containerStyle = {} , hideItems = [] }) => {
    return (
        <div style={containerStyle} className="primaryForm">
            {
                itemsForMapping
                    .filter(item => !hideItems.includes(item.key))
                    .map((primaryItem , index) => (
                        <div key={index}>
                            <Input 
                                value={store[primaryItem.key]} 
                                label={primaryItem.label}
                                inputStyle={{ backgroundColor : "transparent" }}
                                onChange={value => setStore(primaryItem.key , value)} />
                        </div>
                ))
            }
        </div>
    )
}

export default PrimaryForm;