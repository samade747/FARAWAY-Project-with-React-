// Component for the form to add items
import { useState } from "react"

// Component for the form to add items
export const Form = ({ setItemsArr, item }) => {
    const [itemName, setItemName] = useState("") // Component for the form to add items
    const [quantity, setQuantity] = useState(1) // State for item quantity

     // Function to add an item
    const addItem = () => {
        const meraItem = [...item] // Copying the current items array
        meraItem.push({  // Adding new item to the array
            quantity: quantity,
            name: itemName,
            packed: false,
        })
        setItemsArr(meraItem) // Updating the items array with the new item


    }


return (
    // Styling for the form container
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
        // Form title
        <p>  What do you need for your trip? </p>
    
    {/* Form inputs */}
    <label for="items">Choose Quantity and Name:</label> 
    <select onChange={(e) => setQuantity(e.target.value)} name="quantity" id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
    </select>
    <input
    onChange={(e) => setItemName(e.target.value)}
    type="text" placeholder="add your items" />
    
    <button onClick={addItem}>Add</button> // Button to add item 
    </div>
)

}