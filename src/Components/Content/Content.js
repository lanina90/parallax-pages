import React from 'react';
import {useScroll} from "../../hooks/useScroll";
import styles from './Content.module.css'
import Container from "../Container/Container";

const Content = () => {
  const scrollY = useScroll()

  return (
    <Container component={'section'} className={styles.wrapper}>
        <div className={styles.title}>
          <h1
            style={{
              opacity: 0.2 + scrollY / 1000,
              transform: `translate3d(0px, ${96 - scrollY / 3}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            }}
          >Lorem Ipsum</h1>
          <h2
            style={{
              opacity: 0.2 + scrollY / 1000,
              transform: `translate3d(0px, ${106 - scrollY / 4}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            }}
          >Parallax Effect</h2>
        </div>
        <div className={styles.content}>

              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
                iaculis erat. Aenean faucibus ornare tellus in molestie. Proin vitae risus et lectus pharetra dictum.
                Suspendisse sem diam, volutpat eu odio id, ultricies bibendum metus. Integer at elit euismod, maximus
                dolor nec, suscipit orci. Sed nibh metus, ullamcorper ac magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
                iaculis erat. Aenean faucibus ornare tellus in molestie. Proin vitae risus et lectus pharetra dictum.
                Suspendisse sem diam, volutpat eu odio id, ultricies bibendum metus. Integer at elit euismod, maximus
                dolor nec, suscipit orci. Sed nibh metus, ullamcorper ac magna.</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
                iaculis erat. Aenean faucibus ornare tellus in molestie. Proin vitae risus et lectus pharetra dictum.
                Suspendisse sem diam, volutpat eu odio id, ultricies bibendum metus. Integer at elit euismod, maximus
                dolor nec, suscipit orci. Sed nibh metus, ullamcorper ac magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
                iaculis erat. Aenean faucibus ornare tellus in molestie. Proin vitae risus et lectus pharetra dictum.
                Suspendisse sem diam, volutpat eu odio id, ultricies bibendum metus. Integer at elit euismod, maximus
                dolor nec, suscipit orci. Sed nibh metus, ullamcorper ac magna.</div>
        </div>
    </Container>
  );
};

export default Content;