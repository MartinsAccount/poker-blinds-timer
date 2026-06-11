import React from 'react';

interface INSwitchButtonProps {}

export class NSwitchButton extends React.Component<INSwitchButtonProps> {
	render() {
		return (
			// <div className="switch">
			<div className="switch">
				<input id="switch-1" type="checkbox" />
				<label htmlFor="switch-1"></label>
			</div>
			// </div>
		);
	}
}
