// Importing necessary icons from MU
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LuggageIcon from '@mui/icons-material/Luggage';

// Component for the logo
export const Logo = () => {      
    return (
        // Styling for the logo container
        <div style={{ 
           width: "100%",
           backgroundColor: "#f19720",
           display: "flex",
           justifyContent: "center",
           padding: "10px 0px",
           color: "#6f5589",
           fontWeight: '800',
           fontSize: "32px"


            

        }}>
        <div><AccountTreeIcon /></div> // Icon
        
        // Text
            FAR AWAY 

            <div><LuggageIcon /></div> // Icon

        </div>
    )
}