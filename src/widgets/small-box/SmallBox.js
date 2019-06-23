import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

class SmallBox extends React.Component {
	render() {
		const { bsStyle } = this.props;
		let boxClasses = classNames({
			'small-box': true,
			'bg-green': (bsStyle === 'green' || bsStyle === 'success'),
			'bg-aqua': (bsStyle === 'aqua' || bsStyle === 'info'),
			'bg-yellow': (bsStyle === 'yellow' || bsStyle === 'warning'),
			'bg-red': (bsStyle === 'red' || bsStyle === 'danger')
		});
		return (
			<div className={boxClasses}>
				<div className="inner">
					<h3>{this.props.title}</h3>
					<p>{this.props.text}</p>
				</div>
				<div className="icon">
				{
					React.isValidElement(this.props.icon) ?
						this.props.icon:
						<span dangerouslySetInnerHTML={{ __html: this.props.icon}} />
				}
				</div>
				{	
					this.props.footerLink && 
						<Link className="small-box-footer" to={this.props.footerLink} dangerouslySetInnerHTML={{ __html: this.props.footerText }} />
				}
			</div>
		)
	}
}
export default SmallBox;

SmallBox.propTypes = {
	bsStyle: PropTypes.string,
	icon: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,	
	footerText: PropTypes.string,
	footerLink: PropTypes.string
}
SmallBox.defaultProps = {
	footerText: 'More info <i className="fa fa-arrow-circle-right"></i>'
}