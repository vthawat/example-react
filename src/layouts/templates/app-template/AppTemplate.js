import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainBody from './part/MainBody';
import Navbar from './part/Navbar';
import Sidebar from './part/Sidebar';
import Footbar from './part/Footbar';

class AppTemplate extends Component {
	render() {
		return (
			<div className="skin-blue sidebar-mini">
				<MainBody>
					<Navbar 
						logoText={this.props.logoText}
						logoTextMini={this.props.logoTextMini}
						logoImage={this.props.logoImage}
						userName={this.props.userName}
						userPosition={this.props.userPosition}
						userImage={this.props.userImage}
						notificationItems={this.props.notificationItems}
						logoutText={this.props.logoutText}
						logoutLink={this.props.logoutLink} />
					<Sidebar>
						<Sidebar.UserPanel userLabel={this.props.userName} userImage={this.props.userImage} />
						<Sidebar.MenuItems menuItems={this.props.menuItems} />
					</Sidebar>
					<div className="content-wrapper">
						{this.props.children}						
					</div>
					<Footbar 
						version={this.props.version} 
						copyrightYear={this.props.copyright}
						companyName={this.props.companyName} />
				</MainBody>        
			</div>
		)
	}
}
export default AppTemplate;

AppTemplate.propTypes = {
	/* Title Section */
	logoText: PropTypes.string.isRequired,
	logoTextMini: PropTypes.string,
	logoImage: PropTypes.string,
	logoutText: PropTypes.string,
	logoutLink: PropTypes.string,
	/* User Section */
	userName: PropTypes.string.isRequired,
	userPosition: PropTypes.string,
	userImage: PropTypes.string,
	/* Sidebar Section */
	menuItems: PropTypes.array,
	/* Notification Section */
	notificationItems: PropTypes.array,
	/* Footbar Section */
	version: PropTypes.string,
	copyrightYear: PropTypes.string,
	companyName: PropTypes.string
}
AppTemplate.defaultProps = {
	userName: 'None',
	menuItems: []
}