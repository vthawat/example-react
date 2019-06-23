import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'elements';

class Content extends React.Component {
	render() {
		return (
			<div>
				<section className="content-header">
					<h1>{ this.props.title } { this.props.subTitle && <small>{ this.props.subTitle }</small> }</h1>
					{
						this.props.breadcrumb && 
							<Breadcrumb>
								{
									this.props.breadcrumb.map((item, index) => {
										return (
											<Breadcrumb.Item key={index} href={item.link} active={item.active}>
												{item.text}
											</Breadcrumb.Item>
										)
									})
								}
							</Breadcrumb>						
					}
				</section>
				<section className="content">
					{this.props.children}
				</section>
			</div>
		)
	}
}
export default Content;

Content.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
	showHome: PropTypes.bool,
	homeLink: PropTypes.string,
	breadcrumb: PropTypes.array
}
