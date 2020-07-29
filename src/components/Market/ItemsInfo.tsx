import React from 'react';
import { formatedItems } from '../../utils/formatedItems';
import { itemChartPrices } from '../../utils/types';
import '../../styles/main.css';

interface Props {
	itemChartPrices: itemChartPrices[] | undefined;
	itemName: string | undefined;
}

//https://render.albiononline.com/v1/item/T5_2H_COMBATSTAFF_MORGANA@2?size=35

const ItemsInfo: React.FC<Props> = ({ itemChartPrices, itemName }) => {
	const LatestPrices = itemChartPrices?.map((itemData) => {
		const LastElement = itemData.data.prices_avg.length - 1;
		return (
			<div>
				<h4 className='text-green-1000 font-semibold'>{itemData.location}</h4>
				<h5 className='text-sm'>
					Recent Price :
					<span className='font-semibold text-green-1100 text-base '>
						{' '}
						{itemData.data.prices_avg[LastElement]}
					</span>
				</h5>
				<h5 className='text-sm'>
					Recent Item Count :
					<span className='font-semibold text-green-1100  text-base'>
						{' '}
						{itemData.data.item_count[LastElement]}
					</span>{' '}
				</h5>
				<h5 className='text-sm'>
					Time :
					<span className='font-semibold text-green-1100 text-base'>
						{' '}
						{itemData.data.timestamps[LastElement]}
					</span>
				</h5>
			</div>
		);
	});

	return (
		<div>
			{itemName ? (
				<div className='inline-flex'>
					<img
						alt='item-img'
						src={`https://render.albiononline.com/v1/item/${itemName}?size=45`}
					/>
					<h3 className='text-xl text-green-1100 font-semibold'>
						{formatedItems[itemName]}
					</h3>
				</div>
			) : null}
			<div className='grid gap-2 grid-cols-3'>{LatestPrices}</div>
		</div>
	);
};

export default ItemsInfo;
