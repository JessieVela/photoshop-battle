import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import { Container } from 'react-bootstrap';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
      <Container>
          <Navigation />
          <FAQ />
      </Container>
    </div>
  );
}

export default App;
