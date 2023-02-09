import React,{useState} from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
function Form() {
  const navigate = useNavigate();
  const[tittle,setTittle]=useState("");
  const[description,setDescription] = useState("");
  const HandleSubmit =async(e)=>{
      e.preventDefault();
      console.log(tittle);
      let user = await axios.post("https://notes2-yvan.onrender.com/addnote",
      {
          tittle,
          description
      }
      )
      navigate("/");
      console.log(user);
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Please add your Note</h1>
      <div>
        <form style={{textAlign:"center"}}>
          <label style={{fontSize:"28px"}}>Tittle:</label>
           <br></br>
            <input style={{width:"25%",height:"4vh",marginBottom:"2%",fontSize:"20px"}}type="text" 
            name="name" onChange={(e)=>setTittle(e.target.value)} required={true}/>
          <br></br>
          <label style={{fontSize:"28px"}}>
            Description:
            </label>
            <br></br>
            <input style={{width:"25%",height:"4vh",marginBottom:"2%",fontSize:"20px"}} type="text"
             name="description" onChange={(e)=>setDescription(e.target.value)} required={true}/>
            <br></br>
            <div style={{background: "cornflowerblue", marginLeft: "46%",marginRight: "45%"}} onClick={(e)=>{HandleSubmit(e)}}>
              <p style={{fontSize:"30px",color:"white"}}>Submit</p>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
