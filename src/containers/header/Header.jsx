import React, { useState } from "react";
import "./header.css";
import {LineChart} from "../../components"
import {BarChart} from "../../components"

const Header = ({placeholder}) => {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try{
    let res = await fetch("http://127.0.0.1:8000/rest/updatestr/", {
      method: "PUT",
      body: JSON.stringify({
        "search": search,
      }
      )
    });



    if(res.status === 200){
      setSearch("");
      setMessage("Successfully Submitted")
    } else{
      setMessage("Some Error Occurred");
    }
  } catch (err){
    console.log(err);
  }
  // Validation
  console.log(search);
  };
  return (
    <div className="header section" > 
    <div classname = "header-content__new">
      <form className = "header-content__input">
        <input type = "text" placeholder={placeholder} ></input>
        <button type="submit">Search</button>

      </form>
      <h1 className = "GraphHeader">
        Graphs
      </h1>

      <div classname = "Charts">  
        <LineChart/>
        <BarChart/>
      </div>

    </div>
    </div>
  )
}

export default Header
/*
function Header({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (

    <div className="gp3__header section" > 
    <div classname = "gp3__header-content__new">
      <div className = "gp3__header-content__input">
        <input type = "text" placeholder={placeholder} value = {wordEntered} onChange = {handleFilter}></input>
        <button type="button">Search</button>

      </div>
      {filteredData.length != 0 && (
      <div className = "dataResult">
        {data.map((value,key) => {
          return  <a className = "dataItem" href = {value.link}>
            <p>
              {value.title}
            </p>
            </a>
        })}
      </div>
      )}
    </div>
    </div>
  );
}
/*
let datecnt=0;
let loccnt=0;
var locdat1=[];
var monthdat2=[];
var layout = {
  title: {
    text:data,
    font: {
      family: 'Courier New, monospace',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
  xaxis: {
    title: {
      if(loccnt>datecnt)
      {
        text: locdat1,
      }
      else{
        text: monthdat2,
      }
      text: 'x Axis',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'occurences',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

Plotly.newPlot('myDiv', data, layout);
 */



