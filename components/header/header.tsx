import { headerStyles } from './header.style';
import React from 'react';
import logo from '../../media/Logo.png';
import { DemoButton } from '../buttons/demoButton';
import Image from 'next/image';
import { DiscordButton, TwitterButton } from '../buttons/socialButtons';
import { customLoader } from '../library/helpers';

const Header: React.FC = () => {
  const styles = headerStyles();
    return (
      <nav className={styles.header} role="navigation">
        <a href="#top" className={styles.logo}>
          <Image loader={customLoader} src={logo} alt="logo"/>
        </a>
        <div className={styles.navbar}>
          <a href="#video">VIDEO</a>
          <a href="#gameplay">GAMEPLAY</a>
          <a href="#nft">NFT</a>
          <a href="#token">TOKEN</a>
          <a href="#partners">PARTNERS</a>
          <a href="#team">TEAM</a>
          <a href="#roadmap">ROADMAP</a>
          <a href="https://docs.google.com/document/d/1PToRBirF1Wz76BGd0Lbjiu9MJeoOIBBgZUNQB5FpMfA/edit#heading=h.uu8b8n2rwtmo" target="_blank" rel="noreferrer">WHITEPAPER</a>

        </div>
        <div className={styles.buttons}>
          <DemoButton text={'play demo'}/>
          <TwitterButton/>
          <DiscordButton />
        </div>
      </nav>
    );
  };
  
  export { Header };