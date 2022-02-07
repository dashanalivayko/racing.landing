import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';
import { fontFamily } from '../../styles/theme';

export const headerStyles = makeStyles<Theme>((theme: Theme) => ({
  header: {
    width: '100%',
    display: 'flex',
    padding: '15px 50px',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    borderBottom: '5px solid #644200',
    background: '#98B92E',
    zIndex: 5,
  },
  logo: {
    width: '140px',
    height: '65px',
    marginRight: '50px',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    '& > a': {
      textTransform: 'uppercase',
      color: 'black',
      fontFamily: fontFamily,
      fontStyle: 'normal',
      fontWeight: '900',
      fontSize: '24px',
      lineHeight: '38px',
      transition: 'ease-out 0.2s',
      '&:not(last-child)': {
        marginRight: '25px',
      },
      '&:hover': {
        color: '#F3EB5A',
      },
    },
  },
  buttons: {
    display: 'flex',
    marginLeft: 'auto',
    alignItems: 'center',
    '& > a': {
      '&:nth-child(-n+2)': {
        marginRight: '20px',
     },
    }  
  }
}
));
