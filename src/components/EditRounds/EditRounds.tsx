import { inject, observer } from 'mobx-react';
import React from 'react';
import { ROUNDS } from '../../constants/Rounds';
import { NInputField } from '../../shared/neumorphic/NInputField/NInputField';
import { IRound, MainStore } from '../../stores/MainStore';
import './EditRounds.css';

interface IEditRoundsProps {
	MainStore?: MainStore;
}

@inject('MainStore')
@observer
export class EditRounds extends React.Component<IEditRoundsProps> {
	render() {
		const { MainStore } = this.props;

		return (
			<div className={`editRoundsContainer`}>
				{ROUNDS.map((round: IRound) => {
					return <NInputField value={round.bigBlind} onChange={(value) => MainStore.editRound(round, value)} />;
				})}
			</div>
		);
	}
}
