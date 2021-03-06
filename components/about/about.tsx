import { AboutStyles } from './about.style';
import React from 'react';
import { DiscordButton, TwitterButton } from '../buttons/socialButtons';
import play from '../../media/Play.png';
import Image from 'next/image';
import { customLoader } from '../library/helpers';
import { DemoButton } from '../buttons/demoButton';
import playButton from '../../media/playButton.png';



interface Props {
}

const About: React.FC<Props> = ({}) => {
  const styles = AboutStyles();

  const [played, setPlayed] = React.useState(false);

  const handlePlayedClick = () => {
    //@ts-ignore
    const video: HTMLVideoElement | null = document.getElementById('video');
    if (video) {
      played ? video.pause() : video.play();
      setPlayed(!played);
    }

    console.log(video)
  };

  const onEndedCallback = () => setPlayed(!played);

    return (
     <div className={styles.about_section}>
       <div style={{display: 'flex'}}>
        <div className={styles.about}>
        <p className={'title'}>hillbilly racing <br/>IS A SOLANA NFT GAMING PROJECT</p>
        <p className={'subtitle'}><b>Redneck Racing</b> is a Solana NFT gaming project where players can own all of their in-game assets and use them for PvP racing competision. The game is built to play directly in <b>mobile and desktop browsers</b></p>
        <p className={'subtitle'}>Follow us on <a>Twitter</a> and join us on <a>Discord</a> to stay up to date.</p>
        <div className={styles.buttons}>
            <DiscordButton style={{width: '55px', height: '55px'}} />
            <TwitterButton style={{width: '55px', height: '55px'}} />
        </div>
        </div>
        <div className={styles.video}>
          <div className='img' style={{visibility: played ? 'hidden' : 'visible'}} onClick={handlePlayedClick}>
            <Image unoptimized  loader={customLoader} layout='fill' src={play.src} alt="play"/>
          </div>
          <div style={{visibility: played ? 'hidden' : 'visible'}} />
          <video id="video" autoPlay onClick={handlePlayedClick} onEnded={onEndedCallback}>
            <source src='https://s3.eu-north-1.amazonaws.com/funn.chat/misc/TprVideo.mp4' type="video/mp4" />
          </video>
        </div>
       </div>
    </div>
    );
  };
  
  export { About };