import React, { useState } from 'react'
import "../App.css"


function Addcontact({addcontact}) {
    const [contactdata,setcontactdata]=useState({name:"",email:""})
    const [errorMessage, setErrorMessage] = useState('');
    const handleinput=(e)=>{
        e.preventDefault();
        setcontactdata({...contactdata,[e.target.name]:e.target.value})
        // console.log(contactdata)??
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        if(contactdata.name===""|| contactdata.email===""){
            setErrorMessage("All fields are mandatory")
            return
        }
        else{
            setErrorMessage('');}

        addcontact(contactdata)
        // console.log(contactdata)
        setcontactdata({name:"",email:""})
        
    }
    return (
    <div className='formheader'>
        {/* <br/> */}
       <div className='addcontact'>Add contacts</div><br/>
       <form>
            <label>Name:</label><br/>
            <input type='text' placeholder='Enter Name' name='name' value={contactdata.name} onChange={handleinput}/><br/>
            <label>Email:</label><br/>
            <input type='email' placeholder='Enter Email' name='email' value={contactdata.email} onChange={handleinput}/><br/><br/>
            <button className='btn' onClick={handlesubmit}>Add Contact</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
       </form>
    </div>
  )
}

export default Addcontact
