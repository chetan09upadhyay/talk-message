
import React from 'react';
import styled from 'styled-components'; // Update import
import Robot from "../assets/robot.gif";
import Logout from './Logout';

export default function Welcome({ currentUser }) {
  return (
    <Container>
      <div className="logout">
          
        <Logout />
      </div>
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome,
        <span>{currentUser ? currentUser.username : "Guest"}
          </span>
      </h1>
      <h3>Please select a chat to Start Messaging.</h3>
    </Container>
  )
}



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
    @media screen and (min-width: 385px) and (max-width: 720px) {
      height: 14rem;
       
  }
  }
  span {
    color: #4e0eff;
    .robot{
      height: 3rem;
    }
  }
`;