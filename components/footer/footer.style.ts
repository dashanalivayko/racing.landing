import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';
import { fontFamily } from '../../styles/theme';

export const footerStyles = makeStyles<Theme>((theme: Theme) => ({
  footer: {
    width: '100%',
    display: 'flex',
    padding: '60px',
    alignItems: 'end',
    // height: '255px',
    justifyContent: 'space-between',
    top: 0,
    background: '#435D1C',
    '& p': {
        color: 'white',
        fontFamily: fontFamily,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '25px',
        marginTop: '18px',
    },
  },
  logo: {
    width: '207px',
    height: '97px',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    '& > div': {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '60px',
        '& > a': {
            textTransform: 'uppercase',
            color: 'white',
            fontFamily: fontFamily,
            fontStyle: 'normal',
            fontWeight: '900',
            fontSize: '18px',
            lineHeight: '25px',
            transition: 'ease-out 0.2s',
            '&:nth-child(-n+7)': {
              marginBottom: '15px',
            },
            '&:hover': {
              color: '#F3EB5A',
            },
          },
      },
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    '& > a': {
      '&:nth-child(-n+2)': {
        marginRight: '20px',
     },
    }  
  }
}
));
