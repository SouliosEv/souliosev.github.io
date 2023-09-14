import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import React from 'react';

function ContactIcons() {
    return (
        <Grid container spacing={3} sx={{ justifyContent: { xs: 'center', md: 'space-evenly' } }}>
            <Grid item><Button variant="text" href="https://github.com/SouliosEv" target="_blank"><GitHubIcon /></Button></Grid>
            <Grid item><Button variant="text" href="mailto:souliosev@gmail.com" ><EmailIcon /></Button></Grid>
            <Grid item><Button variant="text" href="https://www.linkedin.com/in/evangelos-soulios/" target="_blank"><LinkedInIcon /></Button></Grid>
        </Grid>

    )
}

export default ContactIcons;