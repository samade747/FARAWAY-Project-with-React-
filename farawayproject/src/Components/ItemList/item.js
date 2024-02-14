// Importing useState hook from React
import { useState } from "react"; 

// Component to display the list of items
export const ItemList = ({ item, setItemsArr }) => { // Declaring a functional component called ItemList, which receives 'item' and 'setItemsArr' as props
    return(
        <div style={{ // Styling for the item list container
            display: "flex",
            flexWrap: "wrap",
            width: "50%",
            margin: "0px auto"
        }}>
        {
          // Mapping over each item in the array
            item?.map((singleItem, indx) => ( 
              <Item 
                itemList={item} // Passing 'item' array as prop to each Item component
                setItemsArr={setItemsArr} // Passing 'setItemsArr' function as prop to each Item component
                samad={singleItem}
                number={indx}
              />
                
            ))
    
    

        }
        </div>
    )
}

// Component for an individual item
const Item = ({ samad, number, setItemsArr, itemList}) => { 
  // Function to handle checkbox state changes
  const packedHandler = (packingValue, itemNumber) =>{ // Defining a function called 'packedHandler' to handle checkbox state changes
    const merayItems = [...itemList] // Copying the items array
    merayItems[number].packed = !packingValue // Toggling the 'packed' property of the item
    setItemsArr(merayItems) // Updating the items array with the modified copy
  }
  return (
    //  Styling for the item container
    <div style={{
       display: "flex",
       gap: "10px"
    }}>
      <input type="checkbox" checked={samad.packed} onChange={() => packedHandler(samad.packed, number)} /> {/* Checkbox for packing */}
      <p style={{ // Styling for the item name
        color: "#dbc69b",
        textDecoration: samad.packed ? "line-through" : "none" // Strikethrough if item is packed
      }}>
      {
        `${samad.quantity} ${samad.name}`
      }
      </p>
      <p>X</p> {/* Placeholder for delete button */}
    </div>
  )
}