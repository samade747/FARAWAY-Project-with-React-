import { useState } from "react"

export const Form = () => {


const [quantity, setQuantity] = useState(1)


return (
    <div>
        <p>  What do you need for your trip? </p>
    
    <label for="cars">Choose Quantity and Name:</label> 

    <select onChange={(e) => setQuantity(e.target.value)} name="quantity" id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
    </select>
    


    </div>
)

}