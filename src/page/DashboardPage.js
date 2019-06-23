import React from 'react';
import { Content } from 'layouts';
import { AppButton, BlockButton, Button, Modal } from 'elements';
import { DateTimePicker } from 'elements';

class DashboardPage extends React.Component {

	render() {
		const breadcrumbs = [
			{ text: 'Dashboard', link: '/dashboard', active: true }
		]
		return (
			<Content title="Dashboard" subTitle="Preview" breadcrumb={breadcrumbs}>				
				<Button>Click</Button>
				<AppButton>Test</AppButton>
				<BlockButton>Test Flat</BlockButton>
				<DateTimePicker />
			</Content>
		)
	}
}
export default DashboardPage;