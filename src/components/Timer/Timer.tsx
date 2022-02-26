import { inject, observer } from 'mobx-react';
import React from 'react';
import ChipSvg from '../../assets/ChipSvg';
import { MainStore } from '../../stores/MainStore';
import './Timer.css';

interface ITimerProps {
	MainStore?: MainStore;
}

@inject('MainStore')
@observer
export class Timer extends React.Component<ITimerProps> {
	render() {
		const { MainStore } = this.props;
		const { time, showWarning } = MainStore;

		return (
			<div>
				<div className={`timer ${showWarning ? 'warning' : ''}`}>
					<div className="time">
						{time.minutes}:{time.seconds}
					</div>
					{MainStore.activeRound?.bigBlind && (
						<div className="blinds">
							{MainStore.activeRound.bigBlind / 2}/{MainStore.activeRound?.bigBlind}
						</div>
					)}
					<div className="buttonContainer">
						<button className="startButton" onClick={() => MainStore.startTimer()}>
							Start
						</button>
						<button className="startButton" onClick={() => MainStore.stopTimer()}>
							Stop
						</button>
					</div>
					<div>
						<ChipSvg />
					</div>
				</div>
			</div>
		);
	}
}
