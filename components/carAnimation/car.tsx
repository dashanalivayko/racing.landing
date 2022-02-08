import { CarStyles } from './car.style';
import React from 'react';
import Image from 'next/image';
import car from '../../media/Car.png';
import { customLoader } from '../library/helpers';


interface Props {
}

const Car: React.FC<Props> = ({}) => {
  const styles = CarStyles();

    return (
    <div className={styles.animation}>
      <div className={styles.car}>
        <Image loader={customLoader} layout='fill' src={car.src} alt="car"/>
      </div>
    </div>
    );
  };
  
  export { Car };