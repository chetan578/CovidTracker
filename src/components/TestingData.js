import React, { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
import axios from 'axios'

const TestingData=()=>{
let [testingData,settestingData]=useState([])



useEffect(()=>{
axios.get('https://api.covid19india.org/data.json').then(response=>{
    settestingData(response.data.tested)
})
},[])

testingData = testingData.reverse()
return(
    <div>
        <h1>Testing Data</h1>
         <Table striped bordered hover >
            <tbody>
            <tr>
        <th>Date</th>
         <th>Tests Per Million</th>
         <th>Total Samples Tested</th>
       </tr>
            {testingData.map((x,id)=>
                   <tr key={x.updatetimestamp}>
                    <td>{x.updatetimestamp.slice(0,11)}</td>
                    <td>{x.testspermillion}</td>
                    <td>{x.totalsamplestested}</td>
                   </tr>
            )}
                </tbody>
                </Table>  
    </div>
)

}

export default TestingData