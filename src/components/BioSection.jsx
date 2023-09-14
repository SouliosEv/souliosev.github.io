import React from 'react';
import Box from '@mui/material/Box';
import ContactIcons from './ContactIcons.jsx'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { containerStyles, textStyles, myTheme } from './CommonStyles.jsx';
import { ThemeProvider, } from '@mui/material/styles';

function BioSection() {
    return (
        <Grid container
            spacing={0} sx={{ ...containerStyles }} >
            <Grid item xs={12} md={6} lg={8} sx={{
                borderTop: 1, marginTop: 40, paddingTop: 5
            }}>
                <ThemeProvider theme={myTheme}>
                    <Typography variant="h2">Hi, I'm Vangelis</Typography>

                    <Typography variant="h5" sx={{
                        ...textStyles,
                    }}>I am a software engineer with knowledge of web technologies allowing me to design and develop engaging and dynamic web applications. My competence extends beyond the front-end, as I possess the skills to build robust server-side applications and manage databases. If you are a business seeking a responsive and extendable web presence or an employer looking to hire, <Link href="mailto:souliosev@gmail.com">contact</Link> me.
                    </Typography>
                </ThemeProvider>

            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{
                paddingLeft: { lg: 5, md: 2, xs: 0 }, paddingTop: { sm: 20, md: 35, lg: 20 }, justifySelf: 'center'
            }} >
                <Box
                    sx={{

                        width: '100%',
                        height: '100%',
                        paddingBottom: 2,

                    }
                    }
                    component="img"
                    alt="A photo of me"
                    src="/me.jpg"
                    loading='lazy'
                />
                <ContactIcons />
            </Grid>
        </Grid >
    )
}
export default BioSection;