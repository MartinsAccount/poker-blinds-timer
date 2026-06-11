import classNames from 'classnames';
import React, { Component } from 'react';
import './NCustomButton.css';

interface INCustomButtonProps {
	title: string;
	onClick: () => void;
	type: 'primary' | 'secondary';
}

export default class NCustomButton extends Component<INCustomButtonProps> {
	static defaultProps /*: Partial<INCustomButtonProps> */ = {
		type: 'primary'
	};

	render() {
		const { title, onClick, type } = this.props;

		const buttonClasses = classNames({
			btn: true,
			[`btn-${type}`]: true
		});
		console.log('🚀 ~ file: NCustomButton.tsx:22 ~ NCustomButton ~ render ~ buttonClasses', buttonClasses);

		return (
			<div onClick={onClick} className={buttonClasses}>
				<p>{title}</p>
			</div>
		);
	}
}
