import { NFTSectionStyles } from './nft.style';
import React from 'react';
import Image from 'next/image';
import { customLoader } from '../library/helpers';

interface Props {
}

const NFTSection: React.FC<Props> = ({}) => {
  const styles = NFTSectionStyles();

    return (
        <div className={styles.nft_section}>
            <div className={styles.nft}>
                <p className={'title'}>5555 Unique NFTS</p>
                <div className='img'>
                  <Image loader={customLoader} layout='fill' src='https://s3.eu-north-1.amazonaws.com/funn.chat/trailer_park_racing/1_Characters.gif' alt="characters"/>
                </div>
                <p className={'subtitle'}><b>Redneck NFT</b> collection on the Solana Blockhain</p>
            </div>

            <div className={styles.nft}>
                <p className={'title'}>And their cars</p>
                <div className='img'>
                  <Image loader={customLoader} layout='fill' src='https://s3.eu-north-1.amazonaws.com/funn.chat/trailer_park_racing/2_Cars.gif' alt="cars"/>
                </div>
                <p className={'subtitle'}>Holders get <b>free airdrops</b> to ride their cars</p>
            </div>

            <div className={styles.nft}>
                <p className={'title'}>Go to Race</p>
                <div className='img'>
                  <Image loader={customLoader} layout='fill' src='https://s3.eu-north-1.amazonaws.com/funn.chat/trailer_park_racing/3_Race.gif' alt="race"/>
                </div>
                <p className={'subtitle'}><b>Play to Earn</b> in the PVP arena</p>
            </div>
        </div>
    );
  };
  
  export { NFTSection };