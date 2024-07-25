import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const InputRange = styled('input')({
    width: '100%',
    marginTop: '16px',
});

const Range = () => {
    const [value, setValue] = useState(50);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box width="100%" p={2}>
            <Typography variant="h6">Adjust Value</Typography>
            <InputRange
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleChange}
            />
            <Typography variant="body1">Value: {value}</Typography>
        </Box>
    );
};

export default Range;
