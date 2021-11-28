import React from 'react';
import Card from '../Components/Card';

const CustomerList = ({ filteredCustomers }) => {
  const filtered = filteredCustomers.map( customer =>  <Card key={customer.id} customer={customer} />); 
  return (
    <React.Fragment>
      {filtered}
    </React.Fragment>
  );
}

export default CustomerList;