import React, {useRef} from 'react';
import styles from './Clients.module.css'
import {ReactComponent as BubbleRight} from "../../assets/clients/bubbles_right.svg";
import {ReactComponent as BubbleLeft} from "../../assets/clients/bubble_left.svg";
import {ReactComponent as BubbleMiddle} from "../../assets/clients/bubbles_middle.svg";
import {ReactComponent as Footer1} from "../../assets/clients/clients_footer.svg";
import {ReactComponent as Footer2} from "../../assets/clients/clients_rock.svg";
import {ReactComponent as Footer3} from "../../assets/clients/clients_rocks_2.svg";
import {ReactComponent as Ship} from "../../assets/clients/ship.svg";
import {ReactComponent as Mask} from "../../assets/clients/mask.svg";
import Fish from "./Fish";
import {logos} from "../../consts/ClientsLogo";
import Card from "./Card";
import {useScroll} from "../../hooks/useScroll";
import {useMedia} from "../../hooks/useMedia";

const Clients = () => {
  const sectionRef = useRef(null);
  const {isMobile, isTablet, isDesktop} = useMedia()
  const scrollY = useScroll()
  let translate3d
  if (isMobile) {
    translate3d = `translate3d(0px,${1 - scrollY/7}%, 0px)`
  } else if (isTablet) {
    translate3d = `translate3d(0px,${ - scrollY * 0.07}px, 0px)`
  } else if (isDesktop) {
    translate3d = `translate3d(0px,${ - scrollY * 0.07}px, 0px)`
  } else {
    translate3d = `translate3d(0px,${- scrollY * 0.3}px, 0px)`
  }

  return (
    <section className={styles.clients} style={{
      transform: translate3d
    }}>
      <div ref={sectionRef} className={styles.wrapper}>
        <BubbleRight width="100%" height="100%" className={styles['clients-01']} loading="eager"/>
        <BubbleMiddle width="100%" height="100%" className={styles['clients-02']} loading="eager"/>
        <BubbleLeft width="100%" height="100%" className={styles['clients-03']} loading="eager"/>
        <Footer1 width="100%" height="100%" className={styles['clients-04']} loading="eager"/>
        <Footer2 width="100%" height="100%" className={styles['clients-05']} loading="eager"/>
        <Footer3 width="100%" height="100%" className={styles['clients-06']} loading="eager"/>
        <Fish sectionRef={sectionRef}/>
        <Ship width="100%" height="100%" className={styles['clients-07']} loading="eager"/>
        <Mask width="100%" height="100%" className={styles['masque_bottom']} loading="eager"/>

        <div className={styles.block}>
          <h2>Latest Clients</h2>
          <div className={styles['block-cards']}>
            {logos.map((item, index) =>
              <Card key={index} img={item.img}/>
            )}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Clients;