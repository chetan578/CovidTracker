import React, { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
import axios from 'axios'

const States=({setVisibility})=>{
const [stateData,setStateData]=useState([])
useEffect(()=>{
    setVisibility(false)
})

useEffect(()=>{
axios.get('https://api.covid19india.org/data.json').then(response=>{
    setStateData(response.data.statewise)
})
},[])

return(
    <div>
        <h1>State Wise Data</h1>
         <Table striped bordered hover >
            <tbody>
            <tr>
        <th>State</th>
         <th>Confirmed Cases</th>
         <th>Confirmed Deaths</th>
         <th>Confirmed Recovered</th>
       </tr>
            {stateData.map((x,id)=>
                   <tr key={x.state}>
                    <td>{x.state}</td>
                    <td>{x.confirmed}</td>
                    <td>{x.deaths}</td>
                    <td>{x.recovered}</td>
                   </tr>
            )}
                </tbody>
                </Table>  
    </div>
)

}

export default States