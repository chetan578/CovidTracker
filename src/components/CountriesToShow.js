import React, {useState} from 'react'
import '../styles.css'
import axios from 'axios'

const CountriesToShow=({countries,filtername})=>{
    
    const [country,setCountry]=useState([])

    const showCountries=()=>{
        const s = countries.filter(x=>x.Country.toLowerCase().includes(filtername.toLowerCase()))
        console.log(s.length)
        return s.map(x=>
            <div key={x.Country} className='container'>
            <p>{x.Country}</p>
            <p>Total Cases : {x.TotalConfirmed} </p>
            <p>Total Deaths: {x.TotalDeaths} </p>
          <p>TotalRecovered: {x.TotalRecovered} </p>
          <p>New Cases : {x.NewConfirmed} </p>
          <p>New Deaths {x.NewDeaths} </p>
        </div>
            )
      }
      const showSelectedCountries=()=>{
        console.log('hello')
        const hello=async()=>{
        const response = await axios.get('https://restcountries.eu/rest/v2/all')
            setCountry(response.data)
        }
        hello()
      //  const s= countries.filter(x=>x.Country.toLowerCase().includes(filtername.toLowerCase()))
        const t= country.filter(x=>x.name.includes.toLowerCase().includes(filtername.toLowerCase()))
        // return s.map(x=>
        //             <div key={x.Country} className='container'>
        //             <p>{x.Country}</p>
        //             <p>Total Cases : {x.TotalConfirmed} </p>
        //             <p>Total Deaths: {x.TotalDeaths} </p>
        //           <p>TotalRecovered: {x.TotalRecovered} </p>
        //           <p>New Cases : {x.NewConfirmed} </p>
        //           <p>New Deaths {x.NewDeaths} </p>
        //           </div>
        return t.map(x=>
        <img src={x.flag} height='120px' width='120px' alt='new country'/>)  
      }

      return (
          <div >
              {countries.length>10 ?showCountries():showSelectedCountries()}
          </div>
      )
}

export default CountriesToShow