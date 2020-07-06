import React from 'react';
import './styles/main.css';
import Refiner from './components/Refiner';

const App: React.FC = () => {
	return (
		<div className='text-gray-800 m-4 p-4'>
			<Refiner />
		</div>
	);
};

export default App;

// ttps://www.albion-online-data.com/api/v2/stats/Prices/T3_ROCK%2CT4_ROCK%2CT5_ROCK%2CT6_ROCK%2CT7_ROCK%2CT8_ROCK?locations=${city}
