import React from 'react';
import './styles/main.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';

const App: React.FC = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Router>
				<Routes />
			</Router>
		</div>
	);
};

export default App;

// ttps://www.albion-online-data.com/api/v2/stats/Prices/T3_ROCK%2CT4_ROCK%2CT5_ROCK%2CT6_ROCK%2CT7_ROCK%2CT8_ROCK?locations=${city}
