import { headerStyles } from './header.style';
import React from 'react';
import logo from '../../media/Logo.png';
import { DemoButton } from '../buttons/demoButton';
import Image from 'next/image';
import { DiscordButton, TwitterButton } from '../buttons/socialButtons';

const Header: React.FC = () => {
  const styles = headerStyles();
    return (
      <nav className={styles.header} role="navigation">
        <a href="#top" className={styles.logo}>
          <Image src={logo} alt="logo"/>
        </a>
        <div className={styles.navbar}>
          <a href="#about">GAME</a>
          <a href="#roadmap">ROADMAP</a>
          <a href="#faq">FAQ</a>
          <a href="#team">TEAM</a>
          <a href="https://docs.google.com/document/d/1PToRBirF1Wz76BGd0Lbjiu9MJeoOIBBgZUNQB5FpMfA/edit#heading=h.uu8b8n2rwtmo" target="_blank" rel="noreferrer">WHITEPAPER</a>
          <a href="" target="_blank">RARITY</a>
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