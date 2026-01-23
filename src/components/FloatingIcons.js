'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './FloatingIcons.module.css';

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

const generateIconProperties = (iconSrc, index) => {
  const size = Math.random() * 40 + 20;
  return {
    id: index,
    iconSrc,
    top: Math.random() * (window.innerHeight - size),
    left: Math.random() * (window.innerWidth - size),
    width: size,
    height: size,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
  };
};

const FloatingIcons = () => {
    const [icons, setIcons] = useState([]);
    const iconRefs = useRef([]);
    const iconsRef = useRef([]);

    useEffect(() => {
        let initialIcons = allIcons.map((iconSrc, index) => generateIconProperties(iconSrc, index));
        iconsRef.current = initialIcons;
        setIcons(initialIcons);
        iconRefs.current = Array(initialIcons.length).fill(null).map((_, i) => iconRefs.current[i] || React.createRef());

        let animationFrameId;
        const animate = () => {
          const newIcons = iconsRef.current.map(icon => {
            let newVx = icon.vx + (Math.random() - 0.5) * 0.1;
            let newVy = icon.vy + (Math.random() - 0.5) * 0.1;

            newVx = Math.max(-1, Math.min(1, newVx));
            newVy = Math.max(-1, Math.min(1, newVy));

            let newLeft = icon.left + newVx;
            let newTop = icon.top + newVy;

            if (newLeft < 0 || newLeft > window.innerWidth - icon.width) {
              newVx = -newVx;
              newLeft = icon.left + newVx;
            }
            if (newTop < 0 || newTop > window.innerHeight - icon.height) {
              newVy = -newVy;
              newTop = icon.top + newVy;
            }

            return {
              ...icon,
              left: newLeft,
              top: newTop,
              vx: newVx,
              vy: newVy,
            };
          });
          iconsRef.current = newIcons;
          setIcons(newIcons);
          animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        const contentElements = Array.from(document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, img'));
        const handleOpacity = () => {
            iconsRef.current.forEach((icon, index) => {
                const ref = iconRefs.current[index];
                if (ref && ref.current) {
                    const iconRect = ref.current.getBoundingClientRect();
                    let isOverlapping = false;
        
                    for (const elem of contentElements) {
                        const elemRect = elem.getBoundingClientRect();
                        if (
                            iconRect.left < elemRect.right &&
                            iconRect.right > elemRect.left &&
                            iconRect.top < elemRect.bottom &&
                            iconRect.bottom > elemRect.top
                        ) {
                            isOverlapping = true;
                            break;
                        }
                    }
        
                    if (isOverlapping) {
                        ref.current.style.opacity = '0.1';
                    } else {
                        ref.current.style.opacity = '0.5';
                    }
                }
            });
        };
        
        const intervalId = setInterval(handleOpacity, 200);

        return () => {
          cancelAnimationFrame(animationFrameId);
          clearInterval(intervalId);
        };
    }, []);

    return (
        <div className={styles.container}>
            {icons.map((icon, index) => (
                <div
                    key={icon.id}
                    ref={iconRefs.current[index]}
                    className={styles.iconWrapper}
                    style={{
                        top: `${icon.top}px`,
                        left: `${icon.left}px`,
                        width: `${icon.width}px`,
                        height: `${icon.height}px`,
                    }}
                >
                    <img src={icon.iconSrc} alt="" style={{ width: '100%', height: '100%' }} />
                </div>
            ))}
        </div>
    );
};

export default FloatingIcons;
