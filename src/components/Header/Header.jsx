import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import '../../styles/Main.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Header extends Component {
    constructor() {
        super();
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
            <div>
                <Nav className="header-nav">
                    <NavItem>
                        <Link className="nav-link white-link" to="/">Home</Link>
                    </NavItem>
                    <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle nav caret className="white-link">Questions</DropdownToggle>
                        <DropdownMenu className="drop-down">
                            <DropdownItem>
                                <Link to="/all-questions" className="white-link">All Questions</Link>
                            </DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem header className="white-link">Categories</DropdownItem>
                            <DropdownItem>
                                <Link to={`/questions/american-government`} className="white-link">American Government</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to={`/questions/american-history`} className="white-link">American History</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to={`/questions/integrated-civics`} className="white-link">Integrated Civics</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </NavDropdown>
                    <NavItem>
                        <Link className="nav-link white-link" to="/vocabulary">Vocabulary</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link white-link" to="/additional-information">Info</Link>
                    </NavItem>
                </Nav>
                <br/>
            </div>
        )
    }
}
