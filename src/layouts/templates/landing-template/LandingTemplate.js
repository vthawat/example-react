import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navbar, Row, Col } from 'react-bootstrap'
import Color from 'color'

import './LandingTemplate.css'

import engLogoImage from 'assets/img/eng-logo.png'
import psuPassportImage from './psu-passport.png'

const initialStates = {
	loginMode: true
}
class LandingTemplate extends Component {
	constructor(props) {
		super(props)

		this.state = initialStates
	}

	_handleClickFullContent() {		
		this.setState({
			loginMode: !this.state.loginMode
		})
	}

	_handleSubmit(e) {
		e.preventDefault()
	}

	render() {		
		const { loginMode } = this.state

		const darkenThemeColor = Color(this.props.themeColor).darken(0.1)
		const wrapperStyles = {
			backgroundColor: darkenThemeColor
		}
		const buttonLoginStyles = {
			backgroundColor: this.props.buttonLoginColor,
			color: this.props.buttonLoginTextColor
		}
		const colDescStyles = {
			backgroundColor: this.props.themeColor
		}
		const loginTitleStyles = {
			color: darkenThemeColor
		}

		return (
			<div className="wrapper" style={wrapperStyles}>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand href="#">
							<img src={this.props.navLogoUri} className="navbar-logo" alt="nav-logo" />							
						</Navbar.Brand>
					</Navbar.Header>
				</Navbar>				
				<div className="container">
					{
						!loginMode ? (
							<div className="dialog content">
								<div className="top-bar">
									<button 
										className="btn btn-danger btn-sm" 
										onClick={this._handleClickFullContent.bind(this)}
									>
										<span dangerouslySetInnerHTML={{__html: this.props.textButtonBackFullContent }} />
									</button>
								</div>
								{
									typeof this.props.fullContent === 'string' ? <p dangerouslySetInnerHTML={{__html: this.props.fullContent}}></p> : (										
										this.props.fullContent
									)
								}								
							</div>
						) : (
							<div className="dialog">
								<Row className="row-dialog">
									<Col md={6} className="col-dialog col-desc" style={colDescStyles}>
										<div className="pane pane-desc">
											<div>
												<img className="app-logo" src={this.props.appLogoUri} alt="app-logo" />			
												<h1 className="app-title">{this.props.appTitle}</h1>
												<p className="app-desc">{this.props.appDesc}</p>
											</div>
											{
												this.props.fullContent && (
													<button 
														className="pull-left btn btn-default btn-sm" 
														onClick={this._handleClickFullContent.bind(this)}
													>
														{this.props.textButtonFullContent}
													</button>
												)
											}											
											<span className="pull-right text-version">{`${this.props.versionLabel} ${this.props.version}`}</span>
										</div>								
									</Col>
									<Col md={6} className="col-dialog col-login">
										<div className="pane pane-login">											
											<form 
												method={this.props.loginMethod} 
												action={this.props.loginurl} 
												className="form-login"
												onSubmit={this._handleSubmit.bind(this)}
											> 
												<input type="hidden" name="app_id" value={this.props.appId} />
												<div className="section">
													<h3 className="login-title" style={loginTitleStyles}>{this.props.loginTitle}</h3>
													<p className="login-desc">{this.props.loginDesc}</p>
												</div>
												<div className="section info">
													<img className="img-psupassport" src={this.props.psuPassportImageUrl} alt="psu-passport" />
													<button className="btn btn-lg btn-block btn-login" style={buttonLoginStyles}>
														{this.props.textLoginButton}
													</button>
												</div>										
											</form>
										</div>
									</Col>
								</Row>
							</div>
						)
					}
					<div className="footer">
						<Row>
							<Col md={6}>
								{
									typeof this.props.textCredit === 'string' ? <div dangerouslySetInnerHTML={{ __html: this.props.textCredit}} /> : 	(
										this.props.textCredit
									)									
								}
							</Col>
							<Col md={6}>								
								{
									this.props.textContact && (
										<div className="contact">
											<span className="contact-title">{this.props.titleContact}</span>
											<span>{this.props.iconContact} {this.props.textContact}</span>
										</div>
									)
								}
							</Col>
						</Row>
					</div>									
				</div>				
			</div>
		)
	}
}
export default LandingTemplate;

PropTypes.LandingTemplate = {	
	navLogoUri: PropTypes.any.isRequired,
	appId: PropTypes.string.isRequired,	
	appLogoUri: PropTypes.any,
	appTitle: PropTypes.string.isRequired,
	appDesc: PropTypes.string.isRequired,
	fullContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	textButtonFullContent: PropTypes.string,
	textButtonBackFullContent: PropTypes.string,
	version: PropTypes.string,
	versionLabel: PropTypes.string,
	loginTitle: PropTypes.string,
	loginDesc: PropTypes.string,
	loginUrl: PropTypes.string.isRequired,
	loginMethod: PropTypes.string,	
	themeColor: PropTypes.string,	
	buttonLoginColor: PropTypes.string,
	buttonLoginTextColor: PropTypes.string,	
	textLoginButton: PropTypes.string,
	psuPassportImageUrl: PropTypes.string,
	textCredit: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	titleContact: PropTypes.string,
	textContact: PropTypes.string,
	iconContact: PropTypes.object
}
LandingTemplate.defaultProps = {
	navLogoUri: engLogoImage,
	textButtonFullContent: 'More Detail',
	textButtonBackFullContent: 'Back',
	version: '1.0',
	versionLabel: 'Ver.',
	loginMethod: 'GET',
	loginTitle: 'Welcome',	
	themeColor: '#c0392b',
	buttonLoginColor: '#3498db',
	buttonLoginTextColor: '#fff',	
	textLoginButton: 'Login',
	psuPassportImageUrl: psuPassportImage,
	textCredit: `<p>
				<b>ฝ่ายคอมพิวเตอร์ทางวิศวกรรมศาสตร์</b><br />คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์
			</p>`,
	titleContact: 'Contact',
	iconContact: <i className="fa fa-phone-square" />
}