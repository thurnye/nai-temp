import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {Dropdown, DropdownButton} from 'react-bootstrap'
import logo from '../../public/images/logo.png'
import './nav.css'

export default function nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light " >
            <div className="container-fluid">
                <Nav.Link className="navbar-brand" href="/">
                <img src={logo}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                                alt="BookCook"
                        />
                </Nav.Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mobile-show" id="navbarNavDropdown">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Nav.Link className="nav-link" aria-current="page" href="/">Home</Nav.Link>
                        </li>

                        <li className="nav-item">
                            <Nav.Link className="nav-link" href="/durham-college">Durham College</Nav.Link>
                        </li>

                        <li className="nav-item">
                            <Nav.Link className="nav-link" href="/branding">Branding</Nav.Link>
                        </li>

                        <li className="nav-item">
                            <Nav.Link className="nav-link" href="/logo-works">Logo Works</Nav.Link>
                        </li>

                        <li className="nav-item">
                            <Nav.Link className="nav-link" href="/contact">Contact</Nav.Link>
                        </li>

                    </ul>
                </div>
                <div className="desktop-nav">
                    {/* <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-menu-align-right">
                            WORKS
                        </Dropdown.Toggle>

                        <Dropdown.Menu>

                            <Dropdown.Item href="#/action-1">
                            <Nav.Link className="nav-link" href="/durham-college">Durham College</Nav.Link>
                            </Dropdown.Item>

                            <Dropdown.Item href="#/action-2">
                                <Nav.Link className="nav-link" href="/branding">Branding</Nav.Link>
                            </Dropdown.Item>

                            <Dropdown.Item href="#/action-3">
                                <Nav.Link className="nav-link" href="/logo-works">Logo Works</Nav.Link>
                            </Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown> */}
                    <DropdownButton
                        menuAlign="right"
                        title="WORK."
                        id="dropdown-menu-align-right"
                        >
                         <Dropdown.Item href="#/action-1">
                            <Nav.Link className="nav-link" href="/durham-college">Durham College</Nav.Link>
                        </Dropdown.Item>

                        <Dropdown.Divider />

                        <Dropdown.Item href="#/action-2">
                            <Nav.Link className="nav-link" href="/branding">Branding</Nav.Link>
                        </Dropdown.Item>

                        <Dropdown.Divider />

                        <Dropdown.Item href="#/action-3">
                            <Nav.Link className="nav-link" href="/logo-works">Logo</Nav.Link>
                        </Dropdown.Item>

                        
                    </DropdownButton>
                    <div className="nav-contact">
                        <Nav.Link className="nav-link" href="/contact">CONTACT.</Nav.Link>
                    </div>
                </div>
                
            </div>
        </nav>
    )
}
