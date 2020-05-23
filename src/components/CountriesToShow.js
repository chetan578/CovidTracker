import React from 'react'
import {Link } from 'react-router-dom'
import {Card,ListGroup,ProgressBar} from 'react-bootstrap'

const CountriesToShow=({countries,filtername})=>{
 
    const showCountries=()=>{
      // setshowFilter(true)
        let s = countries.filter(x=>x.Country.toLowerCase().includes(filtername.toLowerCase()))
        console.log(s.length)
        return s.map((x,idx)=>
        <Card key={idx} style={{marginBottom:'50px'}}>
  <Card.Header style={{fontSize:'30px'}}><Link to={`/countries/${x.Country}`}>{x.Country}</Link></Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Total Cases : {x.TotalConfirmed}</ListGroup.Item>
    <ListGroup.Item>Total Deaths : {x.TotalDeaths}</ListGroup.Item>
    <ListGroup.Item >Total Recovered : {x.TotalRecovered}</ListGroup.Item>
    <ListGroup.Item style={{color:'red'}}>Recovery rate : {(x.TotalRecovered/x.TotalConfirmed*100).toFixed(2)} %
    <ProgressBar animated striped variant="success" now={(x.TotalRecovered/x.TotalConfirmed*100).toFixed(2)} />
    </ListGroup.Item>
    <ListGroup.Item style={{color:'red'}}>Death Rate : {(x.TotalDeaths/x.TotalConfirmed*100).toFixed(2)} %
    <ProgressBar animated striped variant="danger" now={(x.TotalDeaths/x.TotalConfirmed*100).toFixed(2)} />
    </ListGroup.Item>
    <ListGroup.Item>New Cases Today : {x.NewConfirmed}</ListGroup.Item>
    <ListGroup.Item>New Deaths Today : {x.NewDeaths}
    </ListGroup.Item>
  </ListGroup>
</Card>
      )
     }

      return (
          <div >
              {showCountries()}
          </div>
      )
}

export default CountriesToShow