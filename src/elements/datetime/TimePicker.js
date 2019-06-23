import React from 'react';
//import $ from 'jquery';
import 'bootstrap-timepicker/js/bootstrap-timepicker.min.js';
import 'bootstrap-timepicker/css/bootstrap-timepicker.min.css';

class TimePicker extends React.Component {

	componentDidMount() {
		//$(this.refs.timepicker).timepicker();
	}

	render() {		
		return (			
			<input type="text" ref="timepicker" />			
		)
	}
}
export default TimePicker;