import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class InfoBox extends React.Component {	
	
	render() {
		const { bsStyle, isBoxColor } = this.props;

		let boxClasses = classNames({
			'info-box': true,
			'bg-green': isBoxColor && (bsStyle === 'green' || bsStyle === 'success'),
			'bg-aqua': isBoxColor && (bsStyle === 'aqua' || bsStyle === 'info'),
			'bg-yellow':isBoxColor && (bsStyle === 'yellow' || bsStyle === 'warning'),
			'bg-red': isBoxColor && (bsStyle === 'red' || bsStyle === 'danger')
		});
		let boxIconClasses = classNames({
			'info-box-icon': true,
			'bg-green': !isBoxColor && (bsStyle === 'green' || bsStyle === 'success'),
			'bg-aqua': !isBoxColor && (bsStyle === 'aqua' || bsStyle === 'info'),
			'bg-yellow': !isBoxColor && (bsStyle === 'yellow' || bsStyle === 'warning'),
			'bg-red': !isBoxColor && (bsStyle === 'red' || bsStyle === 'danger')
		});
		return (
			<div className={boxClasses}>
				<span className={boxIconClasses}>
					{
						React.isValidElement(this.props.icon) ?
							this.props.icon:
							<span dangerouslySetInnerHTML={{ __html: this.props.icon}} />
					}
				</span>
				<div className="info-box-content">
					<span className="info-box-text">{ this.props.text }</span>
					<span className="info-box-number">{ this.props.number }</span>
				</div>
			</div>
		)	
	}
}
export default InfoBox;

InfoBox.propTypes = {
	bsStyle: PropTypes.string,
	icon: PropTypes.any,
	text: PropTypes.string,
	number: PropTypes.string,
	isBoxColor: PropTypes.bool
}
InfoBox.defaultProps = {
	isBoxColor: false
}