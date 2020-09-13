import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type optionsType = { value: string; label: string; refined?: string };

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
	setFunction: React.Dispatch<React.SetStateAction<string | undefined>>;
	options: optionsType[];
	label: string;
	state: string | undefined;
}

const MySelect: React.FC<Props> = ({ setFunction, options, label, state }) => {
	const classes = useStyles();
	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setFunction(event.target.value as string);
	};
	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel>{label}</InputLabel>
				<Select value={state} onChange={handleChange}>
					<MenuItem value='' disabled hidden selected>
						Select one material
					</MenuItem>
					{options.map((option, i) => {
						return (
							<MenuItem key={i} value={option.value}>
								{option.label}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</div>
	);
};

export default MySelect;
