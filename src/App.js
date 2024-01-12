import { useEffect, useState } from 'react';
import './App.css';
import Addcontact from './components/Addcontact';
import Contaclist from './components/Contaclist';
import Header from './components/header';
import uuid4 from 'uuid4';
function App() {

    const [contact,setlist]=useState(()=>{
      return JSON.parse(localStorage.getItem("contact"))
    })
    
    useEffect(()=>{
      localStorage.setItem("contact",JSON.stringify(contact))
    },[contact])
    const removecontact=(id)=>{
    const updatedlist= contact.filter((val)=>{return val.id!==id})
    setlist(updatedlist)
  }                            
  function addcontact(data){
    // console.log(data);
    setlist([...contact,{id:uuid4(),data}])
  }
  return (
    <div className="App">
      <Header/><br/>
      <Addcontact addcontact={addcontact}/>
      <Contaclist contact={contact} removecontact={removecontact}/>
    </div>
  );
}

export default App;
