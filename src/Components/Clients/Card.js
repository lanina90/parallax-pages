import React, {useEffect, useRef} from 'react';
import styles from './Clients.module.css'

const Card = ({img}) => {
  const cardRef = useRef(null)



  useEffect(() => {
    const el = cardRef.current;

    const handleMove = (e) => {
      const height = el.clientHeight;
      const width = el.clientWidth;
      const xVal = e.layerX;
      const yVal = e.layerY;
      const yRotation = 40 * ((xVal - width / 2) / width);
      const xRotation = -30 * ((yVal - height / 2) / height);

      el.style.transform = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    };

    const handleMouseOut = () => {
      el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
    };

    const handleMouseDown = () => {
      el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
    };

    const handleMouseUp = () => {
      el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseout', handleMouseOut);
    el.addEventListener('mousedown', handleMouseDown);
    el.addEventListener('mouseup', handleMouseUp);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseout', handleMouseOut);
      el.removeEventListener('mousedown', handleMouseDown);
      el.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div ref={cardRef} className={styles['card']} style={{backgroundImage: `url(${img})`}}></div>
  );
};

export default Card;