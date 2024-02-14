import { useState } from "react"; 

export const ItemList = ({ item, setItemArr }) => { // Declaring a functional component called ItemList, which receives 'item' and 'setItemsArr' as props
    return(
        <div style={{ // Returning JSX: a div element with inline styling
            display: "flex",
            flexWrap: "wrap",
            width: "50%",
            margin: "0px auto"
        }}>
        {
            item?.map((singleItem, indx) => ( // Mapping over the 'item' array to render each individual item
              <Item 
                itemList={item} // Passing 'item' array as prop to each Item component
                setItemsArr={setItemArr} // Passing 'setItemsArr' function as prop to each Item component
                samad={singleItem}
                number={indx}
              />
                
            ))
        }
        {

        }
        </div>
    )
}

const Item = ({ samad, number, setItemsArr, itemList}) => { // Declaring a functional component called Item, which receives 'haroon', 'number', 'setItemsArr', and 'itemList' as props
  const packedHandler = (packingValue, itemNumber) =>{ // Defining a function called 'packedHandler' to handle checkbox state changes
    const merayItems = [...itemList] // creatin a copy of the 'itemList' array
    merayItems[number].packed = !packingValue // Toggling the 'packed' property of the item at the specified index
    setItemsArr(merayItems) // Updating the state of the items array with the modified copy
  }
  return (
    <div style={{
       display: "flex",
       gap: "10px"
    }}>
      <input type="checkbox" checked={samad.packed} onChange={() => packedHandler(samad.packed, number)} />
      <p style={{
        color: "#dbc69b",
        textDecoration: samad.packed ? "line-through" : "none"
      }}>
      {
        `${samad.quantity} ${samad.name}`
      }
      </p>
      <p>X</p>
    </div>
  )
}