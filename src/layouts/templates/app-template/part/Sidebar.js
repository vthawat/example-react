import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import BlankAvatar from 'assets/img/blank-avatar.jpg';
import { Link } from 'react-router-dom';

/**
 * Base Component of Sidebar
 */
class Sidebar extends React.Component {
	render() { 
		return (
			<aside className="main-sidebar">				
				<section className="sidebar">					
					{this.props.children}		
				</section>				
			</aside>
		)
	}
}
export default Sidebar;

/**
 * Sidebar User Panel
 */
Sidebar.UserPanel = (props) => {		
	return (
		<div className="user-panel">
			<div className="pull-left image">
				<img src={props.userImage ? props.userImage : BlankAvatar} className="img-circle" alt={props.userLabel} />
			</div>
			<div className="pull-left info">
				<p>{props.userLabel}</p>
				<a><i className="fa fa-circle text-success"></i> Online</a>
			</div>
		</div>
	);	
}
Sidebar.UserPanel.propTypes = {
	userImage: PropTypes.string,
	userLabel: PropTypes.string
}

/**
 * Sidebar Form
 */
Sidebar.Form = (props) => {	
	return (
		<form action="#" method="get" className="sidebar-form">
			<div className="input-group">
				<input type="text" name="q" className="form-control" placeholder="Search..." />
				<span className="input-group-btn">
					<button type="submit" name="search" id="search-btn" className="btn btn-flat">
						<i className="fa fa-search"></i>
					</button>
				</span>
			</div>
		</form>
	);
}

/**
 * Sidebar Menu Items
 */
Sidebar.MenuItems = (props) =>{	
	return (
		<section className="sidebar">		
			<ul className="sidebar-menu tree" data-widget="tree">
				{
					props.menuItems.map((item, index) => {															
						return item.isHeader ? 
							// If menu header
							<li key={index} className="header">{item.label}</li> : 
							// Or menu items
							(
								(item.childItems) ?
									(
										// Treeview Menu
										<li key={index} className="treeview">
											<Link to={item.link}>
												<span dangerouslySetInnerHTML={{ __html: item.label }} />
												<span className="pull-right-container">
													{ item.extendLabel ? <span dangerouslySetInnerHTML={{ __html : ReactDOMServer.renderToString(item.extendLabel) }} /> :	<i className="fa fa-angle-left pull-right"></i>	}
												</span>
											</Link>																		
											<ul className="treeview-menu">
												{
													item.childItems.map((childItem, childIndex) => {
														return <li key={childIndex}><Link to={childItem.link}><i className="fa fa-circle-o"></i> {childItem.label}</Link></li>
													})
												}
											</ul>
										</li>
									):(
										// Single menu
										<li key={index}>
											<Link to={item.link}>
												<span dangerouslySetInnerHTML={{ __html: item.label }} />
												{ item.extendLabel && <span className="pull-right-container" dangerouslySetInnerHTML={{ __html : ReactDOMServer.renderToString(item.extendLabel) }} />}
											</Link>
										</li>
									)
								)						
					})
				}
			</ul>
		</section>
	)
}