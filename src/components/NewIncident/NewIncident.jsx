import React , {useState}from 'react'

import './newincident.css'



function NewIncident () {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [report, setreport] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try{
    let res = await fetch("https://webhook.site/132c6952-9479-4b37-b59e-0f47b3dc9974", {
      method: "POST",
      body: JSON.stringify({
        "name": name,
        "location": location,
        "date": date,
        "report": report,

      }
      )
    });



    if(res.status === 200){
      setName("");
      setLocation("");
      setDate("");
      setreport("");
      setMessage("Successfully Submitted")
    } else{
      setMessage("Some Error Occurred");
    }
  } catch (err){
    console.log(err);
  }
  // Validation
  console.log(name);
  console.log(location);
  console.log(date);
  console.log(report);
  };
  return (

     <div className = "EnterIncidentcontent" >
        <form className = "EnterNewIncident2" onSubmit = {handleSubmit}>
          <h1>Enter New Incident Information Here</h1>
          <div className = "EnterIncidentName">
            <input type="text" value = {name} placeholder="Incident Name" onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div className="EnterIncidentLocation">
            <input type="text" value = {location} placeholder="Incident Location" onChange={(e) => setLocation(e.target.value)}></input>
          </div>
          <div className = "EnterIncidentdate">
            <input type="date" value = {date} onChange={(e) => setDate(e.target.value)}></input>
          </div>
          <div className="EnterIncidentreport">
            <input type="text" value = {report} placeholder="Incident Description" onChange={(e) => setreport(e.target.value)}></input>
          </div>

          <div className="message">{message ? <p>{message}</p> : null}</div>
          <button type="submit" placeholder="Submit" >Submit</button>

        </form>

     </div>
  )
  }


export default NewIncident