import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useEffect, useState } from "react"
import axios from 'axios'
import JokeCard from './JokeCard';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {

  const [loading, setLoading] = useState(false);
  const [data,setData]=useState([]);
  const[all,setAll]=useState(true);

  const handleClick=(name)=>
  {
    name==="All"? setAll(true): setAll(false);
    name==="All"?
    axios.get( "https://v2.jokeapi.dev/joke/"+"Any"+"?amount=10")
    .then(({data})=>{ setData(data.jokes) })
    .catch(err=>console.log(err))
    :axios.get( "https://v2.jokeapi.dev/joke/"+name+"?amount=10")
    .then(({data})=>{ setData(data.jokes) })
    .catch(err=>console.log(err))
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
   
  }

  useEffect(() => {
    axios.get( "https://sv443.net/jokeapi/v2/joke/Any?amount=10")
    .then(({data})=>{ setData(data.jokes) })
    .catch(err=>console.log(err));

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
     <Navbar bg="dark" expand="lg" variant='dark' >
      <Container fluid>
        <Navbar.Brand style={{fontFamily: 'Bebas Neue',fontSize:"30px"}} >JOKES</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  href="#All" active={all} onClick={()=>handleClick("All")}>All</Nav.Link>
            <Nav.Link href="#Christmas" onClick={()=>handleClick("Christmas")} >Christmas</Nav.Link>
            <Nav.Link href="#Programming" onClick={()=>handleClick("Programming")}>Programming</Nav.Link>
            <Nav.Link href="#Miscellaneous" onClick={()=>handleClick("Miscellaneous")}>Miscellaneous</Nav.Link>
            <Nav.Link href="#Dark" onClick={()=>handleClick("Dark")}>Dark</Nav.Link>
            <Nav.Link href="#Pun" onClick={()=>handleClick("Pun")}>Pun</Nav.Link>
            <Nav.Link href="#Spooky" onClick={()=>handleClick("Spooky")}>Spooky</Nav.Link>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
      { (console.log(data),loading)? 
        
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        :
        <div >
          <JokeCard jokes={data}/>
        
        </div>
      }
    </div>
  );
}

export default App;
