import React from 'react'

const Filter=({filtername,setFilterName})=>{

return (
    <div>
      Filter: <input type='text'
      value={filtername}
      name='filter'
      onChange={setFilterName}/>  
    </div>
)
}

export default Filter
