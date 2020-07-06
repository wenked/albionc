import React from 'react';
import { itemChartPrices } from '../utils/types';

interface Props {
	itemChartPrices: itemChartPrices[] | undefined;
}

const ItemsInfo: React.FC<Props> = ({ itemChartPrices }) => {
	return (
		<div>
			{itemChartPrices?.map((item, i) => (
				<div key={i}>
					<p>{item.location}</p>
				</div>
			))}
		</div>
	);
};

export default ItemsInfo;
