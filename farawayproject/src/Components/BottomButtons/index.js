import { useState } from "react"

export const BottomButtons = ({ itemsArr, setItemsArr }) => {

    const clearAllItems = () => {
        setItemsArr([])
    }

    const handleSortChange = (e) => {
        const selectedOption = e.target.value;

    // Determinig which sorting option was selected
    switch (selectedOption) {
        case "inputOrder": sortByInputOrder();
            break;
        case "description" : sortByDescription();
            break;
        case "packedStatus" : sortByPackdedStatus();
            break;
        default: 
            break;   
    }
};






    return (
        <div>
            <select onChange={handleSortChange}>
                <option value="">sort By</option>
                <option value="inputOrder">InputOrder</option>
                <option value="description">Description</option>
                <option value="packedStatus">Packed Status</option>
            </select>
            <button onClick={clearAllItems} style={{ backgroundColor: "#fde7aa" }}>Clear List</button>
        </div>
    )
}