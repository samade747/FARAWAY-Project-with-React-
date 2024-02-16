import React, { useState } from "react"


export const BottomButtons = ({ itemsArr, setItemsArr }) => {
    const handleSortChange = (e) => {
        const selectedOption = e.target.value;

    // Determinig which sorting option was selected
    switch (selectedOption) {
        case "inputOrder":
            sortByInputOrder();
            break;
        case "description":
            sortByDescription();
            break;
        case "packedStatus":
            sortByPackdedStatus();
            break;
        default: 
            break;   
    }
};

const sortByInputOrder = () => {
    if(Array.isArray(itemsArr)){
        console.log(itemsArr)
    // copying the array 
    const sortedItems = [...itemsArr].sort((a, b) => a.inputOrder - b.inputOrder)
    // sorting the items based on input order
    setItemsArr(sortedItems);
    }
}

const sortByDescription = () => {
    if(Array.isArray(itemsArr)){
// copying the array 
    var sortedItems = [...itemsArr].sort((a, b) => a.name.localeCompare(b.name));
// sort the items alphabitcaly 
    
setItemsArr(sortedItems)
    }
}
const sortByPackdedStatus = () => {
    if(Array.isArray(itemsArr)){
    const sortedItems = [...itemsArr].sort((a, b) => (a.packed === b.packed) ? 0 : a.packed ? 1 : -1)
      setItemsArr(sortedItems)
    }
}

const clearAllItems = () => {
        setItemsArr([])
}

return (
        <div>
            <div>
                <select onChange={handleSortChange}>
                    <option value="">sort By</option>
                    <option value="inputOrder">InputOrder</option>
                    <option value="description">Description</option>
                    <option value="packedStatus">Packed Status</option>
                </select>
            </div>
            <button onClick={clearAllItems} style={{ backgroundColor: "#fde7aa" }}>Clear List</button>
        </div>
    )
}