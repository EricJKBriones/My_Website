'use client';

import React, { useState, useEffect } from 'react';

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

// Helper to get a random item from an array
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to generate properties for a single icon
const generateIconProperties = (id, currentUsedIcons = []) => {
  let iconSrc = getRandomItem(allIcons);
  // Ensure no duplicated icon (currently visible)
  let attempts = 0;
  while (currentUsedIcons.includes(iconSrc) && attempts < allIcons.length) {
    iconSrc = getRandomItem(allIcons);
    attempts++;
  }

  const initialX = `${(Math.random() * 100)}vw`;
  const initialY = `${(Math.random() * 100)}vh`;
  const finalX = `${(Math.random() - 0.5) * 200}vw`; // Move further
  const finalY = `${(Math.random() - 0.5) * 200}vh`; // Move further

  return {
    id,
    iconSrc,
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
    minWidth: `${Math.random() * 40 + 20}px`, // Random size between 20px and 60px
    minHeight: `${Math.random() * 40 + 20}px`, // Random size between 20px and 60px
    animationDelay: `${Math.random() * 5}s`, // Random delay up to 5s
    animationDuration: `${Math.random() * 15 + 10}s`, // Random duration between 10s and 25s
    initialX,
    initialY,
    finalX,
    finalY,
  };
};

const FloatingIcons = () => {
  const [icons, setIcons] = useState([]);

  // Initialize icons on mount
  useEffect(() => {
    const initialIcons = Array.from({ length: 8 }).map((_, index) => {
      const currentUsedIcons = initialIcons ? initialIcons.map(icon => icon.iconSrc) : [];
      return generateIconProperties(index, currentUsedIcons);
    });
    setIcons(initialIcons);
  }, []);

  // Periodically update icons
  useEffect(() => {
    const interval = setInterval(() => {
      setIcons(prevIcons => {
        const iconToUpdateIndex = Math.floor(Math.random() * prevIcons.length);
        const currentUsedIcons = prevIcons.map(icon => icon.iconSrc);
        const updatedIcons = [...prevIcons];
        updatedIcons[iconToUpdateIndex] = generateIconProperties(prevIcons[iconToUpdateIndex].id, currentUsedIcons);
        return updatedIcons;
      });
    }, 3000); // Update an icon every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);


  return (
    <>
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="scroll-symbol"
          style={{
            top: icon.top,
            left: icon.left,
            backgroundImage: `url('${icon.iconSrc}')`,
            minWidth: icon.minWidth,
            minHeight: icon.minHeight,
            animationDelay: icon.animationDelay,
            animationDuration: icon.animationDuration,
            '--initial-x': icon.initialX,
            '--initial-y': icon.initialY,
            '--final-x': icon.finalX,
            '--final-y': icon.finalY,
          }}
        />
      ))}
    </>
  );
};

export default FloatingIcons;