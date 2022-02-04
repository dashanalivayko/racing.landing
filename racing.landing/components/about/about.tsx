import { AboutStyles } from './about.style';
import React from 'react';
import { DiscordButton, TwitterButton } from '../buttons/socialButtons';
// import video from '../../public/images/Video.mp4';

interface Props {
}

const About: React.FC<Props> = ({}) => {
  const styles = AboutStyles();

    return (
     <div id="about" className={styles.about_section}>
        <div className={styles.about}>
        <p className={'title'}>Redneck racing IS A SOLANA NFT GAMING PROJECT</p>
        <p className={'subtitle'}><b>Redneck Racing</b> is a Solana NFT gaming project where players can own all of their in-game assets and use them for PvP racing competision. The game is built to play directly in <b>mobile and desktop browsers</b></p>
        <p className={'subtitle'}>Follow us on <a>Twitter</a> and join us on <a>Discord</a> to stay up to date.</p>
        <div className={styles.buttons}>
            <DiscordButton style={{width: '55px', height: '55px'}} />
            <TwitterButton style={{width: '55px', height: '55px'}} />
        </div>
        </div>
        <video autoPlay loop>
          <source src='../../public/images/Video.mp4' type="video/mp4" />
        </video>
    </div>
    );
  };
  
  export { About };