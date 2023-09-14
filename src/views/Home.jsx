import React from 'react';
import '../App.css'

import CustomNavbar from '../components/CustomNavbar.jsx'
import EndSection from '../components/EndSection.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import BioSection from '../components/BioSection';
import ContactSection from '../components/ContactSection';
import Grid from '@mui/material/Grid';

function Home() {
    return (
        <>
            <CustomNavbar className="navbar" />
            <main className='fullscreen-main'>
                <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ margin: '0 auto' }}>
                    <Grid item> <BioSection /></Grid>
                    <Grid item> <ContactSection /></Grid>
                    <Grid item><EndSection /></Grid>
                </Grid>
            </main>
        </>
    )
}

export default Home