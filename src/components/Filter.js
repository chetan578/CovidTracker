import React from 'react'
import '../styles.css'
import {InputGroup,FormControl} from 'react-bootstrap'

const Filter=({setFilterName})=>{

return (
  <InputGroup className="mb-1"  onChange={setFilterName} style={{width:'18rem'}}>
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Filter</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
)
}

export default Filter
