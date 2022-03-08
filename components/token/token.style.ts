import { fontFamily } from './../../styles/theme';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export const tokenStyles = makeStyles<Theme>((theme: Theme) => ({
    token_section: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '110px 0px 130px',
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
            marginBottom: '7px',
        },
        '& .subtitle': {
            fontFamily: fontFamily,
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize:'24px',
            lineHeight: '32px',
            marginBottom: '20px',
            textAlign: 'center',
        },
        '& .coin': {
            width: '320px',
            height: '320px',
        },
    },
}
));
