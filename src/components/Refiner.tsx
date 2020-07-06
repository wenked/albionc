import React from 'react';
import callApi from '../utils/callApi';
import { itemPriceData, profitArgs } from '../utils/types';
import { cityOptions, resourceOptions } from '../utils/resourcesData';
import Dropdown from '../components/layout/Dropdown';
import ResourcesInfo from './ResourcesInfo';
import itemDataReducer from '../utils/itemDataReducer';

let initialArg: profitArgs = {
	craftFee: 0,
	mySpecT4: 0,
	mySpecT5: 0,
	mySpecT6: 0,
	mySpecT7: 0,
	mySpecT8: 0,
	returnRate: 0,
	marketTax: 0,
};

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
			<div className='grid gap-2 grid-cols-2'>
				<div>
					{rawResourcePrices?.map((rawResource, i) => (
						<ResourcesInfo
							key={i}
							rawResourceData={rawResource}
							refinedResourcesData={refinedResourcePrices}
							resourceData={resourceData}
						/>
					))}
				</div>
				<div className='text-xl font-bold'>
					{refinedResourcePrices?.map((refined, i) => (
						<div key={i}>
							<p>Refined: {refined.item_id}</p>
							<p>Price: {refined.sell_price_min}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Refiner;
