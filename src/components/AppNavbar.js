import React from 'react';
import { Navbar, Nav, NavDropdown, FormControl, Col, InputGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const AppNavbar = ({ searchText, updateSearchText }) => {
    return (
        <Navbar bg="white" variant="light" expand="xs" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Col>
                <Link to="/"><Navbar.Brand><b>UberEats</b></Navbar.Brand></Link>
            </Col>

            <SearchBar searchText={searchText} updateSearchText={updateSearchText} />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Deliver Now" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Deliver Now</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Schedule and Recieve</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>

                    <NavDropdown title="Your Profile" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/1">Orders</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Favourites</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3">Wallet</NavDropdown.Item>
                        <NavDropdown.Item href="#action/4">Account</NavDropdown.Item>
                        <NavDropdown.Item href="#action/5">Promotions</NavDropdown.Item>
                        <NavDropdown.Item href="#action/6">Eats Pass</NavDropdown.Item>
                        <NavDropdown.Item href="#action/7">Sign out</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Uber Assistant" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/1">Help</NavDropdown.Item>
                    <NavDropdown.Item href="#action/2">settings</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3">Location</NavDropdown.Item>
                    <NavDropdown.Item href="#action/4">Apply for Coupons</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

const SearchBar = ({ searchText, updateSearchText }) => {
    let history = useHistory();

    const onChange = (e) => {
        updateSearchText(e.target.value)
    }

    const onSubmit = (str) => {
        const to = {
            pathname: `/search`,
            search: `?q=${str}`,
            state: { searchTerm: str }
        }
        history.push(to)

    }

    return (
        <InputGroup className="col-xs-6 col-md-6">
            <FormControl
                type="input"
                onKeyPress={e => {
                    if (e.key === "Enter") {
                        onSubmit(searchText)
                    }
                }}
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                value={searchText}
                onChange={onChange}
            />
        </InputGroup>
    )


}

export default AppNavbar;