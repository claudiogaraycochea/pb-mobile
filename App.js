import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container } from './src/ui/Theme';
import Home from './src/pages/home/Home';

export default function App() {
  return (
    <Container>
      <Home/>
    </Container>
  );
}
