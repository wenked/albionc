import React from 'react';
import { itemChartPrices } from '../utils/types';
import '../styles/main.css';
import SearchBar from './layout/SearchBar';
import ItemsInfo from './ItemsInfo';
import CircularProgress from '@material-ui/core/CircularProgress';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delay: 0.5,
		},
	},
	exit: { opacity: 0 },
};

const MarketInfo: React.FC = () => {
	const [itemsChartPrices, setItemsChartPrices] = React.useState<
		itemChartPrices[]
	>();
	const [loading, setLoading] = React.useState<boolean>(false);
	return (
		<div className='m-4 p-4'>
			<h1 className='text-6xl font-bold text-green-1100 text-center'>Market</h1>
			<SearchBar
				setLoading={setLoading}
				setItemsChartPrices={setItemsChartPrices}
			/>

			{loading ? (
				<div className='p-4'>
					<CircularProgress />
				</div>
			) : (
				<AnimatePresence>
					<motion.div
						initial='hidden'
						animate='visible'
						exit='exit'
						variants={variants}>
						<ItemsInfo itemChartPrices={itemsChartPrices} />
					</motion.div>
				</AnimatePresence>
			)}
		</div>
	);
};

export default MarketInfo;
