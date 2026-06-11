import { inject, observer } from 'mobx-react';
import React from 'react';
import ChipSvg from '../../assets/ChipSvg';
import NCustomButton from '../../shared/neumorphic/NCustomButton/NCustomButton';
import { MainStore } from '../../stores/MainStore';
import { ActionButtons } from '../ActionButtons/ActionButtons';
import { EditRounds } from '../EditRounds/EditRounds';
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
			<div className={`container ${showWarning ? 'warning' : ''}`}>
				{MainStore.activeView === 'settings' && <EditRounds />}

				{MainStore.activeView === 'stopwatch' && (
					<div className={`timer`}>
						<div className="time">
							{time.minutes}:{time.seconds}
						</div>
						{MainStore.activeRound?.bigBlind && (
							<div className="blinds">
								{MainStore.activeRound.bigBlind / 2}/{MainStore.activeRound?.bigBlind}
							</div>
						)}
						<div className="buttonContainer">
							<NCustomButton onClick={() => MainStore.startTimer()} title="Start" />
							<NCustomButton onClick={() => MainStore.stopTimer()} title="Stop" type="secondary" />
						</div>
					</div>
				)}

				<ActionButtons />
			</div>
		);
	}
}
