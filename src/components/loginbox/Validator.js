import isEmpty from 'lodash/isEmpty';

export default function validateInput(data, errorIdentifier, errorPassword) {
	let errors = {};

	if (isEmpty(data.identifier)){
		errors.identifier = errorIdentifier;
	}
	if (isEmpty(data.password)) {
		errors.password = errorPassword;
	}
	return {
		errors,
		isValid: isEmpty(errors)
	}
}