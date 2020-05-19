import React from 'react';
import Header from './components/Header'
import SendTweet from './components/SendTweet'
import {Container, Snackbar} from '@material-ui/core'



function App() {
  return (
    <Container 
      className="tweets-simulator"
      maxWidth={false}>
        <Header></Header>
        <SendTweet></SendTweet>
      
    </Container>
  );
}

export default App;
