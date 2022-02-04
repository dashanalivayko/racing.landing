import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

import road from '../../media/Road.png'

export const CarStyles = makeStyles<Theme>((theme: Theme) => ({
animation: {
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${road.src}) !important`,
    backgroundRepeatX: 'initial',
    width: '100%',
    height: '520px',
},
car: {
    width: '520px',
    height: '340px',
    left: 500,
    zIndex: 1,
    position: 'absolute',
}
}
));
