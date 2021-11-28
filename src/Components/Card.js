import React from 'react';
import styled from 'styled-components';

const Relative = styled.div`
  position: relative;
  margin-top: 2rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  border-radius: 0.5rem;
  border: 2px solid rgb(28, 113, 139);
  color: rgb(28, 113, 139);
  background-color: #fff;
`

const Shadow = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  content: "";
  background-color: rgb(28, 113, 139);
  border-radius: 6px;
  position: absolute;
  left: 1rem;
  top: 1rem;
  z-index: -1;
`

const Card = ({customer}) => {
	return(
    <React.Fragment>
      <Relative>
        <Container>
          <p>Name : {customer.lastName}</p>
          <p>Firstname : {customer.firstName}</p>
          <p>Phone : {customer.phone}</p>
          <p>Emall : {customer.email}</p>
        </Container>
        <Shadow></Shadow>
      </Relative>
    </React.Fragment>
	);
}

export default Card;