import React from 'react';
import '../../styles/main.css';
import TextField from '@material-ui/core/TextField';
import { formatedItems } from '../../utils/formatedItems';
import _ from 'lodash';
import TierDropdown from './TierDropdown';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& .MuiInputBase-root': {
				margin: theme.spacing(1),
				width: 400,
				[theme.breakpoints.down('sm')]: {
					width: 300,
				},
			},
		},
	})
);

interface Props {
	setSearchTerm: React.Dispatch<React.SetStateAction<string | undefined>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

type Nullable<T> = T | null;

const SearchBar: React.FC<Props> = ({ setSearchTerm, setLoading }) => {
	const classes = useStyles();
	const [tier, setTier] = React.useState<string>('');
	const [search, setSearch] = React.useState<string>('');

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		if (tier !== null) {
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
				<div className='block md:flex  justify-center'>
					<TextField
						className={classes.root}
						label='Search your item'
						variant='outlined'
						type='search'
						autoFocus
						onChange={onChangeHandler}
						value={search}
					/>
					<TierDropdown tier={tier} setTier={setTier} />
					<IconButton type='submit'>
						<SearchIcon />
					</IconButton>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
