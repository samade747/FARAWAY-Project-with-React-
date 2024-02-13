import { useState } from "react"

export const Form = ({ setItemArr, item }) => {

    const [itemName, setItemName] = useState("")
    const [quantity, setQuantity] = useState(1)

    const addItem = () => {
        const meraItem = [...item]
        meraItem.push({
            quantity: quantity,
            name: itemName,
            packed: false,
        })
        setItemArr(meraItem)



    }


return (
    <div style={{
        backgroundColor: "#df6b1b",
        padding: "10px 0px",
        color: "#583116",
        fontWeight: "1000",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        gap: "20px"
    }}>
        <p>  What do you need for your trip? </p>
    
    <label for="items">Choose Quantity and Name:</label> 

    <select onChange={(e) => setQuantity(e.target.value)} name="quantity" id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
    </select>
    <input onChange={(e) => setQuantity(e.target.value)} type="text" placeholder="add your items" />

    <button onClick={addItem}>Add</button>
    </div>
)

}