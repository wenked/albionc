import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	})
);

interface Props {
	tier: string;
	setTier: React.Dispatch<React.SetStateAction<string>>;
}

const TierDropdown: React.FC<Props> = ({ tier, setTier }) => {
	const classes = useStyles();

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setTier(event.target.value as string);
	};

	return (
		<FormControl className={classes.formControl}>
			<InputLabel>Tier</InputLabel>
			<Select value={tier} onChange={handleChange}>
				<MenuItem value={''}>No Tier</MenuItem>
				<MenuItem value={'@1'}>Tier .1</MenuItem>
				<MenuItem value={'@2'}>Tier .2</MenuItem>
				<MenuItem value={'@3'}>Tier .3</MenuItem>
			</Select>
		</FormControl>
	);
};
export default TierDropdown;
