import { CarStyles } from './car.style';
import React from 'react';
import Image from 'next/image';
import car from '../../media/Car.png';
import tree from '../../media/tree.png';



interface Props {
}

const Car: React.FC<Props> = ({}) => {
  const styles = CarStyles();

    return (
    <div className={styles.animation}>
      {/* <div className={styles.car}>
        <Image layout='fill' src={car} alt="car"/>
      </div> */}
    </div>
    );
  };
  
  export { Car };