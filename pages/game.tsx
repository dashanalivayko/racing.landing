import { GameStyles } from '../styles/game.style';
import { indexStyles } from '../styles/index.style';
import React from 'react';
import { UnityPage } from '../components/UnityPage';

const Game: React.FC = () => {
  const styles = GameStyles();

    return (
    <div className={styles.game}>
      {/* <UnityPage /> */}
      <style jsx>{`
        .game {
          border: 10px solid #644200;
          border-radius: 30px;
          width: 1080px;
          height: 616px;
          margin: 100px 0;
        }
      `}</style>
    </div>
    );
  };
  
  export default Game ;