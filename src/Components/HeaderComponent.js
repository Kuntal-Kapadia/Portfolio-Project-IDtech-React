import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, UncontrolledDropdown, DropdownToggle,DropdownMenu,DropdownItem, Button} from 'reactstrap';
import { NavLink, Link} from 'react-router-dom';


class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isNavOpen: false  
        };

        this.toggleNav = this.toggleNav.bind(this);
        
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render(){
        return(
            <React.Fragment>
                <Navbar fixed="top" expand="md">
                    <div className="container-fluid">
                        <NavbarBrand className="mr-auto" href="/home" ><img src="/assets/images/id-logo.png" alt="ID Tech Logo"/></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="mr-8">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/whyID">Why ID?</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Online
                                        </DropdownToggle>
                                        <DropdownMenu  right>
                                            <DropdownItem>
                                                <Link class Name="DropdownColor" to='/online/learning'><strong>Learning and Camps</strong></Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link to='/online/virtual'><strong>Virtual Tech Camps</strong></Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link to='/online'><strong>Private Leassons</strong></Link>
                                            </DropdownItem>
                                        </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Courses
                                        </DropdownToggle>
                                        <DropdownMenu  right>
                                            <DropdownItem>
                                                <Link  to='/courses'><strong>CODING</strong></Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link to='/courses'><strong>GAME DEV</strong></Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link to='/courses'><strong>Robotics</strong></Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link to='/courses'><strong>CREATIVE</strong></Link>
                                            </DropdownItem>
                                        </DropdownMenu>
                                </UncontrolledDropdown>
                                <Button variant="dm nanger">Register</Button>
                            </Nav>
                                
                            
                        </Collapse>
                    </div>
                </Navbar>
               
            </React.Fragment>
        );
    }
}

export default Header;
 