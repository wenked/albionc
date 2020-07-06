import React from 'react';
import { Typography } from '@material-ui/core';
import { itemChartPrices } from '../utils/types';
import '../styles/main.css';
import SearchBar from './layout/SearchBar';
import ItemsInfo from './ItemsInfo';

const MarketInfo: React.FC = () => {
	const [itemsChartPrices, setItemsChartPrices] = React.useState<
		itemChartPrices[]
	>();
	return (
		<div>
			<Typography variant='h3' align='center'>
				Teste
			</Typography>
			<SearchBar setItemsChartPrices={setItemsChartPrices} />
			<ItemsInfo itemChartPrices={itemsChartPrices} />
		</div>
	);
};

export default MarketInfo;
