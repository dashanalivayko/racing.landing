import { teamStyles } from './team.style';
import React from 'react';
import Image from 'next/image';
import { customLoader } from '../library/helpers';
import Igor from '../../media/Igor.png';
import Egor from '../../media/Egor.png';


interface Props {
}

const Team: React.FC<Props> = ({}) => {
  const styles = teamStyles();

    return (
        <div id="team" className={styles.team_section}>
            <div className={styles.founders}>
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
            </div>
        </div>
    );
  };
  
  export { Team };