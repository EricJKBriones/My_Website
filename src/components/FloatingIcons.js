'use client';

import React from 'react';

const allIcons = [
  '/assets/img/icons/3d.png', '/assets/img/icons/adobe_photoshop.png',
  '/assets/img/icons/android.png', '/assets/img/icons/Autodesk_23627.png',
  '/assets/img/icons/Blender_23505.png', '/assets/img/icons/BrAIn.png',
  '/assets/img/icons/c-.png', '/assets/img/icons/cyber-security.png',
  '/assets/img/icons/github.png', '/assets/img/icons/html.png',
  '/assets/img/icons/java-script.png', '/assets/img/icons/java.png',
  '/assets/img/icons/settings.png', '/assets/img/icons/text.png',
  '/assets/img/icons/web.png'
];

const FloatingIcons = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="scroll-symbol"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            backgroundImage: `url('${allIcons[Math.floor(Math.random() * allIcons.length)]}')`,
            minWidth: `${Math.random() * 60 + 20}px`, // Random size between 20px and 80px
            minHeight: `${Math.random() * 60 + 20}px`, // Random size between 20px and 80px
            animationDelay: `${Math.random() * 10}s`, // Random delay for each icon
            animationDuration: `${Math.random() * 20 + 10}s`, // Random duration between 10s and 30s
            '--rand-x': `${(Math.random() - 0.5) * 200}vw`, // Random horizontal movement
            '--rand-y': `${(Math.random() - 0.5) * 200}vh` // Random vertical movement
          }}
        />
      ))}
    </>
  );
};

export default FloatingIcons;
