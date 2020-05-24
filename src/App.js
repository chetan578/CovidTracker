import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import axios from 'axios'
import CountriesToShow from './components/CountriesToShow'
import ShowSingleCountry from './components/ShowSingleCountry'
import States from './components/States'
import TestingData from './components/TestingData'
import News from './components/News'
import Helpline from './components//Helpline'
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'


const FilterToHide=({filtername,handleFilter})=>{
  return(
  <Nav>
  <Nav.Link  className="mr-sm-2">
  <Filter filtername={filtername} setFilterName={handleFilter} />
  </Nav.Link>
</Nav>
  )
}

const App=()=>{
 const [countries,setCountries]=useState([])
 const [filtername,setFilterName]=useState('')
 const [visibility,setVisibility]=useState(true)

useEffect(()=>{
   axios.get('https://api.covid19api.com/summary').then(res=>{
      setCountries(res.data.Countries)
    })
  },[])

const handleFilter=(event)=>{
  setFilterName(event.target.value)
}
console.log(countries.length)
const padding = {
  paddingRight: 5
}
  return(
    <div className='container'> 
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Router>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  sticky="top" >
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as="span">
        <Link style={padding} to="/">HOME</Link>
      </Nav.Link>
      <Nav.Link  as="span">
        <Link style={padding} to="/india/states">INDIA UPDATES </Link>
      </Nav.Link>
      <Nav.Link  as="span">
        <Link style={padding} to="/india/testing">TESTING UPDATES</Link>
      </Nav.Link>
      <Nav.Link  as="span">
        <Link style={padding} to="/india/helpline">HELPLINE</Link>
      </Nav.Link>
      </Nav>
      {visibility===true?<FilterToHide filtername={filtername} handleFilter={handleFilter}/>:''}
  </Navbar.Collapse>
</Navbar>


        <Switch>
          <Route path='/news'>
            <News setVisibility={setVisibility}/>
          </Route>
          <Route path='/india/states'>
            <States setVisibility={setVisibility} />
          </Route>
          <Route path='/india/testing'>
            <TestingData setVisibility={setVisibility} />
          </Route>
          <Route path='/india/helpline'>
            <Helpline setVisibility={setVisibility}/>
            </Route>
          <Route path='/countries/:id'>
            <ShowSingleCountry setVisibility={setVisibility}/>
          </Route>
        <Route path='/'>
      <CountriesToShow setVisibility={setVisibility} filtername={filtername} countries={countries}/>
        </Route>
        </Switch>
      </Router>
     
    </div>
  )
}

export default App;
