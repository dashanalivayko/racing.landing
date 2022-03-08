import { RoadmapStyles } from './roadmap.style';
import React from 'react';
import Link from 'next/link';

interface Props {
}

const Roadmap: React.FC<Props> = ({}) => {
  const styles = RoadmapStyles();

    return (
        <div className={styles.roadmap_section}>
            <p className='title'>Roadmap</p>
            <p className='subtitle'>
                Our roadmap is designed to have the game development as highest priority in mind. We want to bring value to the
                community by starting development of the game as early as possible.
            </p>
            <div className={styles.checkpoints}>
                <div className='checkpoint' style={{alignSelf: 'flex-start'}}>
                    <p className='title'>Checkpoint 1 Q1 2022</p>
                    <p className='subtitle'>Launch <b>5555 avatars</b> on the marketplace on our website.</p>
                    <p className='subtitle'>Holders will get <b>free</b> cars airdrops and future tokens</p>
                </div>

                <div className='checkpoint' style={{alignSelf: 'flex-end'}}>
                    <p className='title'>Checkpoint 2 Q2 2022</p>
                    <p className='subtitle'>Airdrop the first cars to NFT holders</p>
                    <p className='subtitle'>Cars rarity chart</p>
                    <Link href="https://funnchatcompany.github.io/racing.game/">
                      <a className='subtitle' style={{color: '#435D1C', fontWeight: '800', cursor: 'pointer'}} target="_blank" >Playable demo</a>
                    </Link>
                </div>

                <div className='checkpoint' style={{alignSelf: 'flex-start'}}>
                    <p className='title'>Checkpoint 3 Q3 2022</p>
                    <p className='subtitle'>Launch pre-alpha version of the game with avatar import and endless race mode.</p>
                </div>

                <div className='checkpoint' style={{alignSelf: 'flex-end'}}>
                    <p className='title'>Checkpoint 4 Q4 2022</p>
                    <p className='subtitle'>IDO $CORN token.</p>
                    <p className='subtitle'>Launch of liquidity and staking pools</p>
                </div>
            </div>

            <div className={styles.whitepaper}>
                <p className='title'>See our <span>Whitepaper</span> for full details.</p>
                <p className='subtitle'>*Roadmap is subject to change depending on community feedback.</p>
            </div>
        </div>
    );
  };
  
  export { Roadmap };