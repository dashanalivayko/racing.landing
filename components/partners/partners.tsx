import { partnersStyles } from './partners.style';
import React from 'react';
import Image from 'next/image';
import { customLoader } from '../library/helpers';
import Igor from '../../media/Igor.png';
import Egor from '../../media/Egor.png';
import logo1 from '../../media/logo1.svg';
import logo2 from '../../media/logo2.svg';
import logo3 from '../../media/logo3.svg';
import logo4 from '../../media/logo4.svg';
import logo5 from '../../media/logo5.svg';


interface Props {
}

const Partners: React.FC<Props> = ({}) => {
  const styles = partnersStyles();

    return (
        <div id="partners" className={styles.partners_section}>
            <div className={styles.investors}>
                <div className={styles.title}>Investors &#38; partners</div>
                <div className={styles.partners}>
                    <div className='photo'>
                       <Image unoptimized  src={logo1} loader={customLoader} alt='' />
                    </div>
                    <div className='photo'>
                       <Image unoptimized  src={logo2} loader={customLoader} alt='' />
                    </div>
                    <div className='photo'>
                       <Image unoptimized  src={logo3} loader={customLoader} alt='' />
                    </div>
                    <div className='photo'>
                       <Image unoptimized  src={logo4} loader={customLoader} alt='' />
                    </div>
                    <div className='photo'>
                       <Image unoptimized  src={logo5} loader={customLoader} alt=''/>
                    </div>
                </div>
            </div>
            {/* <div id="team" className={styles.founders}>
                <div className={styles.title}>Founders</div>
                <div className='subtitle'>Hillbilly Racing is developed by an international team of professional game developers baked by top VCs.</div>

                <div style={{display:'flex', justifyContent: 'center'}}> 
                    <div className={styles.person} style={{marginRight:'50px'}}>
                        <Image unoptimized  className='photo' src={Igor} loader={customLoader} alt=''></Image>
                        <div className='name'>Crazy Igor</div>
                        <div className='position'>CEO</div>
                    </div>

                    <div className={styles.person}>
                        <Image unoptimized  className='photo' src={Egor} loader={customLoader} alt=''></Image>
                        <div className='name'>Stoner Egor</div>
                        <div className='position'>CTO</div>
                    </div>
                </div>
            </div> */}
        </div>
    );
  };
  
  export { Partners };