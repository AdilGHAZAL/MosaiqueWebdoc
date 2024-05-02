import React, { useState, useEffect, useRef } from 'react';
import './ScrollReveal.css'; // ensure your styles are correctly set up

const ScrollReveal = ({ children, animationDuration }) => {
    const [allowScrolling, setAllowScrolling] = useState(true);
    const revealRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !allowScrolling) {
                    // Trigger the animation
                    entry.target.style.animation = `scroll-reveal ${animationDuration}ms linear forwards`;
                    // After the animation, allow scrolling
                    setTimeout(() => {
                        setAllowScrolling(true);
                    }, animationDuration);
                }
            });
        });

        if (revealRef.current) {
            observer.observe(revealRef.current);
        }

        return () => {
            if (revealRef.current) {
                observer.unobserve(revealRef.current);
            }
        };
    }, [allowScrolling, animationDuration]);

    // Optional: to disable scrolling when not allowed
    useEffect(() => {
        const handleScroll = () => {
            if (!allowScrolling) {
                window.scrollTo(0, 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [allowScrolling]);

    return (
        <div ref={revealRef} className="scroll-reveal">
            {children}
        </div>
    );
};

export default ScrollReveal;
