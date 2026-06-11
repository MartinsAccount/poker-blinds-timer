import React from 'react';
import './NTabsContainer.css';

interface INTabsContainerProps {
	children: any;
}

export class NTabsContainer extends React.Component<INTabsContainerProps> {
	render() {
		const { children } = this.props;

		return <div className="tabsContainer">{children}</div>;
	}
}
