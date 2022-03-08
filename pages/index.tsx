import { indexStyles } from '../styles/index.style';
import React from 'react';
import { UnityPage } from '../components/UnityPage';

const Game: React.FC = () => {
  const styles = indexStyles();

    return (
    <div className={styles.rootGame}>
        <div className={styles.game}>
        <UnityPage />
        </div>
    </div>
    );
  };
  
  export default Game ;