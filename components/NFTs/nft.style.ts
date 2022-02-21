import { fontFamily } from '../../styles/theme';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';


export const NFTSectionStyles = makeStyles<Theme>((theme: Theme) => ({
    nft_section: {
        display: 'flex',
        flexDirection: 'row',
        margin: '200px 0 150px',
    },
    nft: {
        width: '320px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '&:nth-child(-n+2)': {
            marginRight: '50px',
        },
        '& .title': {
            fontFamily: fontFamily,
            fontStyle: 'normal',
            fontWeight: 900,
            fontSize:'32px',
            lineHeight: '42px',
            display: 'flex',
            alignItems: 'flex-end',
            textTransform: 'uppercase',
            color: '#000000',
            marginBottom: '20px',
        },
        '& .subtitle': {
            fontFamily: fontFamily,
            fontStyle: 'normal',
            fontWeight: 800,
            fontSize:'24px',
            lineHeight: '32px',
            marginTop: '20px',
            textAlign: 'center',
            color: '#000000',
        },
        '& > .img': {
            width: '320px',
            height: '320px',
            position: 'relative',
            '& > span': {
                borderRadius: '10px',
            }
        },
    },

}
));
