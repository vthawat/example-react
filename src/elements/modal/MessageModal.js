import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Modal from 'react-bootstrap/es/Modal';
import Button from 'react-bootstrap/es/Button';

class MessageModal extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleOpen() {
		this.setState({ showModal: true });
	}

	handleClose() {
		this.setState({ showModal: false });
	}

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
				<Button 
					bsStyle={this.props.buttonOpenStyle}
					bsSize={this.props.buttonOpenSize}
					onClick={this.handleOpen}>{this.props.buttonOpenText}</Button>
				<Modal show={this.state.showModal} onHide={this.handleClose} className={modalClasses}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p dangerouslySetInnerHTML={{__html: this.props.message}} />
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
export default MessageModal;

MessageModal.propTypes = {
	bsStyle: PropTypes.string,
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	buttonOpenText: PropTypes.string.isRequired,
	buttonOpenStyle: PropTypes.string,
	buttonOpenSize: PropTypes.string,
	buttonCloseText: PropTypes.string.isRequired,
	buttonCloseStyle: PropTypes.string,
	buttonCloseSize: PropTypes.string
}
MessageModal.defaultProps = {
	buttonOpenText: 'Open',
	buttonOpenStyle: 'primary',
	buttonCloseText: 'Close',
	buttonCloseStyle: 'danger'
}