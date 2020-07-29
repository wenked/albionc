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
