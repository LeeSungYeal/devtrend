import { useRef } from 'react';

/**
 * Hook for Magnetic Button effect
 * @param {Object} options Configuration options
 * @param {number} options.strength Movement strength (default: 0.5)
 * @param {number} options.range Detection range (not used in this simple version)
 */
export function useMagnetic({ strength = 0.5 } = {}) {
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        const element = ref.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        // Move element towards mouse
        element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        element.style.transition = 'transform 0.1s linear';
    };

    const handleMouseLeave = () => {
        const element = ref.current;
        if (!element) return;

        element.style.transform = 'translate(0px, 0px)';
        element.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'; // Springy reset
    };

    return { ref, handleMouseMove, handleMouseLeave };
}
