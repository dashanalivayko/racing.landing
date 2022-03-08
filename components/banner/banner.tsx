import { BannerStyles } from './banner.style';
import React from 'react';
import { DemoButton } from '../buttons/demoButton';
import banner from '../../media/banner.png';
import Image from 'next/image';


interface Props {
}

const Banner: React.FC<Props> = ({}) => {
  const styles = BannerStyles();

    return (
    <div className={styles.banner}>
      <p className={'title'}>Play-to-earn redneck racing</p>
        <p className={'subtitle'}>5555 NFTs <b>sold out</b> - get yours on secondary markets:</p>
          <div className={styles.buttons}>
           <DemoButton text={'play demo'}/>
           <a className={'black_button magic_eden'} target="_blank" href="https://magiceden.io/marketplace/panzerdogs" rel="noreferrer"></a>
           <a className={'black_button fractal'} target="_blank" href="https://www.fractal.is/panzerdogs" rel="noreferrer"></a>
      </div>
    </div>
    );
  };
  
  export { Banner };