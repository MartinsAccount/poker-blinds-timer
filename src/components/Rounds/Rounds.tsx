import { inject, observer } from 'mobx-react';
import React from 'react';
import './Rounds.css';
import { ROUNDS } from '../../constants/Rounds';
import { IRound, MainStore } from '../../stores/MainStore';

interface IRoundsProps {
	MainStore?: MainStore;
}

@inject('MainStore')
@observer
export class Rounds extends React.Component<IRoundsProps> {
	render() {
		const { MainStore } = this.props;

		return (
			<div className="roundsTable">
				{ROUNDS.map((round: IRound) => {
					return (
						<div
							onClick={() => MainStore.setActiveRound(round)}
							key={round.round}
							className={`round ${MainStore.activeRound?.round < round.round ? 'afterRounds' : ''}`}
						>
							<div>{round.round}.</div>
							<div>{round.bigBlind}</div>
							<div>{round.duration}p</div>
						</div>
					);
				})}
			</div>
		);
	}
}
