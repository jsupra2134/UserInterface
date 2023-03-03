 import React /*{useState}*/ from 'react'
 import Header from './containers/header/Header';
 import NewIncident from './components/NewIncident/NewIncident';
 import Graphs from './containers/graphs/Graphs';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {UserData} from './containers/graphs/graphdata';
 import './App.css';
 import IncidentData from "./Data.json";



 const App = () => {
   return (
    <Router>
      <nav className = "gradient__bg">
       <div className="navbar">
        <div className="navbar-links">

          <div className="navbar-links_container">
            <a href="/Header">Search</a>
            <a href="/NewIncident">Enter New Incident</a>
            

          </div>
        </div>
        </div>


      </nav>
      <Routes>
        <Route path="header" element={<Header placeholder="Search Incident" data = {IncidentData}/>}></Route>
        <Route path="NewIncident" element={<NewIncident/>}></Route>
        <Route path="Graphs" element={<Graphs chartData={UserData}/>}></Route>
      </Routes>
    </Router>
    
   )  
 }
 
 export default App