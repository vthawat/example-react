import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, HelpBlock, Button, Image } from 'react-bootstrap';
import { IconFA, Glyphicon } from 'elements';

import './LoginBox.css';
import validateInput from './Validator';

class LoginBox extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			identifier: '',
			password: '',
			isLoading: false,
			errors: []
		}
		this.handleValueChange = this.handleValueChange.bind(this);		
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleValueChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const { errorIdentifier, errorPassword } = this.props;
		const { errors, isValid } = validateInput(this.state, errorIdentifier, errorPassword);

		if (!isValid) {
			this.setState({ errors })
		} else {
			this.setState({ 
				isLoading: true,
				errors: []
			 }, () => {				
				 setTimeout(() => {
					// Get authentication data
					const { identifier, password } = this.state;					
					console.log(identifier + ' ' + password);
				 }, 1000)				
			});	
		}		
	}

	render() {
		const { isLoading } = this.state;

		return (
			<div className="login-box">
				<div className="login-logo">
					{ this.props.appLogo && <Image className="app-logo" src={this.props.appLogo} />}
					<a className="app-name" dangerouslySetInnerHTML={{ __html: this.props.appName }} />
				</div>
				<div className="login-box-body">
					<p className="login-box-msg">{this.props.loginDesc}</p>
					<Form onSubmit={this.handleSubmit}>
						<FormGroup validationState={this.state.errors.identifier && 'error'}>
							<FormControl 
								name="identifier" 
								type="text" 
								placeholder={this.props.placeHolderIdentifier}								
								onChange={this.handleValueChange} />
							<Glyphicon glyph="envelop" className="form-control-feedback" />		
							<HelpBlock>{this.state.errors.identifier}</HelpBlock>
						</FormGroup>
						<FormGroup validationState={this.state.errors.password && 'error'}>		
							<FormControl 
								name="password" 
								type="password" 
								placeholder={this.props.placeHolderPassword}								
								onChange={this.handleValueChange} />
							<Glyphicon glyph="lock" className="form-control-feedback" />
							<HelpBlock>{this.state.errors.password}</HelpBlock>							
						</FormGroup>
						<div className="text-center">
							<Button type="submit" bsStyle="primary" disabled={isLoading}>
								{ isLoading && <IconFA name="circle-o-notch" className="fa-spin icon-button-loading" /> }
								{this.props.loginText}
							</Button>
						</div>
					</Form>
				</div>
			</div>
		)
	}
}
export default LoginBox;

LoginBox.propTypes = {
	appName: PropTypes.string.isRequired,
	appLogo: PropTypes.string,
	loginDesc: PropTypes.string,
	loginText: PropTypes.string.isRequired,
	placeHolderIdentifier: PropTypes.string,
	placeHolderPassword: PropTypes.string,
	errorIdentifier: PropTypes.string.isRequired,
	errorPassword: PropTypes.string.isRequired
}
LoginBox.defaultProps = {
	loginDesc: "Sign in with PSU Passport",
	loginText: "Sign in",
	placeHolderIdentifier: "Email",
	placeHolderPassword: "Password",
	errorIdentifier: 'Email is required',
	errorPassword: 'Password is required'
}