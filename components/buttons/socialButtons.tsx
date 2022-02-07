import { ButtonsStyles } from './buttons.style';
import React from 'react';
import { CSSProperties } from '@material-ui/styles';

interface Props {
    style?: CSSProperties;
}

const TwitterButton: React.FC<Props> = ({style}) => {
  const styles = ButtonsStyles();
    return (
        <a className={`${styles.social} twitter`} style={style} href="https://twitter.com/Hello_Ent_RU" target="_blank" rel="noreferrer"/>
    );
  };

const DiscordButton: React.FC<Props> = ({style}) => {
const styles = ButtonsStyles();
    return (
        <a className={`${styles.social} discord`} style={style} href="https://discord.gg/dznubGe6g7" target="_blank" rel="noreferrer"/>
    );
};
  
  export { TwitterButton, DiscordButton };