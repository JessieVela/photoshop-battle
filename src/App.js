import React from 'react';
import './App.css';
import Navigation from './components/navigation'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Navigation />
      </Container>
    </div>
  );
}

export default App;
