import React from 'react';
import { itemChartPrices } from '../utils/types';
import '../styles/main.css';
import SearchBar from './layout/SearchBar';
import ItemsInfo from './ItemsInfo';
import CircularProgress from '@material-ui/core/CircularProgress';
import { motion, AnimatePresence } from 'framer-motion';
import { useApi } from './useApi';

const variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delay: 0.5,
		},
	},
};
const containerVariants = {
	hidden: { x: '100vw' },
	visible: {
		x: '0',
		transition: {
			type: 'spring',
			stiffness: 70,
			delay: 0.5,
		},
	},
	exit: { x: '-100vw', transition: { ease: 'easeInOut' } },
};

const MarketInfo: React.FC = () => {
	const [searchTerm, setSearchTerm] = React.useState<string | undefined>('');
	const [loading, setLoading] = React.useState<boolean>(false);
	const { data, isValidating } = useApi<itemChartPrices[]>(searchTerm);
	return (
		<motion.div
			variants={containerVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
			className='m-4 p-4'>
			<h1 className='text-6xl font-bold text-green-1100 text-center'>Market</h1>
			<SearchBar setLoading={setLoading} setSearchTerm={setSearchTerm} />

			{loading && isValidating ? (
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
						<ItemsInfo itemChartPrices={data} />
					</motion.div>
				</AnimatePresence>
			)}
		</motion.div>
	);
};

export default MarketInfo;
