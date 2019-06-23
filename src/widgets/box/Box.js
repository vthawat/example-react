import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Box extends React.Component {
	render() {
		const { bsStyle, solid } = this.props;

		let boxClasses = classNames({
			'box': true,
			'box-success': bsStyle === 'success',
			'box-primary': bsStyle === 'primary',
			'box-danger': bsStyle === 'danger',
			'box-warning': bsStyle === 'warning',
			'box-solid': solid
		})
		return (
			<div className={ boxClasses }>
				{ this.props.children }
				{ this.props.loading && <div className="overlay"><i className="fa fa-refresh fa-spin"></i></div> }
			</div>
		)
	}
}
export default Box;

Box.propTypes = {
	bsStyle: PropTypes.string,	
	solid: PropTypes.bool,
	loading: PropTypes.bool
}
Box.defaultProps = {
	solid: false,
	loading: false
}

/**
 * Box Header 
 */
Box.Header = (props) => {
	let boxClasses = classNames({		
		'box-header': true,
		'with-border': props.showBorder
	});
	return (
		<div className={boxClasses}>
			<h3 className="box-title">{props.title}</h3>
			{
				(props.collapsable || props.removable) &&
					<div className="box-tools pull-right">
						{ props.collapsable && <button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button> }
						{ props.removable && <button className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>}
					</div>
			}
		</div>	
	)
}
Box.Header.propTypes = {
	title: PropTypes.string,
	showBorder: PropTypes.bool,
	collapsable: PropTypes.bool,
	removable: PropTypes.bool
}
Box.Header.defaultProps = {
	showBorder: false,
	collapsable: false,
	removable: false
}

/**
 * Box Body 
 */
Box.Body = (props) => {		
	return (
		<div className="box-body">			
			{ props.children }			
		</div>
	)
}

/**
 *  Box Footer 
 */
Box.Footer = (props) => {
	return (
		<div className="box-footer">
			{ props.children }
		</div>
	)
}