"use client";
import React, { useState } from 'react';
import styles from './Menu.module.css';

const Menu = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.menuList}>
            {['For Vendors', 'For Workers', 'Contact Us', 'Whitepaper', 'Takenomics'].map((item, index) => (
                <a 
                    href="#" 
                    key={index} 
                    className={`${styles.menuItem} ${activeIndex === index ? styles.active : ''}`} 
                    onClick={() => handleClick(index)}
                >
                    {item}
                </a>
            ))}
        </div>
    );
};

export default Menu;