import React, { useEffect, useRef } from 'react';

const InteractiveCube: React.FC = () => {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    let rotateX = 0;
    let rotateY = 0;
    let targetRotateX = 0;
    let targetRotateY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      targetRotateX = (clientY - innerHeight / 2) / 10;
      targetRotateY = (clientX - innerWidth / 2) / 10;
    };

    const animate = () => {
      rotateX += (targetRotateX - rotateX) * 0.1;
      rotateY += (targetRotateY - rotateY) * 0.1;
      
      cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="cube-container">
      <div ref={cubeRef} className="cube">
        <div className="cube-face front"></div>
        <div className="cube-face back"></div>
        <div className="cube-face right"></div>
        <div className="cube-face left"></div>
        <div className="cube-face top"></div>
        <div className="cube-face bottom"></div>
      </div>
    </div>
  );
};

export default InteractiveCube;