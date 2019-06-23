import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Modal from 'react-bootstrap/es/Modal';
import Button from 'react-bootstrap/es/Button';

class MessageStaticModal extends React.Component {
	
	render() {
		const { bsStyle } = this.props;
		const modalClasses = classNames({
			'modal-success': bsStyle === 'success',
			'modal-danger': bsStyle === 'danger',
			'modal-warning': bsStyle === 'warning',
			'modal-info': bsStyle === 'info',
			'modal-primary': bsStyle === 'primary'
		});
		return (
			<div>
				<Modal show={this.props.show} className={modalClasses}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>{this.props.message}</p>
					</Modal.Body>
					<Modal.Footer>
						<Button 
							bsStyle={this.props.buttonCloseStyle}
							bsSize={this.props.buttonCloseSize}
							onClick={this.handleClose}>{this.props.buttonCloseText}</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}
export default MessageStaticModal;

MessageStaticModal.propTypes = {
	bsStyle: PropTypes.string,
	show: PropTypes.bool,
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	buttonCloseText: PropTypes.string.isRequired,
	buttonCloseStyle: PropTypes.string,
	buttonCloseSize: PropTypes.string
}
MessageStaticModal.defaultProps = {
	show: false,
	buttonCloseText: 'Close',
	buttonCloseStyle: 'danger'
}