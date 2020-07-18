import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Refiner from './pages/Refiner';
import MarketInfo from './pages/MarketInfo';
import NavBar from './layout/NavBar';
import { AnimatePresence } from 'framer-motion';
import Footer from './layout/Footer';

const Routes: React.FC = () => {
	const location = useLocation();
	return (
		<>
			<NavBar />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.key}>
					<Route path='/' exact component={Refiner} />
					<Route path='/marketinfo' component={MarketInfo} />
				</Switch>
			</AnimatePresence>
			<Footer />
		</>
	);
};

export default Routes;
