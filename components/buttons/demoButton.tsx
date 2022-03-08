import { ButtonsStyles } from './buttons.style';
import React from 'react';
import Link from 'next/link';

interface Props {
    text: string;
}

const DemoButton: React.FC<Props> = ({text, children}) => {
  const styles = ButtonsStyles();
    return (

        <a className={styles.playButton} target="_blank" href="https://funnchatcompany.github.io/racing.game/">
            {children}
            {text}
        </a>
    );
  };
  
  export { DemoButton };