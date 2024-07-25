import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';


const Input = styled('input')({
    display: 'none',
});

const ImagePreview = styled('img')({
    marginTop: '16px',
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
});

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Grid container direction="column" alignItems="center">
            <div className='my-3 text-white'>
                <Typography variant="h6">Upload Image Here</Typography>

            </div>
            <Input
                accept="image/*"
                id="contained-button-file"
                type="file"
                onChange={handleImageChange}
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                    Choose Image
                </Button>
            </label>
            {imagePreview && (
                <ImagePreview src={imagePreview} alt="Image Preview" />
            )}
        </Grid>
    );
};

export default ImageUpload;
