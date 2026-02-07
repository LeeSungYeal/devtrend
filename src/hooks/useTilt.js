import { useRef } from 'react';

/**
 * Hook for 3D Tilt and Spotlight effect
 * @param {Object} options Configuration options
 * @param {number} options.max Maximum rotation degree (default: 5)
 * @param {number} options.scale Scale on hover (default: 1.02)
 * @param {number} options.speed Reset speed in ms (default: 400)
 */
export function useTilt({ max = 5, scale = 1.02, speed = 400 } = {}) {
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        const card = ref.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Spotlight CSS variables
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

        // 3D Tilt Math
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -max;
        const rotateY = ((x - centerX) / centerX) * max;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
        // Quick reaction for mouse move
        card.style.transition = 'transform 0.1s ease-out';
    };

    const handleMouseLeave = () => {
        const card = ref.current;
        if (!card) return;

        // Reset to original state
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        // Smooth transition back
        card.style.transition = `transform ${speed}ms ease-out`;
    };

    return { ref, handleMouseMove, handleMouseLeave };
}
