import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
    root: {
      width: '100%',
    },
    titleAccordion: {
      background: '#d9dbdb',
    },
    title: {
      fontFamily: 'Nunito, sans-serif',
      fontSize: '18px',
    },
    details: {
      background: '#dbdad7',
      
    },
    content: {
      textAlign: 'justify',
      fontFamily: 'Nunito, sans-serif',
      fontWeight: '400'
    },
    button: {
      background: '#357680',
      color: '#ffffff',
      '&:hover': {
        background: '#357680',
        color: '#ffffff',
     },
    },
  
});

export default theme;