import React from 'react'
import {Link } from 'react-router-dom'
import Donation from './Donation'
import {Card,ListGroup,ProgressBar,Container,Jumbotron,Tab,Row,Col,Button,Nav} from 'react-bootstrap'

const CountriesToShow=({countries,filtername,setVisibility})=>{
setVisibility(true)

  countries= countries.filter(x=>x.Country.toLowerCase().includes(filtername.toLowerCase()))


     return (
      <div >
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
 {countries.map((x,idx)=>
        <Card  key={idx} style={{marginBottom:'50px',padding:'2px'}}>
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
</Card>)}
    </div>
      )
}

export default CountriesToShow