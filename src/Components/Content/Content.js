import React from 'react';
import {useScroll} from "../../utils/useScroll";

const Content = () => {
  const scrollY = useScroll()

  return (
    <section className={'section-content'}>
      <div className={'padding-global'}>
        <div className={'container align-center'}>
          <h1
            className="heading-content-h1"
            style={{
              willChange: "opacity, transform",
              opacity: 0.2 + scrollY / 1000,
              transform: `translate3d(0px, ${96 - scrollY / 3}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              transformStyle: "preserve-3d"
            }}
          >Lorem Ipsum</h1>
          <h2
            className="heading-content-h2"
            style={{
              willChange: "opacity, transform",
              opacity: 0.2 + scrollY / 1000,
              transform: `translate3d(0px, ${106 - scrollY / 4}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              transformStyle: "preserve-3d"
            }}
          >Parallax<br/>Effect</h2>
        </div>
        <div className={'container text-align-left'}>

            <div className={'container'}>
              <p className={'text-size-medium'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
                iaculis erat. Aenean faucibus ornare tellus in molestie. Proin vitae risus et lectus pharetra dictum.
                Suspendisse sem diam, volutpat eu odio id, ultricies bibendum metus. Integer at elit euismod, maximus
                dolor nec, suscipit orci. Sed nibh metus, ullamcorper ac magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
                iaculis erat. Aenean faucibus ornare tellus in molestie. Proin vitae risus et lectus pharetra dictum.
                Suspendisse sem diam, volutpat eu odio id, ultricies bibendum metus. Integer at elit euismod, maximus
                dolor nec, suscipit orci. Sed nibh metus, ullamcorper ac magna.</p>
            </div>
            <div className={'container'}>
              <p className={'text-size-medium'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
                iaculis erat. Aenean faucibus ornare tellus in molestie. Proin vitae risus et lectus pharetra dictum.
                Suspendisse sem diam, volutpat eu odio id, ultricies bibendum metus. Integer at elit euismod, maximus
                dolor nec, suscipit orci. Sed nibh metus, ullamcorper ac magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
                iaculis erat. Aenean faucibus ornare tellus in molestie. Proin vitae risus et lectus pharetra dictum.
                Suspendisse sem diam, volutpat eu odio id, ultricies bibendum metus. Integer at elit euismod, maximus
                dolor nec, suscipit orci. Sed nibh metus, ullamcorper ac magna.</p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Content;