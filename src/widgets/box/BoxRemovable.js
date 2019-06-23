import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

class BoxRemovable extends React.Component {
	render() {
		const { title, bsStyle, solid, loading, showBorder, footerContent } = this.props;
		return (
			<Box bsStyle={bsStyle} solid={solid} loading={loading}>
				<Box.Header title={title} removable={true} showBorder={showBorder} />
				<Box.Body>
					{ this.props.children }
				</Box.Body>
				{	footerContent && <Box.Footer>{footerContent}</Box.Footer>	}
			</Box>
		)
	}
}
export default BoxRemovable

BoxRemovable.propTypes = {
	footerContent: PropTypes.element
}