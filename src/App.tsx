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
