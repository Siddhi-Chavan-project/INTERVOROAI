
import { useEffect, useState } from "react";
import "../styles/SplashScreen.css";

function SplashScreen({ onFinish }) {
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        const exitTimer = setTimeout(() => {
            setExiting(true);
        }, 1800);

        const finishTimer = setTimeout(() => {
            onFinish();
        }, 2400);

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(finishTimer);
        };
    }, [onFinish]);

    return (
        <div className={`splash-screen ${exiting ? "splash-exit" : ""}`}>
            <div className="splash-glow splash-glow-one"></div>
            <div className="splash-glow splash-glow-two"></div>

            <div className="splash-content">

                <div className="splash-logo">
                    <span className="splash-logo-icon">✦</span>
                </div>

                <h1>
                    INTERVORO<span> AI</span>
                </h1>

                <p className="splash-tagline">
                    Ace Your AI Interview
                </p>

                <div className="splash-loader">
                    <span></span>
                </div>

                <p className="splash-loading">
                    Preparing your experience...
                </p>

            </div>
        </div>
    );
}

export default SplashScreen;
