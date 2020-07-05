import React from 'react';
import './styles/main.css';
import getProfitPerFocus from './utils/Formulas';
import Refiner from './components/Refiner';

const App: React.FC = () => {
	/*console.log(
		getProfitPerFocus({
			item: 'T8_WOOD_LEVEL1@1',
			craftFee: 0.13,
			rawMinPrice: 10597,
			refMinPrice: 15683,
			refWantedMinPrice: 39300,
			mySpec: {
				spect4: 100,
				spect5: 100,
				spect6: 100,
				spect7: 100,
				spect8: 100,
			},
			marketTax: 0.03,
			returnRate: 0.54,
		}),
		'teste'
	);*/

	return (
		<div className='text-gray-800 m-4 p-4'>
			<Refiner />
		</div>
	);
};

export default App;
