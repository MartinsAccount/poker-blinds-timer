import { action, flow, observable } from 'mobx';
import { ROUNDS } from '../constants/Rounds';

export interface IRound {
	round: number;
	bigBlind: number;
	duration: number;
}

export class MainStore {
	@observable timer: NodeJS.Timer;
	@observable timerStopped: boolean;
	@observable showWarning: boolean = false;

	@observable time = {
		hours: 0,
		minutes: 15,
		seconds: 0
	};

	@observable activeRound: IRound;

	@action startTimer() {
		if (!this.activeRound) {
			this.countDown(1);
		} else if (this.activeRound && this.timerStopped) {
			this.countDown(this.activeRound.round, true);
		}
	}

	@action stopTimer() {
		clearInterval(this.timer);
		this.timerStopped = true;
	}

	@action changeTime() {
		const currentTime = { ...this.time };

		if (currentTime.minutes === 0 && currentTime.seconds === 0) {
			clearInterval(this.timer);
			this.countDown(this.activeRound.round + 1);
			return;
		}
		if (currentTime.minutes === 0 && currentTime.seconds === 30) {
			this.showWarning = true;
			setTimeout(() => (this.showWarning = false), 30 * 1000);
		}

		if (currentTime.seconds === 0) {
			currentTime.seconds = 59;
			currentTime.minutes = currentTime.minutes - 1;
		} else {
			currentTime.seconds = currentTime.seconds - 1;
		}

		this.time = { ...currentTime };
	}

	countDown = flow(function* (this: MainStore, nextRound: number, fromPuase: boolean = false) {
		// const increaseHourRound = [4, 10, 15, 20, 24];
		// if (increaseHourRound.includes(currentRound.round)) this.time.hours += 1;

		const currentRound = yield ROUNDS.find((round) => round.round === nextRound);
		this.activeRound = currentRound;

		if (!fromPuase) {
			this.time.minutes = currentRound.duration - 1;
			this.time.seconds = 60;
		}

		this.timerStopped = false;
		this.timer = setInterval(() => {
			this.changeTime();
		}, 1000);
	});
}
