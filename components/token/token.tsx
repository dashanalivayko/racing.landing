import { tokenStyles } from './token.style';
import React from 'react';
import Image from 'next/image';
import { customLoader } from '../library/helpers';
import token from '../../media/token.png';


interface Props {
}

const Token: React.FC<Props> = ({}) => {
  const styles = tokenStyles();

    return (
        <div id="token" className={styles.token_section}>
            <div className='title'>MEET THE CORN token</div>
            <div className='subtitle'>
                Corntoken ($CORN) is an Solana token used to perform many actions within
                the Hillbilly Racing metaverse. Actions such as: purchasing and selling equipment
                and crafting new items. Additionally, the $CORN holders will eventually be able
                to participate in key governance votes, have exclusive access to NFT drops
                and be the first to try the new features.</div>
            <div className='coin'>
                <Image loader={customLoader} src={token} alt=''/>
            </div>
        </div>
    );
  };
  
  export { Token };