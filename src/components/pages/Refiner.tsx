import React from 'react';
import '../../styles/main.css';
import { profitArgs } from '../../utils/types';
import { cityOptions, resourceOptions } from '../../utils/resourcesData';
import ResourcesInfo from '../ResourcesInfo';
import itemDataReducer from '../../utils/itemDataReducer';
import { TextField, Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import { motion, AnimatePresence } from 'framer-motion';
import useSWR from 'swr';
import fetchResourcesPrices from '../../utils/fetchResourcesPrices';
import MySelect from '../layout/MySelect';

let initialArg: profitArgs = {
	craftFee: 0,
	SPECT4: 0,
	SPECT5: 0,
	SPECT6: 0,
	SPECT7: 0,
	SPECT8: 0,
	returnRate: 0,
	marketTax: 0,
};

/*const containerVariants = {
	hidden: { x: '100vw' },
	visible: {
		x: '0',
		transition: {
			type: 'spring',
			stiffness: 70,
			delay: 0.5,
		},
	},
	exit: { x: '-100vw', transition: { ease: 'easeInOut' } },
};*/

const fadeVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delay: 1,
			duration: 1,
		},
	},
};

const Refiner: React.FC = () => {
	const [loading, setLoading] = React.useState<boolean>(true);
	const [resourceData, dispatch] = React.useReducer(
		itemDataReducer,
		initialArg
	);
	const [city, setCity] = React.useState<string>();
	const [resource, setResource] = React.useState<string>();
	const { data } = useSWR([city, resource], fetchResourcesPrices);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(false);
	};

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		switch (e.target.id) {
			case 'ADD_CRAFTFEE':
				return dispatch({
					type: 'ADD_CRAFTFEE',
					craftFee: parseInt(e.target.value),
				});
			case 'ADD_MARKETTAX':
				return dispatch({
					type: 'ADD_MARKETTAX',
					marketTax: parseInt(e.target.value),
				});
			case 'ADD_RETURNRATE':
				return dispatch({
					type: 'ADD_RETURNRATE',
					returnRate: parseInt(e.target.value),
				});
			case 'ADD_SPECT4':
				return dispatch({
					type: 'ADD_SPECT4',
					SPECT4: parseInt(e.target.value),
				});
			case 'ADD_SPECT5':
				return dispatch({
					type: 'ADD_SPECT5',
					SPECT5: parseInt(e.target.value),
				});
			case 'ADD_SPECT6':
				return dispatch({
					type: 'ADD_SPECT6',
					SPECT6: parseInt(e.target.value),
				});
			case 'ADD_SPECT7':
				return dispatch({
					type: 'ADD_SPECT7',
					SPECT7: parseInt(e.target.value),
				});
			case 'ADD_SPECT8':
				return dispatch({
					type: 'ADD_SPECT8',
					SPECT8: parseInt(e.target.value),
				});
		}
	};

	return (
		<motion.div
			variants={fadeVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
			className='m-4 p-4'>
			<div className='text-2xl font-bold text-green-1100'>Refiner Tool</div>
			<div className='m-3 font-bold'>
				<form className='block' onSubmit={handleSubmit} noValidate>
					<div className='flex pb-2'>
						<div className='w-12'>
							<MySelect
								label='City'
								options={cityOptions}
								setFunction={setCity}
								state={city}
							/>
						</div>
						<div className='w-12 pl-32'>
							<MySelect
								label='Resource'
								options={resourceOptions}
								setFunction={setResource}
								state={resource}
							/>
						</div>
					</div>
					<div className='grid gap-2 grid-cols-2'>
						<div className='border-solid border-black'>
							<TextField
								value={resourceData?.returnRate}
								onChange={onChangeHandler}
								id='ADD_RETURNRATE'
								type='number'
								label='Return rate %'
							/>
						</div>
						<div className='border-solid border-black'>
							<TextField
								type='number'
								id='ADD_CRAFTFEE'
								value={resourceData?.craftFee}
								onChange={onChangeHandler}
								label='Craft fee %'
							/>
						</div>
						<div className='border-solid border-black'>
							<TextField
								type='number'
								id='ADD_MARKETTAX'
								value={resourceData?.marketTax}
								onChange={onChangeHandler}
								label='Market tax %'
							/>
						</div>
						<div className='border-solid border-black'>
							<TextField
								value={resourceData?.SPECT4}
								onChange={onChangeHandler}
								id='ADD_SPECT4'
								name='SPECT4'
								type='number'
								label='T4'
							/>
						</div>
						<div className='border-solid border-black'>
							<TextField
								value={resourceData?.SPECT5}
								onChange={onChangeHandler}
								id='ADD_SPECT5'
								name='SPECT5'
								type='number'
								label='T5'
							/>
						</div>
						<div className='border-solid border-black'>
							<TextField
								value={resourceData?.SPECT6}
								onChange={onChangeHandler}
								id='ADD_SPECT6'
								name='SPECT6'
								type='number'
								label='T6'
							/>
						</div>
						<div className='border-solid border-black'>
							<TextField
								value={resourceData?.SPECT7}
								onChange={onChangeHandler}
								id='ADD_SPECT7'
								name='SPECT7'
								type='number'
								label='T7'
							/>
						</div>
						<div className='border-solid border-black'>
							<TextField
								value={resourceData?.SPECT8}
								onChange={onChangeHandler}
								id='ADD_SPECT8'
								name='SPECT8'
								type='number'
								label='T8'
							/>
						</div>
						<div className='p-3'>
							<Button
								variant='outlined'
								type='submit'
								className='bg-gray-200 p-4 m-4'>
								Refine
							</Button>
						</div>
					</div>
				</form>
			</div>
			{loading ? (
				<div>
					<CircularProgress size={20} />
					<span className='ml-2 text-green-1100'>Insert your SPECs...</span>
				</div>
			) : (
				<div>
					<motion.div
						variants={fadeVariants}
						className='block md:grid gap-4 grid-cols-2'>
						<AnimatePresence exitBeforeEnter>
							{data?.raw?.map((rawResource: any, i: number) => (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{
										opacity: 1,
										transition: {
											type: 'tween',
										},
									}}
									exit={{
										opacity: 0,
										transition: {
											ease: 'easeInOut',
										},
									}}
									className='py-4'
									key={i}>
									<ResourcesInfo
										rawResourceData={rawResource}
										refinedResourcesData={data.refined}
										resourceData={resourceData}
									/>
									<Divider />
								</motion.div>
							))}
						</AnimatePresence>
					</motion.div>
				</div>
			)}
		</motion.div>
	);
};

export default Refiner;
