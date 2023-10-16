import React, {useEffect, useState} from 'react';
import {useScroll} from "../../hooks/useScroll";
import styles from './Hero.module.css'
import {ReactComponent as Hero9} from "../../assets/hero/hero-9.svg";
import {ReactComponent as Hero8} from "../../assets/hero/hero-8.svg";
import {ReactComponent as Hero7} from "../../assets/hero/hero-07.svg";
import {ReactComponent as Hero6} from "../../assets/hero/hero-06.svg";
import {ReactComponent as Hero5} from "../../assets/hero/hero-05.svg";
import {ReactComponent as Hero4} from "../../assets/hero/hero-04.svg";
import {ReactComponent as Hero3} from "../../assets/hero/hero-03.svg";
import {ReactComponent as Hero2} from "../../assets/hero/hero-02.svg";
import {ReactComponent as Hero1} from "../../assets/hero/hero-01.svg";
import {ReactComponent as Train} from "../../assets/hero/train.svg";
import {ReactComponent as Sun} from "../../assets/hero/sunflower.svg";
import {ReactComponent as Bridge} from "../../assets/hero/bridge.svg";
import {ReactComponent as Cloud1} from "../../assets/clouds/cloud1.svg";
import {ReactComponent as Cloud2} from "../../assets/clouds/cloud2.svg";
import {ReactComponent as Cloud3} from "../../assets/clouds/cloud3.svg";
import {ReactComponent as Cloud4} from "../../assets/clouds/cloud4.svg";
import {ReactComponent as Cloud5} from "../../assets/clouds/cloud5.svg";
import {ReactComponent as Cloud6} from "../../assets/clouds/cloud6.svg";
import {ReactComponent as Cloud7} from "../../assets/clouds/cloud7.svg";
import {ReactComponent as Cloud8} from "../../assets/clouds/cloud8.svg";


const Hero = () => {
  const scrollY = useScroll()
  const [translateX, setTranslateX] = useState(0);
  const [direction, setDirection] = useState(1); // 1 to the right, -1 to the left

  useEffect(() => {
    const moveClouds = () => {
      setTranslateX(prev => {
        let newDirection = direction;
        if (prev >= 100 || prev <= -100) {
          newDirection = -direction;
          setDirection(newDirection);
        }
        return prev + (0.5 * newDirection);
      });
    };

    const intervalId = setInterval(moveClouds, 50);
    return () => clearInterval(intervalId);
  }, [direction]);

  const calculateTranslate = (scrollY, factor) => {
    return `translate3d(0, ${scrollY * factor}px, 0)`;
  };

  return (
    <div className={styles.section_hero}>
      <div className={styles['hero-wrapper']}>
        <Hero9 width="100%" height="100%" className={styles['hero-1']} />
        <Hero8 width="100%" height="100%" className={styles['hero-2']}
               style={{
                 transform: calculateTranslate(scrollY, 0.1)
               }}/>
        <Hero7 width="100%" height="100%" className={styles['hero-3']}
               style={{
                 transform: calculateTranslate(scrollY, 0.2)
               }}/>
        <Hero6 width="100%" height="100%" className={styles['hero-4']}
               style={{
                 transform: calculateTranslate(scrollY, 0.4)
               }}/>
        <Hero5 width="100%" height="100%" className={styles['hero-5']}
               style={{
                 transform: calculateTranslate(scrollY, 0.4)
               }}/>
        <Hero4 width="100%" height="100%" className={styles['hero-6']}
               style={{
                 transform: calculateTranslate(scrollY, 0.4)
               }}/>
        <Hero3 width="100%" height="100%" className={styles['hero-7']}
               style={{
                 transform: calculateTranslate(scrollY, 0.8)
               }}/>
        <Hero2 width="100%" height="100%" className={styles['hero-8']}
               style={{
                 transform: calculateTranslate(scrollY, 0.8)
               }}/>
        <Hero1 width="100%" height="100%" className={styles['hero-9']}
               style={{
                 transform: calculateTranslate(scrollY, 0.6)
               }}
               />
        <Bridge width="100%" height="100%" className={styles['hero-10']}
                style={{
                  transform: calculateTranslate(scrollY, 0.4)
                }}
        />
        <Train className={styles['hero-11']} width="100%" height="100%"
               style={{
                 opacity: 1 - scrollY/100,
               }}/>
        <Sun className={styles['hero-12']} width="100%" height="100%"
             style={{
               opacity: scrollY/500,
               transform: calculateTranslate(scrollY, 0.6)
             }}/>
        <Cloud1 width="100%" height="100%" className={styles['hero-cloud1']}
                style={{
                  transform: `translate3d(${translateX}px, 0, 0)`
                }}/>
        <Cloud2 width="100%" height="100%" className={styles['hero-cloud2']}
                style={{
                  transform: `translate3d(${translateX}px, 0, 0)`
                }}/>
        <Cloud3 width="100%" height="100%" className={styles['hero-cloud3']}
                style={{
                  transform: `translate3d(${translateX}px, 0, 0)`
                }}/>
        <Cloud4 width="100%" height="100%" className={styles['hero-cloud4']}
                style={{
                  transform: `translate3d(${translateX}px, 0, 0)`
                }}/>
        <Cloud5 width="100%" height="100%" className={styles['hero-cloud5']}
                style={{
                  transform: `translate3d(${translateX}px, 0, 0)`
                }}/>
        <Cloud6 width="100%" height="100%" className={styles['hero-cloud6']}
                style={{
                  transform: `translate3d(${translateX}px, 0, 0)`
                }}/>
        <Cloud7 width="100%" height="100%" className={styles['hero-cloud7']}
                style={{
                  transform: `translate3d(${translateX}px, 0, 0)`
                }}/>
        <Cloud8 width="100%" height="100%" className={styles['hero-cloud8']}
                style={{
                  transform: `translate3d(${translateX}px, 0, 0)`
                }}/>

      </div>

    </div>


  )
};


export default Hero;