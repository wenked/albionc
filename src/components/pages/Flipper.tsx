import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ConvertDate } from '../../utils/Formulas';
import { itemPriceData } from '../../utils/types';
import { useMarketFlipperApi } from '../../utils/useMarketFlipperApi';
import SearchBar from '../layout/SearchBar';

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

const Flipper: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState<string | undefined>('');
	const [loading, setLoading] = useState(false);
	const [quality, setQuality] = useState(1);
	const { data, isValidating } = useMarketFlipperApi<itemPriceData[]>(
		searchTerm,
		quality
	);
	console.log(data);
	return (
		<motion.div
			variants={fadeVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'>
			<h1 className='text-6xl font-bold text-green-1100 text-center'>
				Flipper
			</h1>

			<SearchBar
				withQuality={true}
				quality={quality}
				setQuality={setQuality}
				setLoading={setLoading}
				setSearchTerm={setSearchTerm}
			/>
			{isValidating && loading
				? 'Loading...'
				: data?.map((iteminfo) => {
						return (
							<div className='m-4 p-4'>
								<div>{iteminfo.city}</div>
								<div>
									{iteminfo.sell_price_max
										.toFixed(1)
										.replace(/\d(?=(\d{3})+\.)/g, '$&,')}
								</div>
								<div>{ConvertDate(iteminfo.sell_price_max_date)}</div>
							</div>
						);
				  })}
		</motion.div>
	);
};

export default Flipper;
