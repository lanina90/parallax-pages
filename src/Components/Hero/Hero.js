import React, {useEffect, useRef} from 'react';
import HeroImage from "./HeroImage";
import {useScroll} from "../../utils/useScroll";
import {useMedia} from "../../hooks/useMedia";
import {cloudsLg, cloudsSm, imagesLg, imagesSm} from "../../consts/ImagesHero";
const Hero = () => {
  const scrollY = useScroll()
  const {isMobile} = useMedia()

  let images;
  let clouds;
  if(isMobile) {
    images = imagesSm
    clouds = cloudsSm
  } else{
    images = imagesLg
    clouds = cloudsLg
  }

  const refs = useRef([]);

  useEffect(() => {
    const translateValues = [0, 0, 0, 0, 0, 0, 0, 0];
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