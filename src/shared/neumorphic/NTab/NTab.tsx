import classNames from 'classnames';
import React from 'react';
import './NTab.css';

interface INTabProps {
	isActive: boolean;
	children: React.ReactNode;
	onClick: () => void;
	style?: React.CSSProperties;
}

export class NTab extends React.Component<INTabProps> {
	static defaultProps = {
		isActive: false
	};

	render() {
		const { isActive, children, onClick, style } = this.props;

		const tabClasses = classNames({
			tab: true,
			[`tab-active`]: isActive
		});

		return (
			<>
				<div onClick={onClick} className={tabClasses} style={{ ...style }}>
					{children}
				</div>

				{/* <div className="segmented-control">
					<input type="radio" name="radio2" value="3" id="tab-1" checked />
					<label htmlFor="tab-1" className="segmented-control__1">
						<p>Tab 1</p>
					</label>

					<input type="radio" name="radio2" value="4" id="tab-2" />
					<label htmlFor="tab-2" className="segmented-control__2">
						<p>Tab 2</p>
					</label>

					<input type="radio" name="radio2" value="5" id="tab-3" />
					<label htmlFor="tab-3" className="segmented-control__3">
						<p>Tab 3</p>
					</label>

					<div className="segmented-control__color"></div>
				</div> */}
			</>
		);
	}
}
