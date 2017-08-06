import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import '../../styles/Main.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <Nav className="justify-content-center">
                    <NavItem>
                        <Link className="nav-link" to="/">Home</Link>
                    </NavItem>
                    <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle nav caret>Questions</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link to="/all-questions">All Questions</Link>
                            </DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem header>Categories</DropdownItem>
                            <DropdownItem>
                                <Link to="/american-history">American History</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/american-government">American Government</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/integrated-civics">Integrated Civics</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </NavDropdown>
                    <NavItem>
                        <Link className="nav-link" to="/vocabulary">Vocabulary</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/additional-information">Info</Link>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}
