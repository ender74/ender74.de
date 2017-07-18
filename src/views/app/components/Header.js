import React, { Component } from 'react'
import { Button, Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { FormattedMessage, injectIntl } from 'react-intl'

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
        const { locale, intl, setLocale } = this.props

        const language = intl.formatMessage({
            id: 'app.language',
            defaultMessage: 'Language'
        })

        const wrapCollapse = f => () => {
            this.setState({
                expanded: false
            })
            f()
        }

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
                        <NavDropdown eventKey={1} title={ language } id='select-language'>
                            <NavItem eventKey={1.1} onClick={ wrapCollapse(() => setLocale('en')) } active={ locale === 'en' }>
                                <FormattedMessage
                                    id='app.language_en'
                                    defaultMessage='English'
                                />
                            </NavItem>
                            <NavItem eventKey={1.2} onClick={ wrapCollapse(() => setLocale('de')) } active={ locale === 'de' }>
                                <FormattedMessage
                                    id='app.language_de'
                                    defaultMessage='German'
                                />
                            </NavItem>
                        </NavDropdown>
                        <NavItemLink to='/app/start' onClick={this.navItemClicked}>
                            <FormattedMessage
                                id='app.start'
                                defaultMessage='Start'
                            />
                        </NavItemLink>
                        <NavItemLink to='/app/resume' onClick={this.navItemClicked}>
                            <FormattedMessage
                                id='app.about'
                                defaultMessage='About me'
                            />
                        </NavItemLink>
                        <NavItemLink to='/app/projects' onClick={this.navItemClicked}>
                            <FormattedMessage
                                id='app.projects'
                                defaultMessage='Projects'
                            />
                        </NavItemLink>
                        <NavItemLink to='/app/disclaimer' onClick={this.navItemClicked}>
                            <FormattedMessage
                                id='app.legal'
                                defaultMessage='Legal'
                            />
                        </NavItemLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
         )
    }
}

export default injectIntl(Header)
