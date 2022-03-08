import { ButtonsStyles } from './buttons.style';
import React from 'react';
import Link from 'next/link';
import { customLoader } from '../library/helpers';
import playButton from '../../media/playButton.png';
import Image from 'next/image';

interface Props {
    text: string;
}

const VideoButton: React.FC<Props> = ({text}) => {
  const styles = ButtonsStyles();
    return (
        <a className={styles.playButton} href='#about'>
           <Image unoptimized src={playButton} alt='' loader={customLoader}/>
            {text}
        </a>
    );
  };
  
  export { VideoButton };