import { GameStyles } from './game.style';
import React from 'react';
import { UnityPage } from '../../unity/unityPage';


interface Props {
}

const Game: React.FC<Props> = ({}) => {
  const styles = GameStyles();

    return (
    <div id="game" className={styles.game}>
      <UnityPage />
    </div>
    );
  };
  
  export { Game };