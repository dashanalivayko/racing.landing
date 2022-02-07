import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export const GlobalStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(152, 185, 46, 0) 42.71%, #98B92E 100%)',
        '&::-webkit-scrollbar': {
            background: 'transparent',
            width: 0,
            display: 'none',
        },
    },
    shadow: {
        background: 'linear-gradient(180deg, rgba(152, 185, 46, 0) 42.71%, #98B92E 100%)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 2,
    },
    main: {
        position: 'absolute',
        zIndex: 3,
        top: '0px',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        '&::-webkit-scrollbar': {
            background: 'transparent',
            width: 0,
            display: 'none',
        },
    },
	wrapper: {
        maxWidth: '1300px',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',
       
    },

  }
));