import React, { useState, useEffect } from 'react';
import './ScrollReveal.css'; // Import the CSS for styling

const ScrollReveal = ({ children, animationDuration }) => {
    const [isAnimationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        // Disable scrolling function
        const disableScroll = () => window.scrollTo(0, 0);

        // Event listener for scroll based on animation state
        const handleScroll = () => {
            if (!isAnimationComplete) {
                disableScroll();
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isAnimationComplete]);

    // Set a timeout to mark the end of the animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationComplete(true);
        }, animationDuration);

        return () => clearTimeout(timer);
    }, [animationDuration]);

    return (
        <div className='scroll-reveal'>
            {children}
        </div>
    );
};

export default ScrollReveal;
