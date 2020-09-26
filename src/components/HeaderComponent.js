import React, { useState } from 'react';
import { Collapse, Button,FormGroup,Input,Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{backgroundColor:'#2d2c2c',color:'white !important'}} dark expand="md">
        <NavbarBrand  href="/"><img src="logo.PNG" width="170" height="40" /></NavbarBrand>
        <FormGroup >
        <Input type="email" name="email" id="exampleEmail" placeholder="Search" style={{width:'20rem',height:'40px',borderRadius:'1.5rem',}} />
      </FormGroup>
      <Button>Submit</Button>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="navitem">
              <NavLink className="navlinks" >Home</NavLink>
            </NavItem>
            <NavItem className="navitem">
              <NavLink className="navlinks" >Skills</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="navlinks" nav caret style={{marginRight:'1rem'}}>
                <img src='me.png' style={{borderRadius:'2.5rem',height:'1.5rem'}}/> ME
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  My Profile
                </DropdownItem>
                <DropdownItem>
                  Settings
                </DropdownItem>
                <DropdownItem>
                  Log out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
