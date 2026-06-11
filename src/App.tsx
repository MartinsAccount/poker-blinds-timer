import React from 'react';
import './App.css';
import { MainStore } from './stores/MainStore';
import { Provider } from 'mobx-react';
import { Timer } from './components/Timer/Timer';
import { Rounds } from './components/Rounds/Rounds';

class App extends React.Component {
	private stores = { MainStore: new MainStore() };

	render() {
		return (
			<Provider {...this.stores}>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
					<Rounds />
					<Timer />
				</div>
			</Provider>
		);
	}
}

export default App;
