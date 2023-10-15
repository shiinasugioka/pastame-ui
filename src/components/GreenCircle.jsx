import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './GreenCircle.css'; // Import the CSS

const GreenCircle = ({ state }) => {
    const [{ top, left, size, width, zIndex }, set] = useSpring(() => ({ top: '-50%', left: '0%', size: '100%', width: '100%', zIndex: -1 }));

    useEffect(() => {
        switch (state) {
            case 0:
                set({ top: '-70%', left: '-100%', size: '100%', width: '300%', zIndex: -1 });
                break;
            case 1:
                set({ top: '-20%', left: '-100%', size: '150%', width: '300%', zIndex: -1 });
                break;
            case 2:
                set({ top: '50%', left: '50%', size: '100%', width: '100%', zIndex: -1 });
                break;
            case 3:
                set({ top: '0%', left: '0%', size: '200%', width: '200%', zIndex: -1 });
                break;
            case 4:
                set({ top: '-50%', left: '-170%', size: '120%', width: '300%', zIndex: 0 }); // Remove filter here
                break;

            default:
                break;
        }
    }, [state, set]);
    console.log(state);

    return (
        <animated.div className="greenCircle" style={{ top, left, width, height:size, zIndex }} />
    );
};

export default GreenCircle;
