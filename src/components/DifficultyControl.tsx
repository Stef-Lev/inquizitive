import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from "@material-ui/core/styles";

type Props = {
    onChange: any;
    classes: any;
}

const styles = {
    labelRoot: {
        fontSize: '22px',
        color: '#003249',
        fontFamily: "'Catamaran', sans-serif",
    },
    inputRoot: {
        '&.MuiInput-underline:before': {
            borderBottom: '2px solid red', // Semi-transparent underline
        },
        '&.MuiInput-underline:hover:before': {
            borderBottom: '2px solid red', // Solid underline on hover
        },
        '&.MuiInput-underline:after': {
            borderBottom: '2px solid red', // Solid underline on focus
        }
    }
}

const DifficultyControl = (props: Props) => {

    const { onChange, classes } = props;

    const handleDiff = (ev: any) => {
        onChange(ev.target.value);
    }

    return (
        <>
            <FormControl classes={{ root: classes.inputRoot }}>
                <InputLabel id="diff-label" classes={{ root: classes.labelRoot }} focused={false}>Difficulty</InputLabel>
                <Select
                    labelId="difficulty"
                    id="difficulty"
                    value='easy'
                    onChange={handleDiff}
                >
                    <MenuItem value="easy">Easy</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="hard">Hard</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default withStyles(styles)(DifficultyControl);
