import React from 'react';
import { itemChartPrices } from '../utils/types';
import { Line } from 'react-chartjs-2';

interface Props {
	itemChartPrices: itemChartPrices[] | undefined;
}

const ItemsInfo: React.FC<Props> = ({ itemChartPrices }) => {
	return (
		<div className='grid gap-4 grid-cols-2 pt-8'>
			{itemChartPrices?.map((item, i) => (
				<div key={i} className='w-3/4 '>
					<Line
						data={{
							labels: item.data.timestamps,
							datasets: [
								{
									label: item.location,
									showLines: true,
									fill: false,
									lineTension: 0.1,
									backgroundColor: '#4D724D',
									borderColor: '#8DB48E',
									borderCapStyle: 'butt',
									borderDash: [],
									borderDashOffset: 0.0,
									borderJoinStyle: 'miter',
									pointBorderColor: '#4D724D',
									pointBackgroundColor: '#4D724D',
									pointBorderWidth: 1,
									pointHoverRadius: 5,
									pointHoverBackgroundColor: 'rgba(75,192,192,1)',
									pointHoverBorderColor: 'rgba(220,220,220,1)',
									pointHoverBorderWidth: 2,
									pointRadius: 1,
									pointHitRadius: 10,
									data: item.data.prices_avg,
								},
							],
						}}
					/>
				</div>
			))}
		</div>
	);
};

export default ItemsInfo;
