import { fontFamily } from './../../styles/theme';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';
import magic_eden from '../../media/Magic_eden.png';
import fractal from '../../media/fractallogo.png';
import banner from '../../media/banner.png';

export const BannerStyles = makeStyles<Theme>((theme: Theme) => ({
banner: {
    margin: '450px auto 0px',
    backgroundImage: `url(${banner.src})`,
    padding: '80px 105px',
    borderRadius: '30px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '1070px',
    height: '370px',
    '& .title': {
        fontFamily: fontFamily,
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '50px',
        lineHeight: '68px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#000000',
    },
    '& .subtitle': {
        fontFamily: fontFamily,
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '28px',
        textAlign: 'center',
        color: '#644200',
        marginBottom: '25px',
    },
  },
  buttons: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    '& .black_button': {
        background: '#000000',
        borderRadius: '20px',
        padding: '25px 55px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '280px',
        transition: 'ease-out 0.1s',
        '&.magic_eden': {
            backgroundImage: `url(${magic_eden.src})`,
            backgroundSize: '170px 30px',
        },
        '&.fractal': {
            backgroundImage: `url(${fractal.src})`,
            backgroundSize: '140px 24px',
        },
        '&:hover': {
            backgroundColor: '#343434',
        }
    },
  }
}
));
