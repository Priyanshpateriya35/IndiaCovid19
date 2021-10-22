import React from 'react'
import {useEffect, useState} from 'react'
import './Covid.css'

const Covid = () => {
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

  return (
  <>
  <section className="mainbody">
    
      <h1 className="Live">🔴 LIVE</h1>
      <h2 >COVID-19 CORONAVIRUS TRACKER</h2>
        <ul>
          <li className="card">
             <div className="card__main">
                <div className="card__inner">
                  <p className="card__name"><span> OUR </span> COUNTRY</p>
                  <p className="card__total card__small">INDIA</p>

                </div>

             </div>
          </li>

          <li className="card">
             <div className="card__main">
                <div className="card__inner">
                  <p className="card__name"><span> TOTAL </span> RECOVERED</p>
                  <p className="card__total">{data.recovered}</p>

                </div>

             </div>
          </li>

          <li className="card">
             <div className="card__main">
                <div className="card__inner">
                  <p className="card__name"><span> TOTAL </span> CONFIRMED</p>
                  <p className="card__total">{data.confirmed}</p>

                </div>

             </div>
          </li>

          <li className="card">
             <div className="card__main">
                <div className="card__inner">
                  <p className="card__name"><span> TOTAL </span> DEATHS</p>
                  <p className="card__total">{data.deaths}</p>

                </div>

             </div>
          </li>

          <li className="card">
             <div className="card__main">
                <div className="card__inner">
                  <p className="card__name"><span> TOTAL </span> ACTIVE</p>
                  <p className="card__total">{data.active}</p>

                </div>

             </div>
          </li>

          <li className="card">
             <div className="card__main">
                <div className="card__inner">
                  <p className="card__name"><span> TOTAL </span> UPDATED</p>
                  <p className="card__total">{data.lastupdatedtime}</p>

                </div>

             </div>
          </li>
        </ul>

 
    </section>
  </>
  );
}

export default Covid;
