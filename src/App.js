import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import axios from 'axios'
import CountriesToShow from './components/CountriesToShow'

const App=()=>{
 const [countries,setCountries]=useState([])
 const [filtername,setFilterName]=useState('')

useEffect(()=>{
   axios.get('https://api.covid19api.com/summary').then(res=>{
      setCountries(res.data.Countries)
    })
  },[])

const handleFilter=(event)=>{
  setFilterName(event.target.value)
}
console.log(countries.length)
  return(
    <div>
     <Filter filtername={filtername} setFilterName={handleFilter} />
      <CountriesToShow filtername={filtername} countries={countries}/>
    </div>
  )
}

export default App;
