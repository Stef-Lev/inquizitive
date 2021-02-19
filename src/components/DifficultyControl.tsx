import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

type Props = {
    difficulty: string;
    onChange: any;
}

const DifficultyControl = (props: Props) => {

    const handleDiff = (ev: any) => {
        props.onChange(ev.target.value);
    }

    return (
        <>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
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

export default DifficultyControl;
