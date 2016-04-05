import React, { Component } from 'react'
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function route(router, link) {
    alert('route to : ' + link)
    router.push(link)
}

const Header = () => {
    return (
        <Navbar fixedTop fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Ender74.de</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <LinkContainer to='/app/start'><NavItem>Start</NavItem></LinkContainer>
                    <LinkContainer to='/app/resume'><NavItem>Über mich</NavItem></LinkContainer>
                    <LinkContainer to='/app/projects'><NavItem>Projekte</NavItem></LinkContainer>
                    <LinkContainer to='/app/disclaimer'><NavItem>Impressum</NavItem></LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     )
}

export default Header