import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import css from "./style.css";

function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    try {
      let result = await axios.get("https://notes2-yvan.onrender.com/getnote");
      console.log(result);
      setData(result.data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const navigate = useNavigate();
  const changepage = () => {
    navigate("/addnote");
  };

  return (
    <div className="App">
      <div className="headline">
        <p id="paraline">Notes</p>
        <p id="paraline1" onClick={changepage}>
          + Add Note
        </p>
      </div>
      {data && (
        <div className="cardDiv">
          {data.map((item) => {
            console.log("map", item.price);
            return <Card data={item} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
