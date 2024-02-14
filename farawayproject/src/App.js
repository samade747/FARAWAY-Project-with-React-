import './App.css';
import { Logo } from './Components/Logo/Logo';
import { Form } from './Components/Form/Form';
import { PackagingList } from './Components/PackagingList/PackagingList';
import { useState } from 'react';


function App() {
 
  const [itemsArr, setItemsArr] = useState(
    [
      {
        quantity: 4,
        name: "socks",
        packed: false        
      },
      {
        quantity: 4,
        name: "water bottles",
        packed: false        
      },
      {
        quantity: 4,
        name: "suits",
        packed: false        
      },
      {
        quantity: 4,
        name: "charger",
        packed: false        
      },

    ]
  )

  return (
    <>
    <Logo />
    <Form setItemsArr={setItemsArr} item={itemsArr} />
    <PackagingList item={itemsArr} setItemArr={setItemsArr} />
    </>
    )
}

export default App;
