import React, { Component } from 'react';
import {
	Navbar, NavbarBrand, Nav, NavLink, NavbarToggler,
	Collapse, NavItem, NavbarText,
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';

export default class Navi extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Navbar
					color="light"
					expand="md"
					light>
					<NavbarBrand href="/">
						reactstrap
					</NavbarBrand>
					<NavbarToggler onClick={function noRefCheck() { }} />
					<Collapse navbar>
						<Nav
							className="me-auto"
							navbar
						>
							<NavItem>
								<NavLink href="/components/">
									Components
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/reactstrap/reactstrap">
									GitHub
								</NavLink>
							</NavItem>
							<CartSummary />
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
