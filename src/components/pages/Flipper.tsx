import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { formatedItems } from '../../utils/formatedItems';
import { ConvertDate } from '../../utils/Formulas';
import { itemChartPrices, itemPriceData } from '../../utils/types';
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
	//const [blackMarketPrice, setBlackMarketPrice] = useState<itemPriceData[]>();
	console.log(data);
	let bmItem: itemPriceData[];
	if (data) {
		bmItem = data.filter(
			(itemData: itemPriceData) => itemData.city === 'Black Market'
		);
		//setBlackMarketPrice(bmItem);
	}
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
			{searchTerm !== undefined ? (
				<div className='p-4 m-4 inline-flex'>
					<img
						alt='item-img'
						src={`https://render.albiononline.com/v1/item/${searchTerm}?size=45`}
					/>
					<h2>{formatedItems[searchTerm]}</h2>
				</div>
			) : null}
			{isValidating && loading
				? 'Loading...'
				: data?.map((iteminfo, key) => {
						return (
							<div className='m-4 p-4' key={key}>
								{iteminfo.city !== 'Black Market' ? (
									<div>
										<div>{iteminfo.city}</div>
										<div>
											{iteminfo.sell_price_min
												.toFixed(1)
												.replace(/\d(?=(\d{3})+\.)/g, '$&,')}
										</div>
										<div>{ConvertDate(iteminfo.buy_price_min_date)}</div>
									</div>
								) : (
									<div>
										<h3>{iteminfo.city}</h3>
										<h4>{iteminfo.buy_price_max}</h4>
									</div>
								)}

								<div>
									{iteminfo.city !== 'Black Market' && bmItem ? (
										<div>
											<h1 className='font-bold'>Profit </h1>
											<h2
												className={
													bmItem[0].buy_price_max - iteminfo.sell_price_min > 0
														? 'text-green-700 font-semibold'
														: 'text-red-500 font-semibold'
												}>
												{iteminfo.sell_price_min !== 0
													? bmItem[0].buy_price_max - iteminfo.sell_price_min
													: null}
											</h2>
										</div>
									) : null}
								</div>
							</div>
						);
				  })}
		</motion.div>
	);
};

export default Flipper;
