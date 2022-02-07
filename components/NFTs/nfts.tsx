import { NFTSectionStyles } from './nft.style';
import React from 'react';
import characters from '../../media/1_Characters.gif';
import cars from '../../media/2_Cars.gif';
import race from '../../media/3_Race.gif';
import Image from 'next/image';

interface Props {
}

const NFTSection: React.FC<Props> = ({}) => {
  const styles = NFTSectionStyles();

    return (
        <div className={styles.nft_section}>
            <div className={styles.nft}>
                <p className={'title'}>5555 Unique NFTS</p>
                <div className='img'>
                  <Image layout='fill' src={characters.src} alt="characters"/>
                </div>
                <p className={'subtitle'}><b>Redneck NFT</b> collection on the Solana Blockhain</p>
            </div>

            <div className={styles.nft}>
                <p className={'title'}>And their cars</p>
                <div className='img'>
                  <Image layout='fill' src={cars.src} alt="cars"/>
                </div>
                <p className={'subtitle'}>Holders get <b>free airdrops</b> to ride their cars</p>
            </div>

            <div className={styles.nft}>
                <p className={'title'}>Go to Race</p>
                <div className='img'>
                  <Image layout='fill' src={race.src} alt="race"/>
                </div>
                <p className={'subtitle'}><b>Play to Earn</b> in the PVP arena</p>
            </div>
        </div>
    );
  };
  
  export { NFTSection };