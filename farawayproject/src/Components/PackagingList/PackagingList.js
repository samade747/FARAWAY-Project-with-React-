// Importing necessary icons from MUI
import { BottomButtons } from "../BottomButtons"; 
import { ItemList } from "../ItemList/item";

// Component for the packaging list
export const PackagingList = ({ item, setItemsArr }) => {

    return (
        <div style={{ // Styling for the packaging list container
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "330px",
            alignItems: "center",
            backgroundColor: "#4c3423"
        }}>
            <ItemList item={item} setItemsArr={setItemsArr}/> {/* Displaying the item list */}
            <BottomButtons /> {/* Component for bottom buttons */}
        </div>
    )
}
