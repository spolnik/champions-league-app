import * as React from "react";

import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown } from "reactstrap";

// @ts-ignore
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

export default class Menu extends React.Component<{}, {isOpen: boolean}> {
    constructor(props: any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }

    public toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    public render() {
        return (
            <Navbar color="dark" dark fixed="top" expand="md">
                <NavbarBrand href="/champions-league-app">
                    <FontAwesomeIcon icon={"futbol"}/> UEFA Champions League
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} href="/champions-league-app" to="/champions-league-app">
                                2018/2019
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Group Stage
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="#a">
                                    Group A
                                </DropdownItem>
                                <DropdownItem href="#b">
                                    Group B
                                </DropdownItem>
                                <DropdownItem href="#c">
                                    Group C
                                </DropdownItem>
                                <DropdownItem href="#d">
                                    Group D
                                </DropdownItem>
                                <DropdownItem href="#e">
                                    Group E
                                </DropdownItem>
                                <DropdownItem href="#f">
                                    Group F
                                </DropdownItem>
                                <DropdownItem href="#g">
                                    Group G
                                </DropdownItem>
                                <DropdownItem href="#h">
                                    Group H
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Knockout Phase
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="#round-of-16">
                                    Round of 16
                                </DropdownItem>
                                <DropdownItem href="#quater-finals">
                                    Quater-finals
                                </DropdownItem>
                                <DropdownItem href="#semi-finals">
                                    Semi-finals
                                </DropdownItem>
                                <DropdownItem href="#final">
                                    Final
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
