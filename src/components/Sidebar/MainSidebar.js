import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const MainSidebar = () => {
   return (
      <Sidebar>
         <Logo src="/img/logo.png" alt="Présentation" />

         <Nav />
      </Sidebar>
   );
};

const Sidebar = styled.section`
   overflow: hidden;
   display: flex;
   flex-direction: column;
   height: 100vh;
   width: 250px;
   padding: 30px;
   background-color: var(--clr-300);
`;
const Logo = styled.img`
   width: 50px;
   margin-bottom: 30px;
`;

export default MainSidebar;
