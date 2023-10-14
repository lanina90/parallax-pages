import React from 'react';

const Container = ({className, component,children}) => {

  const Component = component
  return (
    <Component className={`${className} container`}>
      {children}
    </Component>
  );
};

export default Container;