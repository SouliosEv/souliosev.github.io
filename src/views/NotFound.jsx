import React from 'react';
import CustomNavbar from '../components/CustomNavbar.jsx'
import Typography from '@mui/material/Typography';
import '../App.css'
import { containerStyles } from '../components/commonStyles.jsx';

import Grid from '@mui/material/Grid';
function NotFound() {
    return (
        <div>
            <CustomNavbar />
            <main className='fullscreen-main'>
                <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ margin: '0 auto' }}>

                    <Grid container
                        spacing={0} sx={{ ...containerStyles }} >
                        <div>
                            <h3>
                                404 - No match for <code>{location.pathname}</code>
                            </h3>
                        </div>
                    </Grid >
                </Grid >
            </main >
        </div>
    );
}

export default NotFound