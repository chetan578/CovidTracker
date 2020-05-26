import {useState} from 'react'


export const useFilter=()=>{
    const [filtername,setFilterName]=useState('')
    const [visibility,setVisibility]=useState(false)
    const handleFilter=(event)=>{
setFilterName(event.target.value)
    }
    const showFilter=()=>{
        setVisibility(false)
    }
    const dontshowfilter=()=>{
        setVisibility(true)
    }
return {filtername,visibility,handleFilter,showFilter,dontshowfilter}
}