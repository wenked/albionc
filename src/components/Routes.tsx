import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Refiner from './Refiner';
import MarketInfo from './MarketInfo';
import NavBar from './layout/NavBar';
import { AnimatePresence } from 'framer-motion';
// import { Container } from './styles';

const Routes: React.FC = () => {
	return (
		<AnimatePresence>
			<NavBar />
			<Switch>
				<Route path='/' exact component={Refiner} />
				<Route path='/marketinfo' component={MarketInfo} />
			</Switch>
		</AnimatePresence>
	);
};

export default Routes;
