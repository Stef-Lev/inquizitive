import React from 'react';
import { CustomSelect } from './DifficultyControl.styles';
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
        <CustomSelect>
            {/* <label htmlFor="difficulty">Choose :</label>

            <select name="difficulty" id="difficulty" onChange={handleDiff}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select> */}
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
        </CustomSelect>
    )
}

export default DifficultyControl;
