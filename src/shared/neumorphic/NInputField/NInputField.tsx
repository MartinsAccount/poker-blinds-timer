import classNames from 'classnames';
import React from 'react';
import './NInputField.css';

interface INInputFieldProps {
	onChange: (value: string) => void;
	value: any; // TODO
	placeholder?: string;
	style?: React.CSSProperties;
}

export class NInputField extends React.Component<INInputFieldProps> {
	static defaultProps = {
		// isActive: false
	};

	render() {
		const { style, onChange, placeholder, value } = this.props;

		const tabClasses = classNames({
			inputField: true
		});

		return (
			<input
				placeholder={placeholder}
				value={value}
				className={tabClasses}
				onChange={(e) => onChange(e.target.value)}
				style={{ ...style }}
			></input>
		);
	}
}
