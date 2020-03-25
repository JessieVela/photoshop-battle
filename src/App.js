import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import { Container, Header } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Header>
          <Navigation />
        </Header>
      </Container>
    </div>
  );
}

export default App;
