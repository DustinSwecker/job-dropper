import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/components/Skills/skills.css'
import './App.css';
import JobBoard from './components/Jobboard';
import Listing from './components/Listing';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Pageination from './components/Pageination';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from '@mui/material/Stack';
import Login from './components/Login';
import Signup from './components/Signup';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <Header /> */}
        <Navbar className = "justify-content-center nav">
          <Routes>

          <Route
            path = "/"
            element = {<Home />}
            />

          <Route
            path = "/"
            element = {<Footer />}
            />

          <Route 
                path="/login" 
                element={<Login />} 
          />
          <Route 
                path="/signup" 
                element={<Signup />} 
          />


          </Routes>
        </Navbar>
       <Footer />
       </Router>
      
    <div className="App">

     <div>
     <Listing/>
     </div>
     <Pageination/>
    </div>

    </ApolloProvider>
  );
}

export default App;
