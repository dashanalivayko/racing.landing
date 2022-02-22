import { fontFamily } from '../../styles/theme';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';


export const GameplayStyles = makeStyles<Theme>((theme: Theme) => ({
    gameplay_section: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '90px',
        position: 'relative',
        alignItems: 'center',
        width: '100%',
        '& .title': {
            fontFamily: fontFamily,
            fontStyle: 'normal',
            fontWeight: 900,
            fontSize:'48px',
            lineHeight: '56px',
            display: 'flex',
            alignItems: 'flex-end',
            textTransform: 'uppercase',
            color: '#000000',
            marginBottom: '16px',
        },
        '& .subtitle': {
            fontFamily: fontFamily,
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize:'24px',
            lineHeight: '32px',
            marginBottom: '20px',
            '& > a': {
                color: 'white',
                fontWeight: 900,
            },
        },
    },
}
));
