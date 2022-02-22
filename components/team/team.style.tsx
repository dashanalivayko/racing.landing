import { fontFamily } from './../../styles/theme';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export const teamStyles = makeStyles<Theme>((theme: Theme) => ({
    team_section: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '135px 0px 100px',
        // marginTop: '135px',
    },

    partners: {
        display: 'flex',
        marginTop: '75px',
        alignItems: 'center',
        '& .photo': {
            '&:hover': {
                transform: 'scale(1.01)',
                cursor: 'pointer',
            },
            '&:nth-child(-n+4)': {
            marginRight: '75px',
            }
        }
    },

    title: {
        fontFamily: fontFamily,
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '48px',
        lineHeight: '56px',
        textTransform: 'uppercase',
        color: '#FFFFFF',
        textAlign: 'center',
        '& + .subtitle': {
            fontFamily: fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '32px',
            color: '#FFFFFF',
            marginBottom: '34px',
            textAlign: 'center',
            marginTop: '5px',
        },
    },

    person: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& .photo': {
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            background: '#C4C4C4',
            borderRadius: '10px',
            width: '320px',
            height: '320px',
        },
        '& .name': {
            fontFamily: fontFamily,
            fontStyle: 'normal',
            fontWeight: 900,
            fontSize: '32px',
            lineHeight: '42px',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            textAlign: 'center',
            marginTop: '15px',
        },
        '& .position': {
            fontFamily: fontFamily,
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '32px',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            textAlign: 'center',
        },
    },

}
));
