import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { containerStyles, textStyles, myTheme } from './CommonStyles.jsx';
import { ThemeProvider, } from '@mui/material/styles';



function ContactSection() {
    return (
        <Grid container
            spacing={0} sx={{ ...containerStyles }} >
            <Grid item xs={12} md={8} >
                <ThemeProvider theme={myTheme}>
                    <Typography variant="h2" >More about me</Typography>
                    <Typography variant="h5" sx={{
                        ...textStyles
                    }}>
                        With a background in computer science, my passion lies in problem-solving and staying updated. Throughout my studies I have been involved a lot with Java and my web development skillset includes JavaScript, HTML, CSS and ReactJS and Express.js. Additionally, my academic experience includes utilizing Python for machine learning and data mining.
                    </Typography>
                </ThemeProvider>
            </Grid>

        </Grid>
    );
}

export default ContactSection