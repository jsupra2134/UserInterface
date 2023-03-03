import React, {useState} from 'react'
import "./graphs.css"
import {UserData} from "./graphdata.js" // Importing UserData from the data in the graphs

//import  {Chart as ChartJS} from 'chart.js/auto '

//let superInput = UserData;

const Graphs = (chartData) => { // const graph class made from rafce
/*  const [userData, setuserData] = useState({
    labels: superInput.map((data) => data.year), // Creates a new array which only has the year labels: BASICALLY THIS IS THE LABEL
    datasets:[{
      label: "Users Gained",
      data: superInput.map((data) => data.userGain) // The object inside of the map data extracts what values are in the dataset: BASICALLY THIS IS TEH VALUE
    }]

  });*/
  return (
    <div className ="Graphs">
        <div className = "Graphs1">
            <h1>
                Graphs
            </h1>
            
            </div>
            </div>
  )
}

export default Graphs