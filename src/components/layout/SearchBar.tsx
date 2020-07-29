import React from 'react';
import '../../styles/main.css';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { formatedItems } from '../../utils/formatedItems';
import _ from 'lodash';
import TierDropdown from './TierDropdown';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& .MuiInputBase-root': {
				margin: theme.spacing(1),
				width: 400,
			},
		},
	})
);

interface Props {
	setSearchTerm: React.Dispatch<React.SetStateAction<string | undefined>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<Props> = ({ setSearchTerm, setLoading }) => {
	const classes = useStyles();
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
				<div className='flex  justify-center'>
					<TextField
						className={classes.root}
						label='Search your item'
						variant='outlined'
						type='search'
						autoFocus
						onChange={onChangeHandler}
						value={search}
						defaultValue=''
					/>
					<TierDropdown tier={tier} setTier={setTier} />
					<Button variant='outlined' type='submit'>
						search
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
