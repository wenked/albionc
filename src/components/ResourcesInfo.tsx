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
let refinedRecipe: itemPriceData | undefined;
let refined: itemPriceData | undefined;
let profitPerFocus: string | undefined;
let profitStyle: string;

const ResourcesInfo: React.FC<Props> = ({
	rawResourceData,
	refinedResourcesData,
	resourceData,
}) => {
	if (refinedResourcesData && rawResourceData !== undefined) {
		refinedRecipe = refinedResourcesData?.find(
			(refined) =>
				getRecipe(rawResourceData?.item_id).recipe === refined.item_id
		);
		refined = refinedResourcesData?.find(
			(refined) =>
				getRecipe(rawResourceData.item_id).refined === refined.item_id
		);
		profitPerFocus = getProfitPerFocus(
			resourceData,
			rawResourceData.sell_price_min,
			refinedRecipe?.sell_price_min,
			refined?.sell_price_min,
			rawResourceData.item_id
		)
			?.toFixed(2)
			.replace(/\d(?=(\d{3})+\.)/g, '$&,');
	}

	if (profitPerFocus !== undefined) {
		if (parseInt(profitPerFocus) < 0) {
			profitStyle = 'text-red-500';
		} else {
			profitStyle = 'text-green-1000';
		}
	}

	return (
		<div className='py-6 text-green-1100 shadow-md transform hover:-translate-y-2 hover:shadow-lg'>
			<div className='text-xl py-4 m-4 rounded-sm'>
				<div className='inline-flex'>
					<img
						src={`https://render.albiononline.com/v1/item/${rawResourceData?.item_id}?size=60`}
						alt='item img'
					/>

					<p>
						<span className='text-lg'>Raw resource:</span>{' '}
						<span className='font-bold'>
							{rawResourceData !== undefined &&
								formatedItems[rawResourceData.item_id]}
						</span>
					</p>
					<span className='ml-4'>
						<span className='text-lg'>Price:</span>{' '}
						<span className='font-bold'>
							{rawResourceData?.sell_price_min
								.toFixed(2)
								.replace(/\d(?=(\d{3})+\.)/g, '$&,')}
						</span>
					</span>
				</div>

				{!rawResourceData?.item_id.includes('T3') && (
					<>
						<div className='inline-flex'>
							<img
								src={`https://render.albiononline.com/v1/item/${refinedRecipe?.item_id}?size=60`}
								alt='item img'
							/>

							<p>
								<span className='text-lg'>Recipe price:</span>{' '}
								<span className='font-bold'>
									{refinedRecipe?.sell_price_min
										.toFixed(2)
										.replace(/\d(?=(\d{3})+\.)/g, '$&,')}{' '}
								</span>
							</p>
						</div>
						<div className='inline-flex ml-2 '>
							<img
								src={`https://render.albiononline.com/v1/item/${refined?.item_id}?size=60`}
								alt='item img'
							/>

							<p>
								<span className='text-lg'>Refined resource price:</span>{' '}
								<span className='font-bold'>
									{refined?.sell_price_min
										.toFixed(2)
										.replace(/\d(?=(\d{3})+\.)/g, '$&,')}
								</span>
							</p>
						</div>
						<div>
							<p className={profitStyle}>
								<span className='text-2xl font-bold'>Profit/Focus:</span>{' '}
								{profitPerFocus}
							</p>
						</div>{' '}
					</>
				)}
			</div>
		</div>
	);
};

export default ResourcesInfo;
