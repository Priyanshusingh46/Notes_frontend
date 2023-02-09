import React from 'react'
import { Link } from "react-router-dom";
import update from "./Images/update.png";
import Delete from "./Images/delete.png"
import axios from "axios"
import css from "./style.css"
function Card(props) {
  const deleteItem= async(id)=>{
    const result = await axios.delete(`https://notes2-yvan.onrender.com/note/${id}`)
    console.log(result);
    if(result){
      alert("record Deleted");
    }
    else{
      console.log("no record");
    }
  }
  return (
    <div className='NotesDiv'>
        {/*tittle*/}
        <p id="tittle">{props.data.tittle}</p>
        {/*Para*/}
        <div className='paradiv'>
        <p id="para">{props.data.description}</p>
        </div>
          
        <div className='deleteupdatediv'>
        <Link to={"/updatenote/"+props.data._id}><img id="logoimage" src={update} alt="error"/></Link>
        <img id="logoimage" src={Delete} alt="error" onClick={(e)=>deleteItem(props.data._id,e)}/>
        </div>
    </div>
  )
}

export default Card