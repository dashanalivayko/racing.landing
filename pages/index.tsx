import React from 'react';
import Head from 'next/head';
import { Header } from '../components/header/header';
import { GlobalStyles } from '../styles/global.style';
import { Banner } from '../components/banner/banner';
import { Game } from '../components/unityGame/game';
import { About } from '../components/about/about';
import { Car } from '../components/carAnimation/car';
import { NFTSection } from '../components/NFTs/nfts';

interface Props {

}

const Home: React.FC<Props> = () => {
  const global = GlobalStyles();

  return (
    <>
      <Head>
        <title>Racing</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div className={global.root}>
         <video width='100%' muted autoPlay loop style={{marginTop: '-70px'}}> 
           <source src='https://s3.eu-north-1.amazonaws.com/funn.chat/misc/TprVideo.mp4' type="video/mp4" />
         </video>
         <div className={global.shadow}></div>
         <div className={global.main}>
         <Header/>
         
            <div className={global.wrapper}>
              <Banner />
              <Game />
              <About />
            </div>
            <Car />
            <div style={{background: '#F3EB5A', width: '100%', justifyContent: 'center', display: 'flex'}}>
              <div className={global.wrapper}>
                <NFTSection />
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Home;