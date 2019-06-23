import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Alert from 'react-bootstrap/es/Alert';

class AlertMessage extends React.Component {
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
		const { bsStyle, icon } = this.props;

		let iconTitle;
		if (icon) {
			iconTitle = icon
		} else {
			let iconClasses = classNames({				
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
				<Alert bsStyle={this.props.bsStyle} closeLabel={this.props.closeLabel} onDismiss={this.handleDismiss.bind(this)}>
					<strong>{ iconTitle } {this.props.title}</strong> {this.props.text}
				</Alert>
			)
		} else {
			return ( <div></div> )
		}
	}
}
export default AlertMessage;

AlertMessage.propTypes = {
	bsStyle: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string.isRequired
}
AlertMessage.defaultProps = {
	bsStyle: 'warning'
}