import React from 'react';
import Customers from './Api/customers.json';
import CustomerSearch from './Layout/CustomerSearch';

function App() {
  return (
    <React.Fragment>
      <CustomerSearch details={Customers}/>
    </React.Fragment>
  );
}

export default App;
