import React from 'react';
import { profitArgs, itemPriceData } from '../utils/types';
import '../styles/main.css';
import getRecipe from '../utils/getRecipe';
import getProfitPerFocus from '../utils/Formulas';
import { formatedItems } from '../utils/formatedItems';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
	rawResourceData: itemPriceData | undefined;
	refinedResourcesData: itemPriceData[] | undefined;
	resourceData: profitArgs;
}
let refinedRecipe: itemPriceData | undefined;
let refined: itemPriceData | undefined;
let profitPerFocus: string | undefined;

const containerVariants = {
	hidden: { x: '100vw' },
	visible: {
		x: '0',
		transition: {
			type: 'spring',
			stiffness: 70,
			delay: 0.5,
		},
		exit: { x: '-100vw' },
	},
};

const ResourcesInfo: React.FC<Props> = ({
	rawResourceData,
	refinedResourcesData,
	resourceData,
}) => {
	if (refinedResourcesData && rawResourceData !== undefined) {
		refinedRecipe = refinedResourcesData?.find(
			refined => getRecipe(rawResourceData?.item_id).recipe === refined.item_id
		);
		refined = refinedResourcesData?.find(
			refined => getRecipe(rawResourceData.item_id).refined === refined.item_id
		);
		profitPerFocus = getProfitPerFocus(
			resourceData,
			rawResourceData.sell_price_min,
			refinedRecipe?.sell_price_min,
			refined?.sell_price_min,
			rawResourceData.item_id
		)?.toFixed(2);
	}

	return (
		<AnimatePresence>
			<motion.div
				variants={containerVariants}
				initial='hidden'
				animate='visible'
				exit='exit'
				className='block text-green-1100'>
				<div className='font-bold block text-xl py-4 rounded-sm'>
					<div className='inline-flex'>
						<img
							src={`https://render.albiononline.com/v1/item/${rawResourceData?.item_id}?size=60`}
							alt='item img'
						/>
						<p>
							Raw resource:{' '}
							{rawResourceData !== undefined &&
								formatedItems[rawResourceData.item_id]}
						</p>
					</div>
					<p>Raw resource price: {rawResourceData?.sell_price_min}</p>
					{!rawResourceData?.item_id.includes('T3') && (
						<>
							<div className='inline-flex'>
								<img
									src={`https://render.albiononline.com/v1/item/${refinedRecipe?.item_id}?size=60`}
									alt='item img'
								/>
								<p>Refined recipe price: {refinedRecipe?.sell_price_min} </p>
							</div>
							<div className='ml-3 inline-flex'>
								<img
									src={`https://render.albiononline.com/v1/item/${refined?.item_id}?size=60`}
									alt='item img'
								/>
								<p>Refined resource price: {refined?.sell_price_min}</p>
							</div>
							<div>
								<p className='text-green-1000'>
									Profit/Focus: {profitPerFocus}
								</p>
							</div>{' '}
						</>
					)}
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default ResourcesInfo;
