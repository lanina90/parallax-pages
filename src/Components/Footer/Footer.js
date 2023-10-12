import React from 'react';
import {useScroll} from "../../utils/useScroll";

const Footer = () => {
  const scrollY = useScroll()
  return (
    <section className={'section-footer'}>
      <img src="https://assets.website-files.com/607bec7082b45011f6bea82e/607bec7082b4503ba4bea849_bg-footer.png"
           loading="eager"
           alt="" className="bg-footer"/>
      <div className={'container-footer'}>
        <div className={'container align-center'}
             style={{
               willChange: "opacity, transform",
               opacity: 0.1 + scrollY / 1350,
               transform: `translate3d(0px, ${200 - scrollY/7}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
               transformStyle: "preserve-3d",
             }}>
          <div className={'text-wrapper'}>
            <h2 className={'heading-style-h2 color-style-white'}>Aenean faucibus ornare tellus</h2>
            <p className={'text-size-xlarge color-style-white'}>
              Contact us and let's talk.
            </p>
          </div>

          <button>Contact me</button>
        </div>
      </div>
    </section>
  );
};

export default Footer;