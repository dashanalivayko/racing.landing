import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';


export const indexStyles = makeStyles<Theme>((theme: Theme) => ({
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
        border: '10px solid #644200',
        borderRadius: '30px',
        width: '1080px',
        height: '616px',
        margin: '100px 0',
    },
}
));
