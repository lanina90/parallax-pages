import React from 'react';
import styles from './Services.module.css'
import {ReactComponent as RocksUp} from "../../assets/services/rocks_services.svg";
import {ReactComponent as BubblesRight} from "../../assets/services/bubbles_right.svg";
import {ReactComponent as BubblesMiddle} from "../../assets/services/bubbles_middle.svg";
import {ReactComponent as BubblesLeft} from "../../assets/services/bubbles_left.svg";
import {ReactComponent as Fiches} from "../../assets/services/fiches.svg";
import {ReactComponent as Waves} from "../../assets/services/waves.svg";
import {ReactComponent as Chain} from "../../assets/services/chain.svg";
import {ReactComponent as RockChain} from "../../assets/services/rocks_chain.svg";
import {ReactComponent as GearLeft} from "../../assets/services/gear_left.svg";
import {ReactComponent as GearRight} from "../../assets/services/gear_right.svg";
import {ReactComponent as Bubbles} from "../../assets/services/bubbles.svg";
import {useScroll} from "../../hooks/useScroll";
import {useMedia} from "../../hooks/useMedia";

const Services = () => {
  const scrollY = useScroll()
  const {isMobile, isTablet, isDesktop} = useMedia()

  let chainTranslate3d;
  let servicesTranslate3d;

  if(isMobile){
    chainTranslate3d = `translate3d(0px, ${20-scrollY/10}%, 0px)`
    servicesTranslate3d = `translate3d(0px,${10-scrollY/10}%, 0px)`
  } else if(isTablet) {
    chainTranslate3d = `translate3d(0px, -${scrollY * 0.04}px, 0px)`
    servicesTranslate3d = `translate3d(0px,${10 - scrollY * 0.08}px, 0px)`
  } else if(isDesktop) {
    chainTranslate3d = `translate3d(0px, -${scrollY * 0.2}px, 0px)`
    servicesTranslate3d = `translate3d(0px,${100 - scrollY * 0.08}px, 0px)`
  } else  {
    chainTranslate3d = `translate3d(0px, ${75-scrollY/11}%, 0px)`
    servicesTranslate3d = `translate3d(0px,${190-scrollY/5}%, 0px)`
  }

  return (
    <section className={styles.services}>
      <div className={styles.wrapper}>
        <RocksUp width="100%" height="100%" className={styles['services-09']}/>
        <BubblesRight width="100%" height="100%" className={styles['services-08']}
                      style={{
                        transform: `translate3d(0px,${75-scrollY/14}%, 0px)`
                      }}/>
        <BubblesMiddle width="100%" height="100%" className={styles['services-07']}
                       style={{
                         transform: `translate3d(0px,${75-scrollY/21}%, 0px)`
                       }}/>
        <BubblesLeft width="100%" height="100%" className={styles['services-06']}
                     style={{
                       transform: `translate3d(0px,-${scrollY/10}px, 0px)`
                     }}/>
        <Bubbles width="100%" height="100%" className={styles['services-08']}
                     style={{
                       transform: `translate3d(0px,${59 - scrollY*0.05}%, 0px)`
                     }}/>
        <Fiches width="100%" height="100%" className={styles['services-05']}
                style={{
                  transform: `translate3d(${scrollY*0.007}%,0px, 0px)`
                }}/>
        <Waves width="100%" height="100%" className={styles['services-04']}
               style={{
                 transform: `translate3d(${19 - scrollY*0.01}%,0px,0px) scale3d(${scrollY*0.0003}, ${scrollY*0.0004}, 1)`
               }}/>
        <Chain width="100%" height="100%" className={styles['services-03']}
               style={{
                 transform: chainTranslate3d
               }}/>
        <RockChain width="100%" height="100%" className={styles['services-02']}/>
        <div className={styles['services-01']}>
          <GearLeft width="100%" height="100%" className={styles['gear-left']}
                    style={{
                      transform: `rotateZ(${scrollY * 0.1}deg)`
                    }}
          />
          <GearRight width="100%" height="100%" className={styles['gear-right']}
                     style={{
                       transform: `rotateZ(-${scrollY * 0.1}deg)`
                     }}/>
        </div>

        <div className={styles.services_list}
             style={{
               transform: servicesTranslate3d
             }}
        >
          <div className={styles.card}>
            <div className={styles.title}>ADVERTISING</div>
            <div className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar nunc a
              nulla semper elementum. Duis ut tellus nisi.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.title}>CGI, VIDEO
              & MOTION
            </div>
            <div className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar nunc a
              nulla semper elementum. Duis ut tellus nisi.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.title}>IMAGE SERVICES</div>
            <div className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar nunc a
              nulla semper elementum. Duis ut tellus nisi.
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Services;