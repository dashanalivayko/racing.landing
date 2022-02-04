import { ButtonsStyles } from './buttons.style';
import React from 'react';

interface Props {
    text: string;
}

const DemoButton: React.FC<Props> = ({text}) => {
  const styles = ButtonsStyles();
    return (
      <a href="#game">
        <button className={styles.playButton}>
            {text}
        </button>
      </a>
    );
  };
  
  export { DemoButton };