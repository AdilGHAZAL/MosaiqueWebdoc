import React, { useState, useEffect, useRef } from 'react';
import './ScrollReveal.css'; // Import the CSS for styling

const ScrollReveal = ({ children, animationDuration }) => {
    const [isInView, setIsInView] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            });
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    useEffect(() => {
        // Disable scrolling function
        const disableScroll = () => window.scrollTo(0, 0);

        // Add and remove scroll blocking
        if (!isInView) {
            window.addEventListener('scroll', disableScroll);
        } else {
            window.removeEventListener('scroll', disableScroll);
        }

        // Cleanup function to remove scroll blocking
        return () => window.removeEventListener('scroll', disableScroll);
    }, [isInView]);

    useEffect(() => {
        const handleAnimationEnd = () => {
            setIsInView(false);
        };

        const node = elementRef.current;
        if (node) {
            node.addEventListener('animationend', handleAnimationEnd);
        }

        return () => {
            if (node) {
                node.removeEventListener('animationend', handleAnimationEnd);
            }
        };
    }, []);

    return (
        <div ref={elementRef} className={`scroll-reveal ${isInView ? 'start-animation' : ''}`}>
            {children}
        </div>
    );
};

export default ScrollReveal;
