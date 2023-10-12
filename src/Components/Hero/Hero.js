import React, {useEffect, useRef} from 'react';
import HeroImage from "./HeroImage";
import Hero11 from '../../assets/hero/hero-11.webp'
import Hero10 from '../../assets/hero/hero-10.webp'
import Hero9 from '../../assets/hero/hero-09.webp'
import Hero8 from '../../assets/hero/hero-08.webp'
import Hero7 from '../../assets/hero/hero-07.webp'
import Hero6 from '../../assets/hero/hero-06.webp'
import Hero5 from '../../assets/hero/hero-05.webp'
import Hero4 from '../../assets/hero/hero-04.webp'
import Hero3 from '../../assets/hero/hero-03.webp'
import Hero2 from '../../assets/hero/hero-02.webp'
import Hero1 from '../../assets/hero/hero-01.webp'
import Cloud8 from '../../assets/clouds/cloud8.webp'
import Cloud7 from '../../assets/clouds/cloud7.webp'
import Cloud6 from '../../assets/clouds/cloud6.webp'
import Cloud5 from '../../assets/clouds/cloud5.webp'
import Cloud4 from '../../assets/clouds/cloud4.webp'
import Cloud3 from '../../assets/clouds/cloud3.webp'
import Cloud2 from '../../assets/clouds/cloud2.webp'
import Cloud1 from '../../assets/clouds/cloud1.webp'
import {useScroll} from "../../utils/useScroll";
const Hero = () => {
  const scrollY = useScroll()

  const refs = useRef([]);
  const translateValues = [0, 0, 0, 0, 0, 0, 0, 0];

  const images = [Hero11, Hero10, Hero9,Hero8, Hero7, Hero6, Hero5,Hero4,Hero3,Hero2,Hero1]
  const clouds = [Cloud8, Cloud7, Cloud6,Cloud5, Cloud4, Cloud3,Cloud2,Cloud1]

  useEffect(() => {
    const moveElements = () => {
      refs.current.forEach((element, index) => {
        if (element) {

          if(translateValues[index] <= 10) {
            translateValues[index] -= 0.01;
          } else if (translateValues[index] >= 0) {
            translateValues[index] += 0.01;
          }
          element.style.transform = `translate3d(${translateValues[index]}%, 0, 0)`;
        }
      });
    };

    const intervalId = setInterval(moveElements, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="section_hero">
      <div className="hero-wrapper">
        {images.map((item, index) =>
          <HeroImage
            src={item}
            alt={`hero-${index + 1}`}
            className={`hero-${index + 1}`}
            scrollY={scrollY}
          />
        )}

        {clouds.map((item, index) =>
          <HeroImage
            src={item}
            alt={`cloud-${index + 1}`}
            className={`hero-cloud${index + 1}`}
            ref={(el) => (refs.current[index] = el)}
          />
        )}
      </div>
    </div>
)
};


export default Hero;