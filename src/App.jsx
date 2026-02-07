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
