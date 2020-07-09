import React from 'react';
import '../../styles/main.css';
import TextField from '@material-ui/core/TextField';
import { formatedItems } from '../../utils/formatedItems';
import _ from 'lodash';

interface Props {
	setSearchTerm: React.Dispatch<React.SetStateAction<string | undefined>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<Props> = ({ setSearchTerm, setLoading }) => {
	const [search, setSearch] = React.useState<string>('');
	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		const formatedSearchTerm = _.findKey(
			formatedItems,
			item => _.values(item).join('') === search
		);
		setSearchTerm(formatedSearchTerm);
		console.log(formatedSearchTerm);

		setLoading(false);
	};
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
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
						value={search}
						defaultValue=''
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
