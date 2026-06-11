import React, { Component } from 'react';

export default class NClock extends Component {
	render() {
		return (
			<div className="clock">
				<div className="hand hours"></div>
				<div className="hand minutes"></div>
				<div className="hand seconds"></div>
				<div className="point"></div>
				<div className="marker">
					<span className="marker__1"></span>
					<span className="marker__2"></span>
					<span className="marker__3"></span>
					<span className="marker__4"></span>
				</div>
			</div>
		);
	}
}
