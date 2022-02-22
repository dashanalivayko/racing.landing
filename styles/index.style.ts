import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';


export const indexStyles = makeStyles(() => ({
    grass: {
        display: 'flex',
        width: '100%',
        height: '73px',
    },
    section: {
        background: '#F3EB5A', 
        width: '100%', 
        justifyContent: 'center', 
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    game: {
        width: '100%',
        height: '100%',
        display:'flex',
    },
}
));