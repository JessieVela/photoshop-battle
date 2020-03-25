import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import { Container } from 'react-bootstrap';
import FAQ from './components/FAQ';
import CardDetails from './components/CardDetails'

function App() {
  return (
    <div className="App">
      <Container>
        <Navigation />
      </Container>
      <Container>
        <CardDetails url="https://external-preview.redd.it/GPEmX1RaDKgT2LPhN9aL4CS6UE5NehVg19CsHDtISH8.jpg?width=640&crop=smart&auto=webp&s=bc337fede8fa209b9008868ead4d524a1a2e5490" />
        <CardDetails url="https://preview.redd.it/5jmztfwzopo41.jpg?width=640&crop=smart&auto=webp&s=a3b5940708071cde9a442da2923f58b28029f0c6" />
        <CardDetails url="https://preview.redd.it/q5iobba3nso41.jpg?width=640&crop=smart&auto=webp&s=d05686da0f2b961cd119c1e0c6485c9423962653" />
        <CardDetails url="https://preview.redd.it/fnhgu3m8uso41.jpg?width=640&crop=smart&auto=webp&s=19f9048f13a20dfe8f2810722feffa0cd88db85e" />
      </Container>
    </div>
  );
}

export default App;
