import { useState } from "react"; // Importing the useState hook from React

export const ItemList = ({ item, setItemsArr }) => { // Declaring a functional component called ItemList, which receives 'item' and 'setItemsArr' as props

    return(
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            width: "50%",
            margin: "0px auto"
        }}>
        {
            item?.map((singleItem, indx) => (
              <Item 
                ItemList={item}
                setItemsArr={setItemsArr}



              />
                
            ))
        }




        </div>
    )
}