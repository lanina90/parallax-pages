import React, {forwardRef} from 'react';

const HeroImage = forwardRef(
  ({src, alt, className, scrollY}, ref) => {
    let transformStyle = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';

    if (className === 'hero-1') {
      transformStyle = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
    } else if (className === 'hero-6' || className === 'hero-7' || className === 'hero-8' || className === 'hero-9' ) {
      transformStyle = `translate3d(0px, ${scrollY * 0.2}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
    } else if (className === 'hero-10') {
      transformStyle = `translate3d(0px, ${-126 + (scrollY * 0.5)}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
    }

    return (
      <img
        src={src}
        loading="eager"
        alt={alt}
        className={className}
        style={{
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          transform: transformStyle
        }}
        ref={ref ? ref : null}
      />
    );
  }
);

export default HeroImage;