import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Header extends Component {


	updatePath(path) {
		this.props.history.push(path)
	}

	render() {
		return (
			<Menu>
				<Menu.Item name='Home' onClick={() => this.props.history.push('/')}>Home</Menu.Item>
				<Menu.Item name='About' onClick={() => this.props.history.push('/about')}>About</Menu.Item>
			</Menu>
		);
	}
}