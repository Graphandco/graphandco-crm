import { React, useContext } from "react";
import styled from "styled-components";
import { FaUserFriends } from "react-icons/fa";
import { GlobalContext } from "../GlobalContext";

const Nav = () => {
   const [clients] = useContext(GlobalContext);

   return (
      <Navbar>
         <NavItem>
            <NavItemName>
               <FaUserFriends /> Clients
            </NavItemName>
            <NavItemNb>{clients.length}</NavItemNb>
         </NavItem>
      </Navbar>
   );
};

const Navbar = styled.nav`
   display: flex;
   flex-direction: column;
   gap: 10px;
`;
const NavItem = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;
const NavItemName = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
`;
const NavItemNb = styled.div`
   color: var(--primary-400);
   font-weight: 600;
`;

export default Nav;
