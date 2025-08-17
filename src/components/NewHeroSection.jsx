import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NewHeroSection.css';
import videoSrc from '../assets/output.mp4'
import logo from '../../public/logo.png'

const NewHeroSection = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const video = document.querySelector('.video-bg');
        if (video) {
            video.addEventListener('ended', () => {
                video.pause();
                video.currentTime = video.duration;
                video.style.objectFit = "cover";
            });
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function clearCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        function drawBranch(startX, startY, depth = 0) {
            if (depth > 2) return;

            let x = startX;
            let y = startY;

            const segments = Math.floor(Math.random() * 4) + 2;
            for (let i = 0; i < segments; i++) {
                const ex = x + Math.random() * 50 - 25;
                const ey = y + Math.random() * 60 + 20;

                ctx.beginPath();
                ctx.strokeStyle = `rgba(180, 220, 255, 0.4)`;
                ctx.lineWidth = 1;
                ctx.moveTo(x, y);
                ctx.lineTo(ex, ey);
                ctx.stroke();

                x = ex;
                y = ey;

                if (Math.random() < 0.3) {
                    drawBranch(x, y, depth + 1);
                }
            }
        }

        function drawMainLightning(xTarget, yTarget, onComplete) {
            clearCanvas();
            ctx.shadowColor = "#cceeff";
            ctx.shadowBlur = 20;

            let sx = xTarget + (Math.random() * 100 - 50);
            let sy = 0;
            let ex = sx;
            let ey = sy;

            const points = [];

            while (ey < yTarget) {
                ex = sx + (Math.random() * 60 - 30);
                ey = sy + (Math.random() * 50 + 20);

                ctx.beginPath();
                ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
                ctx.lineWidth = 3;
                ctx.moveTo(sx, sy);
                ctx.lineTo(ex, ey);
                ctx.stroke();

                points.push({ sx, sy, ex, ey });

                sx = ex;
                sy = ey;

                if (Math.random() < 0.3) {
                    drawBranch(sx, sy);
                }
            }

            flashScreen();

            setTimeout(() => {
                fadeOut(points, onComplete);
            }, 100);
        }

        function fadeOut(points, onComplete) {
            let alpha = 0.5;
            const fade = () => {
                clearCanvas();
                ctx.shadowBlur = 0;
                ctx.strokeStyle = `rgba(200, 230, 255, ${alpha})`;
                ctx.lineWidth = 2;

                for (const { sx, sy, ex, ey } of points) {
                    ctx.beginPath();
                    ctx.moveTo(sx, sy);
                    ctx.lineTo(ex, ey);
                    ctx.stroke();
                }

                alpha -= 0.05;
                if (alpha > 0) {
                    requestAnimationFrame(fade);
                } else {
                    clearCanvas();
                    if (onComplete) onComplete();
                }
            };
            fade();
        }

        function flashScreen() {
            const flash = document.createElement("div");
            flash.style.position = "fixed";
            flash.style.top = "0";
            flash.style.left = "0";
            flash.style.width = "100vw";
            flash.style.height = "100vh";
            flash.style.background = "white";
            flash.style.opacity = "0.4";
            flash.style.zIndex = "9998";
            flash.style.pointerEvents = "none";
            flash.style.transition = "opacity 0.25s ease-out";

            document.body.appendChild(flash);
            setTimeout(() => {
                flash.style.opacity = "0";
                setTimeout(() => flash.remove(), 250);
            }, 30);
        }

        const handleClick = (e) => {
            drawMainLightning(e.clientX, e.clientY);
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        document.addEventListener("click", handleClick);
        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("click", handleClick);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="hero-section-container">
            <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999, pointerEvents: 'none' }}></canvas>
            <video className="video-bg" autoPlay muted playsInline>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="center-wrapper">
                <div className="content_delay img">
                    <img className='logo-imgs' src={logo} alt="Logo" />
                </div>
                <div className="content content_delay text">
                    <center className="headline">GenOrcasX</center>
                    <center className="subline">— Visible the invisible side of AI </center>
                    <center>Discover new dimensions through intelligent vision.</center>
                    <div className="silver-line-wrapper">
                        <div className="silver-line"></div>
                        <div className="dots">● ● ●</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewHeroSection; 