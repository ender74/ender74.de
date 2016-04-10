import React, { Component } from 'react'
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function route(router, link) {
    alert('route to : ' + link)
    router.push(link)
}

const NavItemLink = ( { to, onClick, children} ) => {
    return <LinkContainer to = {to}><NavItem onClick={onClick}>{children}</NavItem></LinkContainer>
}

class Header extends Component {
    constructor() {
        super()
        this.state = {
            expanded: false
        }
        this.navItemClicked = this.navItemClicked.bind(this)
    }

    navItemClicked() {
        this.setState({
            expanded: false
        });
    }

    render() {
        return (
            <Navbar fixedTop fluid expanded={this.state.expanded} onToggle={(expanded) => this.setState({expanded: expanded})}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Ender74.de</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItemLink to='/app/start' onClick={this.navItemClicked}>Start</NavItemLink>
                        <NavItemLink to='/app/resume' onClick={this.navItemClicked}>Über mich</NavItemLink>
                        <NavItemLink to='/app/projects' onClick={this.navItemClicked}>Projekte</NavItemLink>
                        <NavItemLink to='/app/disclaimer' onClick={this.navItemClicked}>Impressum</NavItemLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
         )
    }
}

export default Header