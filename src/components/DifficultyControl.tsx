import React, {useState} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from "@material-ui/core/styles";

type DifficultyControlProps = {
    onChange: any;
    classes: any;
}

const styles = {
    labelRoot: {
        fontSize: '22px',
        color: '#003249',
        fontFamily: "'Roboto', sans-serif",
    }
}

const DifficultyControl = (props: DifficultyControlProps) => {

    const { onChange, classes } = props;
    const [diffValue, setDiffValue] = useState<string>('easy');

    const handleDiff = (ev: any) => {
        onChange(ev.target.value);
        setDiffValue(ev.target.value);
    }

    return (
        <>
            <FormControl classes={{ root: classes.inputRoot }}>
                <InputLabel id="diff-label" classes={{ root: classes.labelRoot }} focused={false}>Difficulty</InputLabel>
                <Select
                    labelId="difficulty"
                    id="difficulty"
                    value={diffValue}
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
