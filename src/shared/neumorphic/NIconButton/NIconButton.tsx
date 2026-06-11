import classNames from 'classnames';
import React, { Component } from 'react';
import './NIconButton.css';

interface INIconButtonProps {
	onClick: () => void;
	isActive: boolean;
	children: React.ReactNode;
}

export class NIconButton extends Component<INIconButtonProps> {
	static defaultProps /*: Partial<INIconButtonProps> */ = {
		isActive: false
	};

	render() {
		const { onClick, children, isActive } = this.props;

		const buttonClasses = classNames({
			iconButton: true,
			'iconButton-active': isActive
		});

		return (
			<div onClick={onClick} className={buttonClasses}>
				{children}
			</div>
		);
	}
}
