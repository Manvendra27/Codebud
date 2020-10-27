import React, { useState } from 'react';
import { Collapse, Button,FormGroup,Input,Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from 'reactstrap';
import { Link } from 'react-router-dom';
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{backgroundColor:'#2d2c2c',color:'white !important'}} dark expand="md">
        <NavbarBrand  href="/"><img src="logo.PNG" width="170" height="40" /></NavbarBrand>
        <FormGroup >
        <Input className='searchBar' type="email" name="email" id="exampleEmail" placeholder="Search" />
      </FormGroup>
      <Button className='navBtn'>Search</Button>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="navitem">
              <Link to='/home'><NavLink className="navlinks" >Home</NavLink></Link>
            </NavItem>
            <NavItem className="navitem">
            <Link to='/skills'><NavLink className="navlinks" >Skills</NavLink></Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="navlinks" nav caret style={{marginRight:'1rem'}}>
                <img src='me.png' style={{borderRadius:'2.5rem',height:'1.5rem'}}/> ME
              </DropdownToggle>
              <DropdownMenu right>
                  
                <DropdownItem>
                 <Link to='myprofile'> My Profile</Link>
                </DropdownItem>
                <DropdownItem>
                  Settings
                </DropdownItem>
                <DropdownItem>
                  <Link to='/'>Log out</Link>
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
