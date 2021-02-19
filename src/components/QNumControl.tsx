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

const QNumControl = (props: Props) => {

    const handleAmount = (ev: any) => {
        props.onChange(ev.target.value);
    }

    return (
        <div>
            <InputLabel id="demo-simple-select-label" shrink={true}>Questions</InputLabel>
            <Slider
                defaultValue={10}
                step={5}
                min={10}
                max={30}
                marks={marks}
                onChange={handleAmount}
                valueLabelDisplay="off"
            />
        </div>
    )
}

export default QNumControl;
