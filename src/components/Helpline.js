import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {Table,Popover,OverlayTrigger} from 'react-bootstrap'


const PopOver=({Id,helpline})=>{
const result=helpline.find(n=>n.recordid===Id)
    const popover =(
        <Popover id="popover-basic">
          <Popover.Title as="h3">Description</Popover.Title>
          <Popover.Content>
            {result.descriptionandorserviceprovided}
          </Popover.Content>
        </Popover>
      )

return(
    <OverlayTrigger trigger={['hover', 'focus']} placement='top' overlay={popover}>
                     <td>{result.category}</td>
                     </OverlayTrigger> 
)

}

const Helpline=({setVisibility})=>{
let [helpline,setHelpline]=useState([])
const [filter,setFilter]=useState('')
useEffect(()=>{
  setVisibility(false)
})


useEffect(()=>{
axios.get('https://api.covid19india.org/resources/resources.json').then(response=>{
    setHelpline(response.data.resources)
})

},[])

const handleFilter=(event)=>{
setFilter(event.target.value)
}
helpline=helpline.filter(x=>x.state.toLowerCase().includes(filter.toLowerCase()))

return(
    <div>
        <h1>Helpline</h1>
        <h4 style={{position:'relative'}}>Click on category for more details</h4>
       <h3> Filter By State Name:</h3>
        <input style={{position:'relative'}} type='text' value={filter} 
        onChange={handleFilter}/>
         <Table striped bordered hover >
            <tbody>
            <tr>
        <th>Category</th>
         <th>City</th>
         <th>State</th>
         <th>Name of the Organisation</th>
         <th>Contact Details</th>
       </tr>
            {helpline.slice(0,100).map((x,id)=>
                   <tr key={id}>
                    <PopOver Id={x.recordid} helpline={helpline}/>   
                    <td>{x.city}</td>
                    <td>{x.state}</td>
                    <td>{x.nameoftheorganisation}</td>
            <td>{x.phonenumber!==""?x.phonenumber: <a href={x.contact}>{x.contact}</a>}</td>
                   </tr>
            )}
                </tbody>
                </Table>  
    </div>
)
}

export default Helpline