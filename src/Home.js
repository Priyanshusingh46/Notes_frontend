import React,{useState,useEffect} from 'react'
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import css from"./style.css"

function Home() {
  const[data,setData]=useState([]);
  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("http://localhost:5000/getnote");
    setData(result.data);
    console.log(data);
    }
    catch(e){
      console.log(e);
    }
  }

  const navigate = useNavigate();
  const changepage = ()=>{
    navigate("/addnote")
  }

  return (
    <div className="App">
      <div className='headline'>
      <p id="paraline">Notes</p>
      <p id="paraline1" onClick={changepage}>+ Add Note</p>
      </div>
      <div className='cardDiv'>
      {
          data.map((data)=>{
            console.log("map",data.price);
           return (<Card data={data}/>)
           
          })
        }
      </div>
    </div>
  )
}

export default Home