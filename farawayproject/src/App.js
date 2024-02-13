import './App.css';
import { Logo } from './Components/Logo/Logo';
import { Form } from './Components/Form/Form';
// import { PackagingList } from './Components/PackagingList/PackagingList';
import { useState } from 'react';


function App() {
 
  const [itemsArr, setItemArr] = useState(
    
  )




  return (
    <>
    <Logo />
    <Form setItemArr={set} />
    </>
    


      );
}

export default App;
