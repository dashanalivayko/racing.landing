import { footerStyles } from './footer.style';
import React from 'react';
import logo from '../../media/Logo.png';
import { DemoButton } from '../buttons/demoButton';
import Image from 'next/image';
import { DiscordButton, TwitterButton } from '../buttons/socialButtons';
import { customLoader } from '../library/helpers';

const Footer: React.FC = () => {
  const styles = footerStyles();
    return (
      <nav className={styles.footer} role="navigation">
          <div>
            <a href="#top" className={styles.logo}>
            <Image unoptimized  loader={customLoader} src={logo} alt="logo"/>
            </a>
            <p>©copyright 2021</p>
        </div>
        <div className={styles.navbar}>
         <div>
            <a href="#about">VIDEO</a>
            <a href="#gameplay">GAMEPLAY</a>
            <a href="#nft">NFT</a>
            <a href="#token">TOKEN</a>
          </div>
          <div>
            <a href="#partners">INVESTORS &#38; PARTNERS</a>
            <a href="#team">TEAM</a>
            <a href="#roadmap">ROADMAP</a>
            <a href="#">WHITEPAPER</a>
          </div>

        </div>
        <div className={styles.buttons}>
          <TwitterButton isWhite={true}/>
          <DiscordButton isWhite={true}/>
        </div>
      </nav>
    );
  };
  
  export { Footer };