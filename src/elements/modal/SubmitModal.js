import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Modal from 'react-bootstrap/es/Modal';
import Button from 'react-bootstrap/es/Button';

class SubmitModal extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}
		this.handleOpen = this.handleOpen.bind(this);
		this.handleCancel= this.handleCancel.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleOpen() {
		this.setState({ showModal: true });
	}

	handleCancel() {
		this.setState({ showModal: false });
	}

	handleSubmit() {
		this.props.onSubmit().then(() => {
			this.setState({ showModal: false });
		});
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
					bsStyle={this.props.buttonSubmitStyle}
					bsSize={this.props.buttonSubmitSize}
					onClick={this.handleOpen}>{this.props.buttonSubmitText}</Button>
				<Modal show={this.state.showModal} onHide={this.handleCancel} className={modalClasses}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{this.props.message}
					</Modal.Body>
					<Modal.Footer>
						<Button
							bsStyle={this.props.buttonSubmitStyle}
							bsSize={this.props.buttonSubmitSize}
							onClick={this.handleSubmit}>{this.props.buttonSubmitText}</Button>
						<Button 
							bsStyle={this.props.buttonCancelStyle}
							bsSize={this.props.buttonCancelSize}
							onClick={this.handleCancel}>{this.props.buttonCancelText}</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}
export default SubmitModal;

SubmitModal.propTypes = {
	bsStyle: PropTypes.string,
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	buttonSubmitText: PropTypes.string.isRequired,
	buttonSubmitStyle: PropTypes.string,
	buttonSubmitSize: PropTypes.string,
	buttonOpenText: PropTypes.string.isRequired,
	buttonOpenStyle: PropTypes.string,
	buttonOpenSize: PropTypes.string,
	buttonCancelText: PropTypes.string.isRequired,
	buttonCancelStyle: PropTypes.string,
	buttonCancelSize: PropTypes.string,
	onSubmit: PropTypes.func.isRequired
}
SubmitModal.defaultProps = {
	buttonSubmitText: 'Submit',
	buttonSubmitStyle: 'primary',
	buttonOpenText: 'Open',
	buttonOpenStyle: 'primary',
	buttonCancelText: 'Close',
	buttonCancelStyle: 'danger'
}