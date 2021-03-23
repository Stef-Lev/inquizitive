import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Slider from '@material-ui/core/Slider';
import { withStyles } from "@material-ui/core/styles";

type Props = {
    amount: number;
    onChange: any;
    classes: any;
}

const marks = [
    {
        value: 5,
        label: '5'
    },
    {
        value: 10,
        label: '10'
    },
    {
        value: 15,
        label: '15'
    },
    {
        value: 20,
        label: '20'
    },
    {
        value: 25,
        label: '25'
    },
    {
        value: 30,
        label: '30'
    }
];

const styles = {
    labelRoot: {
        fontSize: '22px',
        color: '#003249',
        fontFamily: "'Roboto', sans-serif",
        "&$focused": {
            color: "yellow"
        }
    },
    sliderRoot: {
        color: '#003249',
    }
}

const QNumControl = (props: Props) => {

    const { classes, onChange } = props;

    const handleAmount = (ev: any, value: any) => {
        onChange(value);
    }

    return (
        <div id='question-slider'>
            <InputLabel id="demo-simple-select-label" shrink={true} classes={{ root: classes.labelRoot }}>Questions</InputLabel>
            <Slider
                defaultValue={5}
                step={5}
                min={5}
                max={30}
                marks={marks}
                onChangeCommitted={handleAmount}
                valueLabelDisplay="off"
                classes={{ root: classes.sliderRoot }}
            />
        </div>
    )
}
export default withStyles(styles)(QNumControl);
