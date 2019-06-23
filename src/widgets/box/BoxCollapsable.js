import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

class BoxCollapsable extends React.Component {
	render() {
		const { title, bsStyle, solid, loading, showBorder, footerContent } = this.props;
		return (
			<Box bsStyle={bsStyle} solid={solid} loading={loading}>
				<Box.Header title={title} collapsable={true} showBorder={showBorder} />
				<Box.Body>
					{ this.props.children }
				</Box.Body>
				{	footerContent && <Box.Footer>{footerContent}</Box.Footer>	}
			</Box>
		)
	}
}
export default BoxCollapsable

BoxCollapsable.propTypes = {
	footerContent: PropTypes.element
}