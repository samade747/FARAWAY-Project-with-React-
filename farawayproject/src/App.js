// Importing components and useState hook from React
import './App.css';
import { Logo } from './Components/Logo/Logo';
import { Form } from './Components/Form/Form';
import { PackagingList } from './Components/PackagingList/PackagingList';
import { useState } from 'react';

// Main App component
function App() { 
  // State for items array
  const [itemsArr, setItemsArr] = useState([
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
    }
  ]);

  // Rendering components: Logo, Form, PackagingList
  return (
    <>
      <Logo />  {/* Displaying the logo */}
      <Form setItemsArr={setItemsArr} item={itemsArr} /> {/* Displaying the form */}
      <PackagingList item={itemsArr} setItemsArr={setItemsArr} /> {/* Displaying the packaging list */}
    </>
  );
}

export default App; // Exporting the App component
