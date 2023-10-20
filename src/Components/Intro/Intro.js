import React from 'react';
import styles from './Intro.module.css'
import {ReactComponent as RocksDown} from "../../assets/intro/intro-07.svg";
import {ReactComponent as RocksFull} from "../../assets/intro/intro-06.svg";
import {ReactComponent as RocksUp} from "../../assets/intro/intro-05.svg";
import {ReactComponent as TubesLight} from "../../assets/intro/tubes_light.svg";
import {ReactComponent as TubesDark} from "../../assets/intro/tubes_dark.svg";
import {ReactComponent as BackGround} from "../../assets/intro/background.svg";
import {useScroll} from "../../hooks/useScroll";
import {useMedia} from "../../hooks/useMedia";

const Intro = () => {
  const scrollY = useScroll()
  const {isMobile, isTablet, isDesktop} = useMedia()

  let translate3d;
  let opacity;
  if(isMobile) {
    translate3d = `translate3d(0px, 0px, 0px)`
    opacity = 1
  } else if(isTablet) {
    translate3d = `translate3d(0px, ${110 - scrollY / 4}px, 0px)`
    opacity = 0.6 + scrollY / 900
  } else if(isDesktop) {
    translate3d = `translate3d(0px, ${220 - scrollY / 4}px, 0px)`
    opacity = 0.5 + scrollY / 900
  } else{
    translate3d = `translate3d(0px, ${260 - scrollY / 4}px, 0px)`
    opacity = 0.4 + scrollY / 900
  }

  return (
    <section>
      <div className={styles.wrapper}>
        <RocksDown width="100%" height="100%" className={styles['intro-01']} loading="eager"/>
        <RocksFull width="100%" height="100%" className={styles['intro-02']} loading="eager"/>
        <RocksUp width="100%" height="100%" className={styles['intro-03']} loading="eager"/>
        <TubesLight width="100%" height="100%" className={styles['intro-04']} loading="eager"/>
        <TubesDark width="100%" height="100%" className={styles['intro-05']} loading="eager"/>
        <BackGround width="100%" height="100%" className={styles['intro-06']} loading="eager"/>
        <div className={styles['intro-07']}
             style={{
               opacity: opacity,
               transform: `${translate3d} scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
             }}>
          <h1>CREATIVE PRODUCTION</h1>
          <p className={styles.services}>Photography,CGI, Video & Motion</p></div>
      </div>
    </section>
  );
};

export default Intro;