import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

import road from '../../media/Road-new.png'
import tree from '../../media/tree.png';


export const CarStyles = makeStyles<Theme>((theme: Theme) => ({
animation: {
    background: `url(${road.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'left',
    backgroundPositionY: 'bottom',
    backgroundRepeatX: 'initial',
    width: '101%',
    height: '620px',
    position: 'relative',
    marginLeft: '-10px',
    marginBottom: '-100px',
    marginTop: '-100px',
},
car: {
    width: '370px',
    height: '250px',
    left: 370,
    bottom: 210,
    zIndex: 1,
    position: 'absolute',
},
tree: {
    width: '435px',
    height: '507px',
    position: 'absolute',
    zIndex: 1,
    left: 370,
    bottom: 210,
},
}
));
