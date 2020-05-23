import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import axios from 'axios'
import CountriesToShow from './components/CountriesToShow'
import ShowSingleCountry from './components/ShowSingleCountry'
import States from './components/States'
import TestingData from './components/TestingData'
import Donation from './components/Donation'
import News from './components/News'
import Helpline from './components//Helpline'
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom'
import {Navbar,Nav,Container,Jumbotron,Tab,Row,Col,Button} from 'react-bootstrap'


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

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  fixed="top" >
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
     <FilterToHide filtername={filtername} handleFilter={handleFilter}/>
  </Navbar.Collapse>
</Navbar>


        <Switch>
          <Route path='/news'>
            <News />
          </Route>
          <Route path='/india/states'>
            <States  />
          </Route>
          <Route path='/india/testing'>
            <TestingData />
          </Route>
          <Route path='/india/helpline'>
            <Helpline />
            </Route>
          <Route path='/countries/:id'>
            <ShowSingleCountry />
          </Route>
        <Route path='/'>
        <Jumbotron >
  <Container>
    <h1>Covid Tracker</h1>
    <p style={{color:'black'}}>
    Your one stop destination for tracking the deadly corona virus updates across the globe
    </p>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Covid</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Donation</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        Stay aware of the latest information on the COVID-19 outbreak,
       available on the WHO website and through your national and local public health authority. 
       Most countries around the world have seen cases of COVID-19 and many are experiencing outbreaks. 
       Authorities in China and some other countries have succeeded in slowing their outbreaks. 
       However, the situation is unpredictable so check regularly for the latest news.
       <Button href='/news' variant="primary">
          Latest News
           </Button>{' '}
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Donation/>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
  </Container>
</Jumbotron>
      <CountriesToShow  filtername={filtername} countries={countries}/>
        </Route>
        </Switch>
      </Router>
     
    </div>
  )
}

export default App;
