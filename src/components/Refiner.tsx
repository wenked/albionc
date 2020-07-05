import React from 'react';
import getProfitPerFocus from '../utils/Formulas';
import callApi from '../utils/callApi';
import { profitArgs } from '../utils/Formulas';
import Dropdown from '../components/layout/Dropdown';
import ResourcesInfo from './ResourcesInfo';
import itemDataReducer from '../utils/itemDataReducer';

export interface itemPriceData {
	item_id: string;
	city: string;
	quality: number;
	sell_price_min: number;
	sell_price_min_date: string;
	sell_price_max: number;
	sell_price_max_date: string;
	buy_price_min: number;
	buy_price_min_date: string;
	buy_price_max: number;
	buy_price_max_date: string;
}

const cityOptions = [
	{
		value: 'lymhurst',
		label: 'Lymhurst',
	},
	{
		value: 'fort sterling',
		label: 'Fort sterling',
	},
	{
		value: 'caerleon',
		label: 'Caerleon',
	},
	{
		value: 'martlock',
		label: 'Martlock',
	},
	{
		value: 'bridgewatch',
		label: 'Bridgewatch',
	},
	{
		value: 'thetford',
		label: 'Thetford',
	},
];

const resourceOptions = [
	{
		value: 'FIBER',
		label: 'Fiber',
		refined: 'CLOTH',
	},
	{
		value: 'ORE',
		label: 'Ore',
		refined: 'METALBAR',
	},
	{
		value: 'ROCK',
		label: 'Rock',
		refined: 'STONEBLOCK',
	},
	{
		value: 'HIDE',
		label: 'Hide',
		refined: 'LEATHER',
	},
	{
		value: 'WOOD',
		label: 'Wood',
		refined: 'PLANKS',
	},
];
let initialArg: profitArgs;

const Refiner: React.FC = () => {
	const [resourceData, dispatch] = React.useReducer(
		itemDataReducer,
		initialArg
	);
	const [city, setCity] = React.useState<string>();
	const [resource, setResource] = React.useState<string>();
	const [rawResourcePrices, setRawResourcesPrices] = React.useState<
		itemPriceData[]
	>();
	const [refinedResourcePrices, setRefinedResourcesPrices] = React.useState<
		itemPriceData[]
	>();

	/*console.log(
		getProfitPerFocus({
			item: 'T5_FIBER_LEVEL2@2',
			craftFee: 0.13,
			rawMinPrice: 2974,
			refMinPrice: 2289,
			refWantedMinPrice: 7197,
			mySpec: {
				spect4: 100,
				spect5: 100,
				spect6: 100,
				spect7: 100,
				spect8: 100,
			},
			marketTax: 0.03,
			returnRate: 0.54,
		}),
		'teste'
	);*/

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const response = await callApi(city, resource);
		setRawResourcesPrices(response?.raw);
		setRefinedResourcesPrices(response?.refined);
	};

	const onChangeHandlerCraft = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: 'ADD_CRAFTFEE',
			craftFee: parseInt(e.target.value),
		});
	};
	const onChangeHandlerMarketTax = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: 'ADD_MARKETTAX',
			marketTax: parseInt(e.target.value),
		});
	};

	const onChangeHandlerReturnRate = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		dispatch({
			type: 'ADD_RETURNRATE',
			returnRate: parseInt(e.target.value),
		});
	};

	const onChangeHandlerT4 = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: 'ADD_SPECT4',
			mySpecT4: parseInt(e.target.value),
		});
	};
	const onChangeHandlerT5 = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: 'ADD_SPECT5',
			mySpecT5: parseInt(e.target.value),
		});
	};

	const onChangeHandlerT6 = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: 'ADD_SPECT6',
			mySpecT6: parseInt(e.target.value),
		});
	};

	const onChangeHandlerT7 = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: 'ADD_SPECT7',
			mySpecT7: parseInt(e.target.value),
		});
	};

	const onChangeHandlerT8 = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: 'ADD_SPECT8',
			mySpecT8: parseInt(e.target.value),
		});
	};

	return (
		<div>
			<h1>Data</h1>
			<div className='m-3 font-bold'>
				<form className='block' onSubmit={handleSubmit}>
					<div className='flex'>
						<div className='w-12'>
							<Dropdown options={cityOptions} setFunction={setCity} />
						</div>
						<div className=' w-12 pl-32 '>
							<Dropdown options={resourceOptions} setFunction={setResource} />
						</div>
					</div>
					<div className='grid gap-2 grid-cols-2'>
						<div className='border-solid border-black'>
							<h3>Return rate %</h3>
							<input
								value={resourceData?.returnRate}
								onChange={onChangeHandlerReturnRate}
								type='number'
							/>
						</div>
						<div className='border-solid border-black'>
							<h3>Craft fee %</h3>
							<input
								type='number'
								value={resourceData?.craftFee}
								onChange={onChangeHandlerCraft}
							/>
						</div>
						<div className='border-solid border-black'>
							<h3>Market Tax %</h3>
							<input
								type='number'
								value={resourceData?.marketTax}
								onChange={onChangeHandlerMarketTax}
							/>
						</div>
						<div className='border-solid border-black'>
							<h3>T4</h3>
							<input
								value={resourceData?.mySpecT4}
								onChange={onChangeHandlerT4}
								type='number'
							/>
						</div>
						<div className='border-solid border-black'>
							<h3>T5</h3>
							<input
								value={resourceData?.mySpecT5}
								onChange={onChangeHandlerT5}
								type='number'
							/>
						</div>
						<div className='border-solid border-black'>
							<h3>T6</h3>
							<input
								value={resourceData?.mySpecT6}
								onChange={onChangeHandlerT6}
								type='number'
							/>
						</div>
						<div className='border-solid border-black'>
							<h3>T7</h3>
							<input
								value={resourceData?.mySpecT7}
								onChange={onChangeHandlerT7}
								type='number'
							/>
						</div>
						<div className='border-solid border-black'>
							<h3>T8</h3>
							<input
								value={resourceData?.mySpecT8}
								onChange={onChangeHandlerT8}
								type='number'
							/>
						</div>
						<div>
							<button className='bg-gray-200 p-3 m-3 w-1/3'>Refine</button>
						</div>
					</div>
				</form>
			</div>
			<ResourcesInfo
				rawResourcesData={rawResourcePrices}
				refinedResourcesData={refinedResourcePrices}
				resourceData={resourceData}
			/>
		</div>
	);
};

export default Refiner;
