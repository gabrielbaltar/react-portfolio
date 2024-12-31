// components/SmoothScrolling/smoothScrolling.js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registra o ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const smoothScroll = () => {
  gsap.to(window, {
    scrollTo: { y: 'max', autoKill: false },
    duration: 2.5, // Ajuste a duração para suavizar o scroll
    ease: 'power3.out', // Use um easing mais suave
    onUpdate: () => ScrollTrigger.update(), // Atualiza o ScrollTrigger
  });
};

export default smoothScroll;
