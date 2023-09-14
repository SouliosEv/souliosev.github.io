import React from 'react';
import CustomNavbar from '../components/CustomNavbar.jsx'
import Typography from '@mui/material/Typography';
import '../App.css'
import { containerStyles, textStyles } from '../components/commonStyles.jsx';

import Grid from '@mui/material/Grid';
function About() {
    return (
        <div>
            <CustomNavbar />
            <main className='fullscreen-main'>
                <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ margin: '0 auto' }}>

                    <Grid container
                        spacing={0} sx={{
                            ...containerStyles,
                            borderTop: 1,
                        }} >
                        <Typography variant="h4" sx={{
                            paddingTop: 5
                        }}>
                            This is a responsive static site developed for GitHub hosting, using ReactJS and MUI components.
                            For styling I have used CSS , MUI sx prop and react-bootstrap for the Navbar.
                        </Typography>
                    </Grid >
                </Grid >
            </main >
        </div>
    );
}

export default About