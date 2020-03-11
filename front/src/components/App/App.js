import React from 'react';
import './App.css';
import { CustomerService, DummyCustomerService, withCustomerServiceProvider } from "../ServiceContext";
import CustomerList from "../CustomerList";
import withErrorBoundary from "../ErrorBoundary";
import Header from "../Header";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CustomerDetails from "../CustomerDetails";
import Container from "react-bootstrap/Container";

function MainPage() {
  return (
    <h5 className='py-3 text-center'>Главная страница</h5>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Container>
          <div className='col-10 mx-auto'>
            <Route
              path='/'
              exact
              render={MainPage}/>
            <Route
              path='/customer/'
              exact
              component={CustomerList}/>
            <Route
              path='/customer/:id'
              render={({match}) => {
                const id = Number.parseInt(match.params.id);
                return <CustomerDetails id={id}/>
              }}/>
          </div>
        </Container>
      </Router>
    </div>
  );
}

const customerService = process.env.REACT_APP_USE_BACK ? new CustomerService(): new DummyCustomerService();

export default withErrorBoundary(withCustomerServiceProvider(App, customerService));