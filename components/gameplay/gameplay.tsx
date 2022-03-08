import { GameplayStyles } from './gameplay.style';
import React from 'react';
import Image from 'next/image';
import { customLoader } from '../library/helpers';
import { DemoButton } from '../buttons/demoButton';
import playButton from '../../media/playButton.png';
import { VideoButton } from '../buttons/videoButton';



interface Props {
}

const Gameplay: React.FC<Props> = ({}) => {
  const styles = GameplayStyles();

    return (
     <div className={styles.gameplay_section}>
       <div style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
        <p className='title'>Gameplay</p>
        <p className='subtitle' style={{marginBottom: '60px'}}>Race your way up hill in this physics based driving game!</p>
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: 'auto', alignItems: 'center', width: '640px'}}>
          <p className='subtitle' style={{marginBottom: '23px'}}>
            Face the challenges of unique hill climbing environments<br/>
            with many different cars. Gain bonuses from daring tricks<br/>
            and collect coins to upgrade your car and reach even higher<br/>
            distances. Watch out though - Bill&#39;s stout neck is not what<br/>
            it used to be when he was a kid!
          </p>
          <VideoButton text={'watch'}>
            {/* <Image unoptimized  src={playButton} alt='' loader={customLoader}/> */}
          </VideoButton>
          <p className='subtitle' style={{marginBottom: '60px', marginTop: '18px'}}>And his good old gasoline crematorium will easily run out of fuel.</p>
        </div>
      </div>
    </div>
    );
  };
  
  export { Gameplay };