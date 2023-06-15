import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './App.css';
import JobBoard from './components/Jobboard';
import Listing from './components/Listing';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
     yo whatsup job droppers
     <div>
     <JobBoard/>
     </div>

     <div>
      <Listing/>
     </div>

    </div>
    </ApolloProvider>
  );
}

export default App;
