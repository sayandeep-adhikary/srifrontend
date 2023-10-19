import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Profile from './pages/Profile';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details" element={<ProductDetails />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
