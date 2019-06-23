import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Alert from 'react-bootstrap/es/Alert';

class AlertBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: true
		}
	}

	handleDismiss() {
		this.setState({ visible: false });
	}

	render() {
		const { icon, bsStyle } = this.props;	
		
		let iconTitle;
		if (icon) {
			iconTitle = icon
		} else {
			let iconClasses = classNames({
				'icon': true,
				'fa': true,
				'fa-ban': bsStyle === 'danger',
				'fa-info-circle': bsStyle === 'info',
				'fa-warning': bsStyle === 'warning',
				'fa-check': bsStyle === 'success'
			});			
			iconTitle = <i className={iconClasses} />
		}
		if (this.state.visible) {
			return (
				<Alert bsStyle={bsStyle} closeLabel={this.props.closeLabel} onDismiss={this.handleDismiss.bind(this)}>
					<h4>
						{ iconTitle && iconTitle }
						{ this.props.title	}
					</h4>
					{ this.props.children }
				</Alert>
			)
		} else {
			return (<div></div>)
		}
	}
}
export default AlertBox;

AlertBox.propTypes = {
	bsStyle: PropTypes.string,
	title: PropTypes.string,
	icon: PropTypes.element	
}
AlertBox.defaultProps = {
	bsStyle: "warning"
}

