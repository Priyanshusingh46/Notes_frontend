import React from 'react'
import update from "./Images/update.png";
import Delete from "./Images/delete.png"
import css from "./style.css"
function Card(props) {
  return (
    <div className='NotesDiv'>
        {/*tittle*/}
        <p id="tittle">{props.data.tittle}</p>
        {/*Para*/}
        <div className='paradiv'>
        <p id="para">{props.data.description}</p>
        </div>
          
        <div className='deleteupdatediv'>
            <img id="logoimage" src={update} alt="error"/>
            <img id="logoimage" src={Delete} alt="error"/>
        </div>
    </div>
  )
}

export default Card