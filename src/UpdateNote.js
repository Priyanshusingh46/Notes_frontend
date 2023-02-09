import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useNavigate,useParams } from 'react-router-dom';

function UpdateNote() {
    const navigate = useNavigate();
  const[tittle ,setTittle]=useState("");
  const[description ,setDescription]=useState("");
  const params = useParams();

  useEffect(() => {
    getProductDetails();
  }, [])

  const getProductDetails = async()=>{
    console.log(params.id)
    let result = await axios.get(`https://notes2-yvan.onrender.com/${params.id}`)
    console.log(result.data);
    if(result){
        setTittle(result.data.tittle);
        setDescription(result.data.description);
    }
  }


  const Updatenote = async(e)=>{
    e.preventDefault();
     
        try{
        let result= await axios.put(`https://notes2-yvan.onrender.com/updatenote/${params.id}`,{
          tittle,
          description,
        })
        console.log(result);
        navigate("/");

      }
      catch(e){
        console.log(e.message);
      }
  }
  return (
    <div>
    <h1 style={{ textAlign: "center" }}>Update your Note</h1>
    <div>
      <form style={{textAlign:"center"}}>
        <label style={{fontSize:"28px"}}>Tittle:</label>
         <br></br>
          <input style={{width:"25%",height:"4vh",marginBottom:"2%",fontSize:"20px"}}type="text" 
          onChange={(e)=>setTittle(e.target.value)}
          name="name" value={tittle} required={true}/>
        <br></br>
        <label style={{fontSize:"28px"}}>
          Description:
          </label>
          <br></br>
          <input style={{width:"25%",height:"4vh",marginBottom:"2%",fontSize:"20px"}} type="text"  
           onChange={(e)=>setDescription(e.target.value)}
           name="description" value={description} required={true}/>
          <br></br>
          <div style={{background: "cornflowerblue", marginLeft: "46%",marginRight: "45%"}} onClick={(e)=>Updatenote(e)}>
            <p style={{fontSize:"30px",color:"white"}}>Update</p>
          </div>
      </form>
    </div>
  </div>
  )
}

export default UpdateNote