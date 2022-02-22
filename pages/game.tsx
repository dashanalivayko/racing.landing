import { GameStyles } from '../styles/game.style';
import React from 'react';
import { UnityPage } from '../components/UnityPage2';

const Game: React.FC = () => {
  const styles = GameStyles();

    return (
    <div className={styles.game}>
      <UnityPage />
    </div>
    );
  };
  
  export default Game ;