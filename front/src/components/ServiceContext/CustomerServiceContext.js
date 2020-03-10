import React from "react";

const {
  Provider: CustomerServiceProvider,
  Consumer: CustomerServiceConsumer
} = React.createContext();

function withCustomerServiceProvider(Wrapped, customerService) {
  return (props) => {
    return (
      <CustomerServiceProvider value={customerService}>
        <Wrapped {...props}/>
      </CustomerServiceProvider>
    );
  }
}

function withCustomerService(Wrapped) {
  return (props) => {
    return (
      <CustomerServiceConsumer>
        {
          (customerService) => {
            return (
              <Wrapped {...props} customerService={customerService}/>
            );
          }
        }
      </CustomerServiceConsumer>
    );
  }
}

export {
  withCustomerService,
  withCustomerServiceProvider,
  CustomerServiceProvider,
  CustomerServiceConsumer
};
