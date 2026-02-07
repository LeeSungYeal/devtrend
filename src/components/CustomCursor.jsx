import { useEffect, useRef } from 'react';
import './CustomCursor.css';

function CustomCursor() {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const moveCursor = (e) => {
            const { clientX: x, clientY: y } = e;

            // Main dot follows instantly
            if (cursor) {
                cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }

            // Follower follows with slight delay (handled by CSS transition usually, or requestAnimationFrame for smoothness)
            // But specifically for "magnetic" feel, let's use a simple delay approach or just CSS transition
            if (follower) {
                // We'll use CSS transition for the follower to make it smooth
                follower.animate({
                    transform: `translate3d(${x}px, ${y}px, 0)`
                }, {
                    duration: 500,
                    fill: "forwards"
                });
            }
        };

        const handleHover = () => {
            cursor?.classList.add('hovered');
            follower?.classList.add('hovered');
        };

        const handleLeave = () => {
            cursor?.classList.remove('hovered');
            follower?.classList.remove('hovered');
        };

        window.addEventListener('mousemove', moveCursor);

        // Add listeners to clickable elements
        const clickables = document.querySelectorAll('a, button, .logo, .solution-card, .problem-item');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', handleHover);
            el.addEventListener('mouseleave', handleLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={cursorRef}></div>
            <div className="cursor-follower" ref={followerRef}></div>
        </>
    );
}

export default CustomCursor;
