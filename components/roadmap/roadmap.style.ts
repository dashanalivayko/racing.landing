import { fontFamily } from '../../styles/theme';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';


export const RoadmapStyles = makeStyles<Theme>((theme: Theme) => ({
    roadmap_section: {
        paddingTop: '65px',
        '& > .title': {
            fontFamily: fontFamily,
            fontStyle: 'normal',
            fontWeight: 900,
            fontSize: '48px',
            lineHeight: '56px',
            textTransform: 'uppercase',
            color: '#000000',
            textAlign: 'center',
        },
        '& .subtitle': {
            fontFamily: fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '32px',
            color: '#000000',
            textAlign: 'center',
            marginTop: '5px',
            marginBottom: '110px',
        },
    },
    checkpoints: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        height: '410px',
        marginBottom: '170px',
        '& .checkpoint': {
            background: '#FFFFFF',
            border: '2px solid #222102',
            boxSizing: 'border-box',
            boxShadow: '0px 5px 0px #222102',
            borderRadius: '30px',
            padding: '25px',
            width: '310px',
            height: '260px',
            '&:nth-child(-n+3)': {
                marginRight: '20px',
            },
            '& .title': {
                fontFamily: fontFamily,
                fontStyle: 'normal',
                fontWeight: 900,
                fontSize: '32px',
                lineHeight: '32px',
                textTransform: 'uppercase',
                color: '#000000',
                textAlign: 'start',
                marginBottom: '17px',
            },
            '& .subtitle': {
                fontFamily: fontFamily,
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '24px',
                color: '#000000',
                textAlign: 'start',
                marginBottom: '11px',
            },
        },
    },
    whitepaper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        '& > .title': {
            fontFamily: fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '32px',
            color: '#000000',
            textAlign: 'start',
            marginBottom: '4px',
            '& > a': {
                color: '#435D1C',
                fontWeight: 800,
            },
        },
        '& .subtitle': {
            fontFamily: fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '24px',
            color: '#000000',
            textAlign: 'start',
            marginBottom: '24px',
        },
    },
}
));



