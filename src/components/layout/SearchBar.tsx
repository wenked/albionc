import React from 'react';
import axios from 'axios';
import '../../styles/main.css';
import TextField from '@material-ui/core/TextField';
import { itemChartPrices } from '../../utils/types';
import { formatedItems } from '../../utils/formatedItems';
import _ from 'lodash';

interface Props {
	setItemsChartPrices: React.Dispatch<
		React.SetStateAction<itemChartPrices[] | undefined>
	>;
}

const SearchBar: React.FC<Props> = ({ setItemsChartPrices }) => {
	const [searchTerm, setSearchTerm] = React.useState<string>();
	const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formatedSearchTerm = _.findKey(
			formatedItems,
			item => _.values(item).join('') === searchTerm
		);
		console.log(formatedSearchTerm);
		const response = await axios.get(
			`https://www.albion-online-data.com/api/v2/stats/Charts/${formatedSearchTerm}`
		);

		setItemsChartPrices(response.data);
	};

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};
	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<div className='items-center justify-center'>
					<TextField
						label='Search your item'
						variant='outlined'
						type='search'
						fullWidth
						autoFocus
						onChange={onChangeHandler}
						value={searchTerm}
						defaultValue=''
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
