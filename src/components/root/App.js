import React from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import Navi from '../navi/Navi'
import Dashboard from './Dashboard'
import CartDetail from '../cart/CartDetail'

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Dashboard />} />
        <Route path="/cart" element={<CartDetail />} />
      </Routes>
    </Container>
  );
}

export default App;
