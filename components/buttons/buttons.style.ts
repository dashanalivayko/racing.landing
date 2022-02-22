import { fontFamily } from '../../styles/theme';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

import twitter from '../../media/social-twitter.svg';
import discord from '../../media/social-discord.svg';
import twitter_white from '../../media/twitter-white.png';
import discord_white from '../../media/discord-white.png';

export const ButtonsStyles = makeStyles<Theme>((theme: Theme) => ({
  playButton: {
    background: '#FF611F',
    border: '2px solid #75011D',
    boxSizing: 'border-box',
    boxShadow: 'inset 0px -8px 0px #C00003, inset 0px -30px 0px #F63300',
    borderRadius: '20px',
    fontFamily: fontFamily,
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '28px',
    lineHeight: '28px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    textStroke: '1px #74011D',
    textShadow: '0px 1.5px 0px #FF611F',
    padding: '13px 30px',
    flexShrink: 0,
    transition: 'ease-out 0.3s',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '& > span': {
      marginRight: '7px!important',
    },
    '&:hover': {
      boxShadow: 'inset 0px -8px 0px #bfb615, inset 0px -30px 0px #eddd1c',
      background: '#fff989',
    },
  },
  social: {
    transition: 'ease-out 0.1s',
      display: 'block',
      width: '35px',
      height: '35px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    '&:hover': {
        background: '#F3EB5A',
        borderRadius: '5px',
    },
    '&.discord': {
      backgroundImage: `url(${discord.src}) !important`,
    },
    '&.discord-white': {
      backgroundImage: `url(${discord_white.src}) !important`,
    },
    '&.twitter': {
      backgroundImage: `url(${twitter.src}) !important`,
    },
    '&.twitter-white': {
      backgroundImage: `url(${twitter_white.src}) !important`,
    },
  }
}));
