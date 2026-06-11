import { inject, observer } from 'mobx-react';
import React from 'react';
import './Rounds.css';
import { ROUNDS } from '../../constants/Rounds';
import { IRound, MainStore } from '../../stores/MainStore';
import { NTab } from '../../shared/neumorphic/NTab/NTab';
import { NTabsContainer } from '../../shared/neumorphic/NTabsContainer/NTabsContainer';

interface IRoundsProps {
	MainStore?: MainStore;
}

@inject('MainStore')
@observer
export class Rounds extends React.Component<IRoundsProps> {
	render() {
		const { MainStore } = this.props;

		return (
			// <div className="roundsTable">
			<NTabsContainer>
				{ROUNDS.map((round: IRound) => {
					return (
						<NTab
							onClick={() => MainStore.setActiveRound(round)}
							key={round.round}
							isActive={MainStore.activeRound?.round === round.round}
							style={round.round < MainStore.activeRound?.round && { color: '#c8d0e7' }}
						>
							<div className="tabContent">
								<div style={{ fontSize: '1rem' }}>{round.round}.</div>
								<div>{round.bigBlind}</div>
								{/* <div style={{ fontSize: '1.2rem' }}>{round.bigBlind}</div> */}
								<div style={{ fontSize: '1rem' }}>{round.duration}p</div>
							</div>
						</NTab>
					);
				})}
			</NTabsContainer>

			// </div>
		);
	}
}
