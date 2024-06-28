"use client";
import React, { useState } from 'react';
import styles from './Menu.module.css';
import Link from 'next/link';


// const Menu = () => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     const handleClick = (index) => {
//         setActiveIndex(index);
//     };

//     return (
//         <div className={styles.menuList}>
//             {['For Vendors', 'For Workers', 'Contact Us', 'Whitepaper', 'Takenomics'].map((item, index) => (
//                 <a 
//                     href="#" 
//                     key={index} 
//                     className={`${styles.menuItem} ${activeIndex === index ? styles.active : ''}`} 
//                     onClick={() => handleClick(index)}
//                 >
//                     {item}
//                 </a>
//             ))}
//         </div>
//     );
// };
const Menu = ({ activePage }) => (
    <div className={styles.menuList}>
        <Link href="/" className={`${styles.menuItem} ${activePage === 'vendor' ? styles.active : ''}`}>
        For Vendors
        </Link>
        <Link href="/worker/home" className={`${styles.menuItem} ${activePage === 'worker' ? styles.active : ''}`}>
        For Workers
        </Link>
        <Link href="/contact" className={`${styles.menuItem} ${activePage === 'contact' ? styles.active : ''}`}>
        Contact Us
        </Link>
        <Link href="/whitepaper" className={`${styles.menuItem} ${activePage === 'whitepaper' ? styles.active : ''}`}>
        Whitepaper
        </Link>
        <Link href="/takenomics" className={`${styles.menuItem} ${activePage === 'takenomics' ? styles.active : ''}`}>
        Takenomics
        </Link>
  </div>
  );
export default Menu;