import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
    NavbarText
} from 'reactstrap';


import { Link} from "react-router-dom";
const Topmenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Topmenu">

      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
        <img width="70px" height="auto" className="img-responsive" src="https://mahuudu.xyz/wp-content/uploads/2020/12/logo-3.png"  alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">Home </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                 <Link to="/about">About</Link>
              </NavLink>
            </NavItem>
             <NavItem>
              <NavLink>
                 <Link to="/map">Map</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Topmenu;