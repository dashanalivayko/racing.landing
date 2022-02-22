import { NFTSectionStyles } from './nft.style';
import React from 'react';
import Image from 'next/image';
import { customLoader } from '../library/helpers';
import Characters from '../../media/1_Characters.gif';
import Cars from '../../media/2_Cars.gif';
import Race from '../../media/3_Race.gif';


interface Props {
}

const NFTSection: React.FC<Props> = ({}) => {
  const styles = NFTSectionStyles();

    return (
        <div className={styles.nft_section}>
            <div className={styles.nft}>
                <p className={'title'}>5555 Unique NFTS</p>
                <div className='img'>
                  <Image unoptimized  loader={customLoader} layout='fill' src={Characters.src} alt="characters"/>
                </div>
                <p className={'subtitle'}><b>Redneck NFT</b> collection on the Solana Blockhain</p>
            </div>

            <div className={styles.nft}>
                <p className={'title'}>And their cars</p>
                <div className='img'>
                  <Image unoptimized  loader={customLoader} layout='fill' src={Cars.src} alt="cars"/>
                </div>
                <p className={'subtitle'}>Holders get <b>free airdrops</b> to ride their cars</p>
            </div>

            <div className={styles.nft}>
                <p className={'title'}>Go to Race</p>
                <div className='img'>
                  <Image unoptimized  loader={customLoader} layout='fill' src={Race.src} alt="race"/>
                </div>
                <p className={'subtitle'}><b>Play to Earn</b> in the PVP arena</p>
            </div>
        </div>
    );
  };
  
  export { NFTSection };