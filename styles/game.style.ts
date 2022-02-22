import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export const GameStyles = makeStyles<Theme>((theme: Theme) => ({
game: {
    border: '10px solid #644200',
    borderRadius: '30px',
    width: '1080px',
    height: '616px',
    margin: '100px 0',
}
}
));
