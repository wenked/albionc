import React from 'react';
import { profitArgs, itemPriceData } from '../utils/types';
import '../styles/main.css';
import getRecipe from '../utils/getRecipe';
import getProfitPerFocus from '../utils/Formulas';
import { formatedItems } from '../utils/formatedItems';

interface Props {
	rawResourceData: itemPriceData | undefined;
	refinedResourcesData: itemPriceData[] | undefined;
	resourceData: profitArgs;
}

const ResourcesInfo: React.FC<Props> = ({
	rawResourceData,
	refinedResourcesData,
	resourceData,
}) => {
	return (
		<div className='block'>
			{rawResourceData !== undefined && (
				<div className='font-bold block text-xl py-4 rounded-sm'>
					<div className='inline-flex'>
						<img
							src={`https://render.albiononline.com/v1/item/${rawResourceData?.item_id}?size=40`}
							alt='item img'
						/>
						<p>Raw: {formatedItems[rawResourceData?.item_id]}</p>
					</div>
					<p>Raw Price: {rawResourceData?.sell_price_min}</p>
					<div className='inline-flex'>
						<img
							src={`https://render.albiononline.com/v1/item/${
								refinedResourcesData?.find(
									refined =>
										getRecipe(rawResourceData?.item_id).recipe ===
										refined.item_id
								)?.item_id
							}?size=40`}
							alt='item img'
						/>
						<p>
							Refined recipe price:{' '}
							{
								refinedResourcesData?.find(
									refined =>
										getRecipe(rawResourceData?.item_id).recipe ===
										refined.item_id
								)?.sell_price_min
							}{' '}
						</p>
					</div>
					<p>
						Refined price:{' '}
						{
							refinedResourcesData?.find(
								refined =>
									getRecipe(rawResourceData.item_id).refined === refined.item_id
							)?.sell_price_min
						}
					</p>
					<span className='text-green-700'>
						Profit/Focus:{' '}
						{getProfitPerFocus(
							resourceData,
							rawResourceData.sell_price_min,
							refinedResourcesData?.find(
								item =>
									getRecipe(rawResourceData.item_id).recipe === item.item_id
							)?.sell_price_min,
							refinedResourcesData?.find(
								item =>
									getRecipe(rawResourceData.item_id).refined === item.item_id
							)?.sell_price_min,
							rawResourceData.item_id
						)?.toFixed(2)}
					</span>
				</div>
			)}
		</div>
	);
};

export default ResourcesInfo;
