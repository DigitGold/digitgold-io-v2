import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const BackgroundNodules: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize particles
    const initParticles = () => {
      particles.current = [];
      const particleCount = Math.floor(window.innerWidth * window.innerHeight / 15000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      ctx.fillStyle = '#D4AF37'; // Gold color
      particles.current.forEach((particle, index) => {
        // Calculate distance from mouse
        const dx = particle.x - mousePosition.current.x;
        const dy = particle.y - mousePosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;
        
        // Apply mouse influence
        if (distance < maxDistance && mousePosition.current.x !== 0) {
          const influence = 1 - distance / maxDistance;
          particle.x += dx * particle.speed * 0.01 * influence;
          particle.y += dy * particle.speed * 0.01 * influence;
          
          // Increase opacity near mouse
          ctx.globalAlpha = Math.min(1, particle.opacity + influence * 0.5);
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size + influence * 1.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Normal rendering
          ctx.globalAlpha = particle.opacity;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Slow drift movement
          particle.y += particle.speed * 0.5;
          
          // Reset particles that go off screen
          if (particle.y > canvas.height) {
            particles.current[index].y = 0;
            particles.current[index].x = Math.random() * canvas.width;
          }
        }
      });
      
      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;
    };

    // Reset mouse position when mouse leaves
    const handleMouseLeave = () => {
      mousePosition.current.x = 0;
      mousePosition.current.y = 0;
    };

    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    resizeCanvas();
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40 z-0"
    />
  );
};

export default BackgroundNodules;