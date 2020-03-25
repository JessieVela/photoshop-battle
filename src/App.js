import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import { Container, Row, Nav } from 'react-bootstrap';
import FAQ from './components/FAQ';
import CardDetails from './components/CardDetails'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Container>
        <Navigation />
      </Container>
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
