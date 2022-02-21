import { ButtonsStyles } from './buttons.style';
import React from 'react';

interface Props {
    text: string;
}

const DemoButton: React.FC<Props> = ({text, children}) => {
  const styles = ButtonsStyles();
    return (
      <a href="#game">
        <button className={styles.playButton}>
            {children}
            {text}
        </button>
      </a>
    );
  };
  
  export { DemoButton };