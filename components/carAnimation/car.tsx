import { CarStyles } from './car.style';
import React from 'react';
import Image from 'next/image';
import car from '../../media/Car.png';


interface Props {
}

const Car: React.FC<Props> = ({}) => {
  const styles = CarStyles();

    return (
    <div className={styles.animation}>
      <img className={styles.car} src={car.src} alt="car"/>
    </div>
    );
  };
  
  export { Car };