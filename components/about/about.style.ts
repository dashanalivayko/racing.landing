import { fontFamily } from '../../styles/theme';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';


export const AboutStyles = makeStyles<Theme>((theme: Theme) => ({
    about_section: {
        display: 'flex',
        flexDirection: 'row',
    },
    about: {
        width: '640px',
        marginRight: '40px',
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
        }
    },
    buttons: {
        display: 'flex',
        '& > a': {
            '&:not(last-child)': {
               marginRight: '20px',
            },
        }        
    },
    video: {
        position: 'relative',
        height: '100%',
        '& > video': {
            width: '620px',
            borderRadius: '10px',
        },
        '& > .img': {
            width: '140px',
            height: '140px',
            position: 'absolute',
            zIndex: 1,
            top: '50%',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            background: 'transparent',
        },
        '& > div': {
           background : 'rgba(0, 0, 0, 0.3)',
           height: '98%',
           width: '100%',
           position: 'absolute',
           borderRadius: '10px',
        },
    }
}
));
