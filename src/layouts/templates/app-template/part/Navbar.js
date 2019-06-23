import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BlankAvatar from 'assets/img/blank-avatar.jpg';

class Navbar extends Component {
	render() {
		return (
			<header className="main-header">
				<Navbar.Brand logoText={this.props.logoText} />		
				<nav className="navbar navbar-static-top">
					<a className="sidebar-toggle" data-toggle="push-menu" role="button">
						<span className="sr-only">Toggle navigation</span>
					</a>
					<Navbar.MenuItems>										
						<Navbar.NotificationItem items={this.props.notificationItems} />
						<Navbar.UserMenuItem 
							userName={this.props.userName} 							
							userPosition={this.props.userPosition}
							userImage={this.props.userImage} />									
					</Navbar.MenuItems>
				</nav>
			</header>
		)
	}
}
export default Navbar

Navbar.propTypes = {
	/* Title Section */
	logoText: PropTypes.string.isRequired,
	logoTextMini: PropTypes.string,
	logoImage: PropTypes.string,
	/* User Section */
	userName: PropTypes.string.isRequired,
	userPosition: PropTypes.string,
	userImage: PropTypes.string,
	logoutText: PropTypes.string,
	logoutLink: PropTypes.string,
	/* Notification Section */
	notificationItems: PropTypes.array
}

/**
 * Navbar Brand
 */
Navbar.Brand = (props) => {
	return (
		<Link to={"/"} className="logo">
			<span className="logo-lg" dangerouslySetInnerHTML={{ __html: props.logoText }} />
			<span className="logo-mini" dangerouslySetInnerHTML={{ __html: props.logoTextMini }} />
		</Link>
	)
}
Navbar.Brand.propTypes = {
	logoText: PropTypes.string.isRequired,
	logoTextMini: PropTypes.string,
	logoImage: PropTypes.string
}

/**
 * Navbar Menu items
 */
Navbar.MenuItems = (props) => {
	return (
		<div className="navbar-custom-menu">
			<ul className="nav navbar-nav">
				{props.children}
			</ul>
		</div>
	)
}

/**
 * Dropdown menu item 
 */
Navbar.NotificationItem = (props) => {
	return (
		<li className="dropdown notifications-menu">
			<a className="dropdown-toggle" data-toggle="dropdown">
				<i className="fa fa-bell-o"></i>				
				{ props.items.length > 0 && <span className="label label-warning">{props.items.length}</span> }		
			</a>
			<ul className="dropdown-menu">
				{ props.items.length > 0 && <li className="header">You have {props.items.length} notifications</li> }				
				<li>
					<ul className="menu">
						{
							props.items.map((item, index) => {
								return (
									<li key={index}>
										<a href={item.link}>
											{(() => {
													switch (item.status) {
														case 'success': return <i className="fa fa-check-circle text-green"></i>
														case 'warning': return <i className="fa fa-exclamation-triangle text-yellow"></i>
														case 'danger': return <i className="fa fa-exclamation-circle text-red"></i>
														case 'info': return <i className="fa fa-info-circle text-aqua"></i>
														default: return <i className="fa fa-circle-o"></i>
													}
												}
											)()}{ item.text }
										</a>
									</li>
								)
							})
						}
					</ul>
				</li>
				{ props.showViewAll && <li className="footer"><Link to={props.viewAllLink}>View all</Link></li> }
			</ul>
		</li>	
	)
}
Navbar.NotificationItem.propTypes = {
	items: PropTypes.array,
	showViewAll: PropTypes.bool,
	viewAllLink: PropTypes.string
}
Navbar.NotificationItem.defaultProps = {
	items: [],
	showViewAll: false,
	viewAllLink: ''
}

/**
 * User menu item
 */
Navbar.UserMenuItem = (props) => {
	return (
		<li className="dropdown user user-menu">
			<a className="dropdown-toggle" data-toggle="dropdown">
				<img src={props.userImage ? props.userImage : BlankAvatar} className="user-image" alt={props.userName} />
				<span className="hidden-xs">{props.userName}</span>
			</a>
			<ul className="dropdown-menu">
				<li className="user-header">
					<img src={props.userImage ? props.userImage : BlankAvatar} className="img-circle" alt={props.userName} />
					<p>						
						<b className="name block">{props.userName}</b>
						<span className="position block">{props.userPosition}</span>						
					</p>
				</li>
				<li className="user-footer">
					<div className="text-right">
						<Link to={props.logoutLink} className="btn btn-default btn-flat">{props.logoutText}</Link>
					</div>
				</li>
			</ul>
		</li>
	)
}
Navbar.UserMenuItem.propTypes = {	
	userName: PropTypes.string.isRequired,
	userPosition: PropTypes.string,
	userImage: PropTypes.string,
	logoutText: PropTypes.string,
	logoutLink: PropTypes.string
}
Navbar.UserMenuItem.defaultProps = {
	logoutText: "Logout",
	logoutLink: "/"
}