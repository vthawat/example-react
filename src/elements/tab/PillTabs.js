import Tabs from 'react-bootstrap/es/Tabs';

const PillTabs = Tabs;
PillTabs.defaultProps = {
	id: 'pill-tabs',
	className: 'nav-tabs-custom',
	bsStyle: 'pills'
}
export default PillTabs;