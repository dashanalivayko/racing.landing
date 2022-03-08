import { ButtonsStyles } from './buttons.style';
import React from 'react';
import Link from 'next/link';

interface Props {
    text: string;
}

const DemoButton: React.FC<Props> = ({text, children}) => {
  const styles = ButtonsStyles();
    return (
      <Link href="/game">
        <a className={styles.playButton} target="_blank">
            {children}
            {text}
        </a>
      </Link>
    );
  };
  
  export { DemoButton };