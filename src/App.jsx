import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Comparison from './components/Comparison';
import Process from './components/Process';
import SocialProof from './components/SocialProof';
import Closing from './components/Closing';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        // Targeted watermark removal
        const removeWatermark = () => {
            const badges = document.querySelectorAll('a[href*="unicorn.studio"], a[href*="unicom.studio"]');
            if (badges.length > 0) {
                badges.forEach(badge => {
                    badge.style.setProperty('display', 'none', 'important');
                    badge.style.setProperty('visibility', 'hidden', 'important');
                    badge.style.setProperty('opacity', '0', 'important');
                    badge.style.pointerEvents = 'none';
                });
            }
        };

        // Check frequently
        const intervalId = setInterval(removeWatermark, 100);

        // Run for 5 seconds
        const timeoutId = setTimeout(() => {
            clearInterval(intervalId);
        }, 5000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <SocialProof />
                <Intro />
                <Problem />
                <Solution />
                <Process />
                <Comparison />
                <Closing />
            </main>
            <Footer />
        </div>
    );
}

export default App;
