"use client";

import styles from './FloatingIcons.module.css';
import { 
  BiCodeAlt, 
  BiData, 
  BiLaptop, 
  BiPalette, 
  BiMobile, 
  BiGlobe, 
  BiJoystick, 
  BiChip 
} from "react-icons/bi";

const icons = [
  BiCodeAlt,
  BiData,
  BiLaptop,
  BiPalette,
  BiMobile,
  BiGlobe,
  BiJoystick,
  BiChip
];

export default function FloatingIcons() {
  return (
    <div className={styles.container} aria-hidden="true">
      {icons.map((Icon, index) => (
        <div key={index} className={styles.iconWrapper}>
          <Icon />
        </div>
      ))}
    </div>
  );
}