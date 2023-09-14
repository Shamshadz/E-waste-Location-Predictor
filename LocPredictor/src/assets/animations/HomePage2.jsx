import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from './homePage2.json'; // Replace with the path to your animation JSON file

const HomePageAnimation2 = () => {
    useEffect(() => {
        // Find the DOM element where you want to render the animation
        const container = document.getElementById('lottie-container');

        // Initialize the Lottie animation
        const anim = lottie.loadAnimation({
            container,
            renderer: 'svg', // or 'canvas' or 'html'
            loop: true, // Set to true for looping
            autoplay: true, // Set to true to start the animation when the component mounts
            animationData, // Your imported animation JSON
        });

        return () => {
            // Cleanup: Stop and destroy the animation when the component unmounts
            anim.destroy();
        };
    }, []);

    return <div id="lottie-container" style={{ width: '100%', height: '100%' }}></div>;
};

export default HomePageAnimation2;
