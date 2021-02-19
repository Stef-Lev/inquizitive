import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

type Props = {
    amount: number;
    onChange: any;
}

const marks = [
    {
        value: 10,
        label: '10'
    },
    {
        value: 20,
        label: '20'
    },
    {
        value: 30,
        label: '30'
    },
    {
        value: 40,
        label: '40'
    },
    {
        value: 50,
        label: '50'
    }
];

const QNumControl = (props: Props) => {

    const handleAmount = (ev: any, value: any) => {
        props.onChange(value);
        console.log(value);
    }

    return (
        <div id='question-slider'>
            <InputLabel id="demo-simple-select-label" shrink={true}>Questions</InputLabel>
            <Slider
                defaultValue={10}
                step={5}
                min={10}
                max={50}
                marks={marks}
                onChangeCommitted={handleAmount}
                valueLabelDisplay="off"
            />
        </div>
    )
}

export default QNumControl;
