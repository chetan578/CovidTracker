import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams } from 'react-router-dom'
import {Table} from 'react-bootstrap'
import {LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Line} from 'recharts'


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
    useEffect(()=>{
setVisibility(false)
    })
    
    const id=useParams().id
    useEffect(()=>{
        axios.get(`https://api.covid19api.com/country/${id}`).then(response=>{
            setCountry(response.data)
            }
        )
    },[id])

    return(
        <div>
             <h1>{id}</h1>          
  <LineChart width={1000} height={700} data={country} >
    <Line type="monotone" dataKey="Confirmed" stroke="#8884d8" />
    <CartesianGrid  strokeDasharray="3 3"/>
    <XAxis dataKey='Date' >
    </XAxis>
    <YAxis >
    </YAxis>
    <Tooltip />
  </LineChart>


            <Table striped bordered hover style={{position:'relative'}}>
            <tbody>
            <tr>
        <th>Date</th>
         <th>Confirmed Cases</th>
         <th>Confirmed Deaths</th>
         <th>Confirmed Recovered</th>
       </tr>
            {country.reverse().map((selectedCountry,id)=>
                    <SelectedCountry key= {id} selectedCountry={selectedCountry}/>
            )}
                </tbody>
                </Table>  
        </div>
    )
}
export default ShowSingleCountry