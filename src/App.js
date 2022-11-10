import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';


function App() {

  const [error, setError] = useState(null);
  
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  
  var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=dfd68156c3b747a0bb966b59ade084eb';
  var req = new Request(url);


  useEffect(() => {
    return fetch(req)
        .then((response)=> {
        (response.json())
        .then((data)=>{
          let artikel = data.articles
          
          setNews(artikel)
        })}),
        (error) => {
          
          setError(error)
        }
  
      },[]);


  if(error) {
    return<>{error.message}</>
  }
  else {return (
             <>
             <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />


              {news.filter(item => {
                  if (query === '') {
                    return item;
                  } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
                    return item;
                  }
                }).map((item) => (
                 
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.urlToImage} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                  </Card>
                
            ))}
        </>
    
);
}
  }


export default App;
