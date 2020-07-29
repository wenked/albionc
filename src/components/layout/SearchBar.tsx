import React from 'react';
import '../../styles/main.css';
import TextField from '@material-ui/core/TextField';
import { formatedItems } from '../../utils/formatedItems';
import _ from 'lodash';
import TierDropdown from './TierDropdown';

interface Props {
	setSearchTerm: React.Dispatch<React.SetStateAction<string | undefined>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<Props> = ({ setSearchTerm, setLoading }) => {
	const [tier, setTier] = React.useState<string>();
	const [search, setSearch] = React.useState<string>('');
	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		if (tier !== undefined) {
			const formatedSearchTerm =
				_.findKey(formatedItems, (item) => _.values(item).join('') === search) +
				tier;
			setSearchTerm(formatedSearchTerm);
			console.log(formatedSearchTerm);

			setLoading(false);
		}
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
					<TierDropdown tier={tier} setTier={setTier} />
					<button type='submit'>search</button>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
