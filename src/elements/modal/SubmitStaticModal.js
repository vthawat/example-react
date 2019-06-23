import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Modal from 'react-bootstrap/es/Modal';
import Button from 'react-bootstrap/es/Button';

class SubmitStaticModal extends React.Component {

	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}
	
	handleSubmit() {
		this.props.onSubmit();
	}

	handleCancel() {
		this.props.onCancel();
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
				<Modal show={this.props.show} className={modalClasses} onHide={this.handleCancel}>
					<Modal.Header closeButton={true}>
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
export default SubmitStaticModal;

SubmitStaticModal.propTypes = {
	bsStyle: PropTypes.string,
	show: PropTypes.bool,
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	buttonSubmitText: PropTypes.string.isRequired,
	buttonSubmitStyle: PropTypes.string,
	buttonSubmitSize: PropTypes.string,
	buttonCancelText: PropTypes.string.isRequired,
	buttonCancelStyle: PropTypes.string,
	buttonCancelSize: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired
}
SubmitStaticModal.defaultProps = {
	show: false,
	buttonSubmitText: 'Submit',
	buttonSubmitStyle: 'primary',
	buttonCancelText: 'Close',
	buttonCancelStyle: 'danger'
}