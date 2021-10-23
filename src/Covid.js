import React from 'react'
import { useState, useEffect } from 'react'; 
import './Covid.css'
 function Covid() {
// fetching code start
const [data, setdata] = useState([])

const getCovidData = async () =>{
  try{
     
   const Response = await fetch("https://data.covid19india.org/data.json");

  const actualdata = await Response.json();
  //console.log(actualdata.statewise[0]);

  setdata(actualdata.statewise[0])
  
  }catch (err){
     console.log(err);
  }

}
 useEffect(() => {
 getCovidData();
 //first refresh only one time run []
 }, [])
//fetching code End
   return (
      <>
      <div className='text-center m-4 bg-light p-2'>
      <h4 className="Live card-title">🔴 LIVE</h4>
      <h2 className='card-title'>COVID-19 CORONAVIRUS TRACKER</h2>
      </div>
      <div className="card-group m-4">
         
         <div className="card text-white bg-secondary mb-5 text-center" style={{}}>
  <h1 className="card-header ">Country</h1>
  <div className="card-body">
    <h2 className="card-title">India</h2>

  </div>
</div>

<div className="card text-white bg-primary mb-5 text-center" style={{}}>
  <h1 className="card-header ">Recovered</h1>
  <div className="card-body">
    <h5 className="card-title">Total</h5>
    <p className="card-title">{data.recovered}</p>
  </div>
</div>

<div className="card text-white bg-success mb-5 text-center" style={{}}>
  <h1 className="card-header ">Confirmed</h1>
  <div className="card-body">
    <h5 className="card-title">Total</h5>
    <p className="card-title">{data.confirmed}</p>
  </div>
</div>

<div className="card text-white bg-danger mb-5 text-center" style={{}}>
  <h1 className="card-header ">Deaths</h1>
  <div className="card-body">
  <h5 className="card-title">Total</h5>
  <p className="card-title">{data.deaths}</p>
  </div>
</div>

<div className="card text-white bg-warning mb-5 text-center" style={{}}>
  <h1 className="card-header ">Active</h1>
  <div className="card-body">
  <h5 className="card-title">Total</h5>
  <p className="card-title">{data.active}</p>

  </div>
</div>

<div className="card text-white bg-info mb-5 text-center" style={{}}>
  <h1 className="card-header ">Updated</h1>
  <div className="card-body">
  <h5 className="card-title">Total</h5>
  <p className="card-title">{data.lastupdatedtime}</p>
  </div>
</div>


      </div>
      </>
   )
}

export default Covid;