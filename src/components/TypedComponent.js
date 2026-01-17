'use client';

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = ({ strings }) => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, [strings]);

  return (
    <span ref={el} />
  );
};

export default TypedComponent;
