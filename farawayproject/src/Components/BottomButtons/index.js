import React, { useState } from "react"

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

const sortByInputOrder = () => {
    // copying the array 
    const sortedItems = [...itemsArr];
    // sorting the items based on input order
    sortedItems.sort((a, b) => a.inputOrder - b.inputOrder)
    setItemsArr(sortedItems);
    
}

const sortByDescription = () => {
// copying the array 
    var sortedItems = [...itemsArr];
// sort the items alphabitcaly 
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
setItemsArr(sortedItems)
}

const sortByPackdedStatus = () => {
    const sortedItems = [...itemsArr]
    sortedItems.sort((a, b) => (a.packed === b.packed) ? 0 : a.packed ? 1 : -1)
    setItemsArr(sortedItems)
}

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