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
	quality: number;
	setQuality: React.Dispatch<React.SetStateAction<number>>;
}

const QualityDropdown: React.FC<Props> = ({ quality, setQuality }) => {
	const classes = useStyles();

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setQuality(event.target.value as number);
	};

	return (
		<FormControl className={classes.formControl}>
			<InputLabel>Quality</InputLabel>
			<Select value={quality} onChange={handleChange}>
				<MenuItem value={1}>Normal</MenuItem>
				<MenuItem value={2}>Good</MenuItem>
				<MenuItem value={3}>Outstanding</MenuItem>
				<MenuItem value={4}>Excellent</MenuItem>
				<MenuItem value={5}>Masterpiece</MenuItem>
			</Select>
		</FormControl>
	);
};
export default QualityDropdown;
