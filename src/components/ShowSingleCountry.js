import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams } from 'react-router-dom'
import {Table} from 'react-bootstrap'

const SelectedCountry=({selectedCountry})=>{
    return(
        <tr>
    <td>{selectedCountry.Date.substring(0,10)} </td>
    <td>{selectedCountry.Confirmed} </td>
    <td>{selectedCountry.Deaths} </td>
    <td>{selectedCountry.Recovered} </td>
       </tr>
    )
}

const ShowSingleCountry=({setVisibility})=>{
    
    let [country,setCountry]=useState([])
    setVisibility(false)
    const id=useParams().id
    useEffect(()=>{
        axios.get(`https://api.covid19api.com/country/${id}`).then(response=>{
            setCountry(response.data)
            }
        )
    },[id])
    country=country.reverse()

    return(
        <div>
             <h1>{id}</h1>
            <Table striped bordered hover >
            <tbody>
            <tr>
        <th>Date</th>
         <th>Confirmed Cases</th>
         <th>Confirmed Deaths</th>
         <th>Confirmed Recovered</th>
       </tr>
            {country.slice(0,50).map((selectedCountry,id)=>
                    <SelectedCountry key= {id} selectedCountry={selectedCountry}/>
            )}
                </tbody>
                </Table>  
        </div>
    )
}
export default ShowSingleCountry