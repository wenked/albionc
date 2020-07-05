import React from 'react';
import { itemPriceData } from './Refiner';
import { profitArgs } from '../utils/Formulas';
import '../styles/main.css';
import getRecipe from '../utils/getRecipe';
import getProfitPerFocus from '../utils/Formulas';

interface Props {
	rawResourcesData: itemPriceData[] | undefined;
	refinedResourcesData: itemPriceData[] | undefined;
	resourceData: profitArgs;
}

const ResourcesInfo: React.FC<Props> = ({
	rawResourcesData,
	refinedResourcesData,
	resourceData,
}) => {
	return (
		<div className='grid gap-3 grid-cols-2'>
			<div>
				{rawResourcesData?.map(raw => (
					<div>
						<h3 className='font-bold text-2xl'>{raw.item_id}</h3>
						<h4>Price :{raw.sell_price_min}</h4>
						<h4>Recipe:{getRecipe(raw.item_id).recipe}</h4>
						<h5>
							Recipe Price:
							{refinedResourcesData !== undefined &&
								refinedResourcesData.find(
									item => getRecipe(raw.item_id).recipe === item.item_id
								)?.sell_price_min}
						</h5>
						<h5>
							Refined Result:{' '}
							{refinedResourcesData !== undefined &&
								refinedResourcesData.find(
									item => getRecipe(raw.item_id).refined === item.item_id
								)?.item_id}
						</h5>
						<h2 className='text-green-500 font-bold'>
							{getProfitPerFocus(
								resourceData,
								raw.sell_price_min,
								refinedResourcesData?.find(
									item => getRecipe(raw.item_id).recipe === item.item_id
								)?.sell_price_min,
								refinedResourcesData?.find(
									item => getRecipe(raw.item_id).refined === item.item_id
								)?.sell_price_min,
								raw.item_id
							)?.toFixed(2)}
						</h2>
					</div>
				))}
			</div>
			<div>
				{refinedResourcesData?.map(refined => (
					<div>
						<div>
							<h3 className='font-bold'>{refined.item_id}</h3>
							<h4>Price :{refined.sell_price_min}</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ResourcesInfo;
