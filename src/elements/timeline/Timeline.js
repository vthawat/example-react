import React from 'react';
// s
class Timeline extends React.Component {
	render() {
		return (
			<ul className="timeline">{this.props.children}</ul>
		)
	}
}
export default Timeline;