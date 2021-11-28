import React, { useState } from 'react';
import styled from 'styled-components';
import CustomerList from './CustomerList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

const Title = styled.h1`
`

const Result = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 50rem; 
`

const Search = styled.input`
  border-radius: 0.5rem;
  line-height: 1.5rem;
  padding: 1rem;
`

const CustomerSearch = ({ details }) => {

  const [searchField, setSearchField] = useState();
  const [searchShow, setSearchShow] = useState(false);

  const filteredCustomers = details.filter(
    customer => {
      return (
        customer
        .lastName
        .includes(searchField) ||
        customer
        .firstName
        .includes(searchField) ||
        customer
        .phone
        .includes(searchField) ||
        customer
        .email
        .includes(searchField)
      );
    }
  );



  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  const SearchList = () => {
  	if (searchShow) {
	  	return (
	  		<CustomerList filteredCustomers={filteredCustomers} />
	  	);
	  }
  }

  return (
    <Container>
      <Title>Search for customers :</Title>
      <div>
				<Search 
					type = "search" 
					placeholder = "Search" 
					onChange = {handleChange}
				/>
			</div>
			<Result>{SearchList()}</Result>
    </Container>
  );
}

export default CustomerSearch;