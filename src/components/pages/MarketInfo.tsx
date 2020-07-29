import React from 'react';
import { itemChartPrices } from '../../utils/types';
import '../../styles/main.css';
import SearchBar from '../layout/SearchBar';
import ItemsGraph from '../Market/ItemsGraph';
import CircularProgress from '@material-ui/core/CircularProgress';
import { motion } from 'framer-motion';
import { useMarketApi } from '../../utils/useMarketApi';
import ItemsInfo from '../Market/ItemsInfo';

/*const containerVariants = {
	hidden: { x: '100vw' },
	visible: {
		x: '0',
		transition: {
			type: 'spring',
			stiffness: 70,
			delay: 0.5,
		},
	},
	exit: { x: '-100vh', transition: { ease: 'easeInOut' } },
};*/

const fadeVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delay: 1,
			duration: 1,
		},
	},
};

const MarketInfo: React.FC = () => {
	const [searchTerm, setSearchTerm] = React.useState<string | undefined>('');
	const [loading, setLoading] = React.useState<boolean>(false);
	const { data, isValidating } = useMarketApi<itemChartPrices[]>(searchTerm);
	return (
		<motion.div
			variants={fadeVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
			className='m-4 p-4'>
			<h1 className='text-6xl font-bold text-green-1100 text-center'>Market</h1>
			<SearchBar setLoading={setLoading} setSearchTerm={setSearchTerm} />

			{loading && isValidating ? (
				<div className='p-4'>
					<CircularProgress />
				</div>
			) : (
				<motion.div
					initial='hidden'
					animate='visible'
					variants={fadeVariants}
					className='pt-4	'>
					<ItemsInfo itemChartPrices={data} itemName={searchTerm} />
					<ItemsGraph itemChartPrices={data} />
				</motion.div>
			)}
		</motion.div>
	);
};

export default MarketInfo;
