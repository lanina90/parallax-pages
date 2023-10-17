import React, {useEffect, useState} from 'react';
import styles from "./Clients.module.css";
import {ReactComponent as Fish1} from "../../assets/clients/fish_1.svg";
import {ReactComponent as Fish2} from "../../assets/clients/fish_2.svg";
import {ReactComponent as Fish3} from "../../assets/clients/fish_3.svg";
import {ReactComponent as Fish4} from "../../assets/clients/fish_4.svg";

const Fish = ({sectionRef}) => {


  const [fish1State, setFish1State] = useState({
    x: Math.random() * 30,
    y: Math.random() * 100,
    z: 50,
    xVelocity: Math.random() * 1.5,
    yVelocity: Math.random() * 2,
    zVelocity: Math.random() * 0.5,
    direction: 'left'
  });

  const [fish2State, setFish2State] = useState({
    x: Math.random() * 3,
    y: 20,
    z: 0,
    xVelocity: Math.random() * 2,
    yVelocity: Math.random() * 2,
    zVelocity: Math.random() * 0.5,
    direction: 'left'
  });
  const [fish3State, setFish3State] = useState({
    x: Math.random() * 3,
    y: 10,
    z: 10,
    xVelocity: Math.random() * 2,
    yVelocity: Math.random() * 2,
    zVelocity: Math.random() * 0.5,
    direction: 'right'
  });
  const [fish4State, setFish4State] = useState({
    x: Math.random() * 200,
    y: 50,
    z: 10,
    xVelocity: Math.random() * 2,
    yVelocity: Math.random() * 2,
    zVelocity: Math.random() * 0.5,
    direction: 'left'
  });

  const tick = (currentState, setStateFunc) => {
    if (sectionRef.current) {
      const maxWidth = sectionRef.current ? sectionRef.current.offsetWidth - 20: 0;
      const maxHeight = sectionRef.current ? sectionRef.current.offsetHeight - 30 : 0;
      const maxDepth = 200;

      let {x, y, z, xVelocity, yVelocity, zVelocity} = currentState;

      x += xVelocity;
      y += yVelocity;
      z += zVelocity;
      let direction = currentState.direction;
      if (x < 0 || x > maxWidth) {
        xVelocity = -xVelocity
        direction = direction === 'left' ? 'right' : 'left';
      }
      if (y < 0 || y > maxHeight) yVelocity = -yVelocity;
      if (z < 0 || z > maxDepth) zVelocity = -zVelocity;

      setStateFunc({x, y, z, xVelocity, yVelocity, zVelocity, direction});
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => {
      tick(fish1State, setFish1State);
      tick(fish2State, setFish2State);
      tick(fish3State, setFish3State);
      tick(fish4State, setFish4State);
    }, 50);

    return () => {
      clearInterval(timerID);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fish1State, fish2State, fish3State, fish4State, sectionRef]);

  const getFishStyle = (fishState) => ({
    position: 'absolute',
    left: fishState.x,
    top: fishState.y,
    transform: `scaleX(${fishState.direction === 'right' ? 1 : -1}) scale(${1 + fishState.z / 200})`
  });

  return (
    <>
      <Fish1 style={getFishStyle(fish1State)} width="100%" height="100%" className={styles['fish-01']} loading="eager"/>
      <Fish2 style={getFishStyle(fish2State)} width="100%" height="100%" className={styles['fish-02']} loading="eager"/>
      <Fish3 style={getFishStyle(fish3State)} width="100%" height="100%" className={styles['fish-03']} loading="eager"/>
      <Fish4 style={getFishStyle(fish4State)} width="100%" height="100%" className={styles['fish-04']} loading="eager"/>
    </>
  );
};

export default Fish;