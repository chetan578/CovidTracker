import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import {Card,Button,CardDeck} from 'react-bootstrap'


const News=()=>{
  // setshowFilter(false)
    let [news,setNews]=useState([])   
    useEffect(()=>{
    axios.get('https://covid19-us-api.herokuapp.com/news').then(response=>{
        setNews(response.data.message)
    })
    },[])

    return(
    <div>
        <h1>News Updates </h1>
        <CardDeck>
        {news.slice(0,4).map((x,inc)=>
        <Card key={inc} style={{padding:'2px',marginBottom:'20px',marginTop:'10px'}}>
        <Card.Header>{x.published.slice(0,12)}</Card.Header>
        <Card.Body>
          <Card.Title>{x.title}</Card.Title>
          <Button href={x.url} variant="primary">Link</Button>
        </Card.Body>
      </Card>
        )}
        </CardDeck>
        <CardDeck>
        {news.slice(4,8).map((x,inc)=>
        <Card key={inc} style={{padding:'2px',marginBottom:'20px',marginTop:'10px'}}>
        <Card.Header>{x.published.slice(0,12)}</Card.Header>
        <Card.Body>
          <Card.Title>{x.title}</Card.Title>
          <Button href={x.url} variant="primary">Link</Button>
        </Card.Body>
      </Card>
        )}
        </CardDeck>
        <CardDeck>
        {news.slice(8,12).map((x,inc)=>
        <Card key={inc} style={{padding:'2px',marginBottom:'20px',marginTop:'10px'}}>
        <Card.Header>{x.published.slice(0,12)}</Card.Header>
        <Card.Body>
          <Card.Title>{x.title}</Card.Title>
          <Button href={x.url} variant="primary">Link</Button>
        </Card.Body>
      </Card>
        )}
        </CardDeck>
    </div>
    )

}


export default News 