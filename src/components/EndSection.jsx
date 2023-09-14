import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ContactIcons from './ContactIcons.jsx'
import { containerStyles, textStyles, myTheme } from './commonStyles.jsx';
import { ThemeProvider, } from '@mui/material/styles';

function EndSection() {
    return (
        <Grid container
            spacing={0} sx={{
                ...containerStyles, borderBottom: 0
            }} >

            < Grid item >
                <ThemeProvider theme={myTheme}>
                    <Typography variant="h2">Contact me</Typography>
                    <ul>
                        <li>
                            <Typography variant="h5" sx={{ ...textStyles }}>email: souliosev@gmail.com</Typography>
                        </li>
                        <li>
                            <ContactIcons />
                        </li>
                    </ul>
                </ThemeProvider>
            </Grid>

        </Grid >
    )

}


export default EndSection;