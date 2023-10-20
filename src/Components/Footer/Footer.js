import React from 'react';
import styles from './Footer.module.css'
import {useScroll} from "../../hooks/useScroll";
import {useMedia} from "../../hooks/useMedia";
import Form from "./Form/Form";

const Footer = () => {
  const {isMobile, isTablet, isDesktop} = useMedia()
  const scrollY = useScroll()
  let translate3d
  if (isMobile) {
    translate3d = `translate3d(0px,-${scrollY * 0.4}px, 0px)`
  } else if (isTablet) {
    translate3d = `translate3d(0px,-${scrollY * 0.07}px, 0px)`
  } else if (isDesktop) {
    translate3d = `translate3d(0px,-${scrollY * 0.07}px, 0px)`
  } else {
    translate3d = `translate3d(0px,-${scrollY * 0.3}px, 0px)`
  }
  return (
    <section className={styles.footer} style={{
      transform: translate3d
    }}>
      <div className={styles.wrapper}>
        <h2>Available for amazing projects!</h2>
        <p>If you're looking for exceptional production services that will help you stand out from the crowd, don't
          hesitate
          to contact us today!</p>

        <Form/>
      </div>


    </section>
  )
    ;
};

export default Footer;