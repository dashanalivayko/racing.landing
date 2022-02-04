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