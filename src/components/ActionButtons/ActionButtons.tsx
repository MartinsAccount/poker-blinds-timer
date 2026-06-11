import { inject, observer } from 'mobx-react';
import React from 'react';
import SettingsSvg from '../../assets/SettingsSvg';
import StopWatchSvg from '../../assets/StopwatchSvg';
import TimeSvg from '../../assets/TimeSvg';
import { NIconButton } from '../../shared/neumorphic/NIconButton/NIconButton';
import { MainStore } from '../../stores/MainStore';
import './ActionButtons.css';

interface IActionButtonsProps {
	MainStore?: MainStore;
}

@inject('MainStore')
@observer
export class ActionButtons extends React.Component<IActionButtonsProps> {
	render() {
		const { MainStore } = this.props;

		return (
			<div className="actionButtonsContainer">
				<NIconButton isActive={MainStore.activeView === 'settings'} onClick={() => MainStore.setView('settings')}>
					{SettingsSvg(MainStore.activeView === 'settings')}
				</NIconButton>
				<NIconButton isActive={MainStore.activeView === 'stopwatch'} onClick={() => MainStore.setView('stopwatch')}>
					{StopWatchSvg(MainStore.activeView === 'stopwatch')}
				</NIconButton>
				<NIconButton isActive={MainStore.activeView === 'time'} onClick={() => MainStore.setView('time')}>
					{TimeSvg(MainStore.activeView === 'time')}
				</NIconButton>
			</div>
		);
	}
}
