import {
    createTheme,
    responsiveFontSizes,
} from '@mui/material/styles';

let theme = createTheme();
export const myTheme = responsiveFontSizes(theme);

export const containerStyles = {
    paddingBottom: 15,
    marginTop: 15,
    width: '75vw',
    borderBottom: 1,
    gridTemplateColumns: {
        sm: '1fr', // One column for extra-small screens
        md: 'repeat(2, 1fr)', // Two columns for small screens and above
    },
}

export const textStyles = {
    paddingTop: 5,
    paddingBottom: 5,
}

