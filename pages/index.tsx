import React from 'react';
import Head from 'next/head';
import { Header } from '../components/header/header';
import { GlobalStyles } from '../styles/global.style';
import { indexStyles } from '../styles/index.style';
import { Banner } from '../components/banner/banner';
import { About } from '../components/about/about';
import { Car } from '../components/carAnimation/car';
import { NFTSection } from '../components/NFTs/nfts';
import { Partners } from '../components/partners/partners';
import Image from 'next/image';
import { customLoader } from '../components/library/helpers';
import grass from '/media/grass.png';
import track from '../media/dirtTrack.png';
import { Roadmap } from '../components/roadmap/roadmap';
import bigGrass from '/media/bigGrass.png';
import { Token } from '../components/token/token';
import { Gameplay } from '../components/gameplay/gameplay';
import { Team } from '../components/team/team';
interface Props {

}

const Home: React.FC<Props> = () => {
  const global = GlobalStyles();
  const index = indexStyles();


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
            </div>
            <div className={global.wrapper} id="video">
              <About />
            </div>
            <div className={index.section} style={{background: '#98B92E'}} id="gameplay" >
              <div className={global.wrapper}>
                <Gameplay />
              </div>
            </div>
            <Car />
            <div className={index.section} id="nft" >
              <div className={global.wrapper}>
                <NFTSection />
              </div>
            </div>
            <div className={index.section} style={{background: '#98B92E'}}>
              <div className={global.wrapper}>
                <Token />
              </div>
            </div>
            
            <div style={{background: '#435D1C'}} className={index.section}>
              <div className={global.wrapper} >
                <Partners />
                <Team />
              </div>
              <div className={index.grass}>
                 <Image loader={customLoader} layout='fixed' src={grass} alt="play"/>
              </div>
            </div>

            <div id="roadmap" style={{backgroundImage: `url(${track.src})`, backgroundSize: '100% auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} className={index.section}>
              <div className={global.wrapper}>
                <Roadmap />
              </div>
              <div className={index.grass}>
                 <Image loader={customLoader} layout='fixed' src={bigGrass} alt="play"/>
              </div>
            </div>

         </div>
      </div>
    </>
  )
}

export default Home;