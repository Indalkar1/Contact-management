import React from 'react'
import "../App.css"
import DeleteIcon from '@mui/icons-material/Delete';

function Contaclist(props) {

  const {contact,removecontact}=props
  const contactlist=contact.map((data)=>{
    console.log(data)
    return(
      <div className='contacts'>
    <>
      <div style={{ marginLeft: '5px' }}>{data.data.name}</div>
      <div>{data.data.email}</div>
      <span onClick={()=>removecontact(data.id)}><DeleteIcon/></span>
    </>
</div>
    )
  })
  return (
   <>
   <div className='ContactHeader'>ContactList</div>
    <div >
      {contactlist}
    </div>
   </>
  )
}

export default Contaclist
