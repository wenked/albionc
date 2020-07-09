import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Refiner from './Refiner';
import MarketInfo from './MarketInfo';
import NavBar from './layout/NavBar';
import { AnimatePresence } from 'framer-motion';
// import { Container } from './styles';

const Routes: React.FC = () => {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<NavBar />
			<Switch location={location} key={location.key}>
				<Route path='/' exact component={Refiner} />
				<Route path='/marketinfo' component={MarketInfo} />
			</Switch>
		</AnimatePresence>
	);
};

export default Routes;
