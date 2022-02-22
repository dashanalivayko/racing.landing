import { indexStyles } from '../styles/index.style';
import React from 'react';
import { UnityPage } from '../components/UnityPage2';

const Game: React.FC = () => {
  const styles = indexStyles();

    return (
    <div className={styles.game}>
      <UnityPage />
    </div>
    );
  };
  
  export default Game ;