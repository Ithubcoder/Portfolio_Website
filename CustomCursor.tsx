import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseEnterLink = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || 
          (e.target as HTMLElement).tagName === 'BUTTON' ||
          (e.target as HTMLElement).closest('a') ||
          (e.target as HTMLElement).closest('button')) {
        setLinkHovered(true);
      } else {
        setLinkHovered(false);
      }
    };
    
    const handleMouseLeave = () => {
      setHidden(true);
    };
    
    const handleMouseEnter = () => {
      setHidden(false);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousemove', handleMouseEnterLink);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousemove', handleMouseEnterLink);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Check if we should use the custom cursor based on device
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);
  
  if (!isDesktop) return null;

  return (
    <>
      <div 
        className="cursor-dot" 
        style={{ 
          opacity: hidden ? 0 : 1,
          backgroundColor: linkHovered 
            ? 'rgba(20, 184, 166, 0.7)' 
            : clicked 
              ? 'rgba(249, 115, 22, 0.7)' 
              : 'rgba(111, 76, 255, 0.7)',
          width: clicked ? '15px' : linkHovered ? '25px' : '20px',
          height: clicked ? '15px' : linkHovered ? '25px' : '20px',
          left: position.x,
          top: position.y,
        }}
      />
      <div 
        className="cursor-outline" 
        style={{ 
          opacity: hidden ? 0 : 1,
          borderColor: linkHovered 
            ? 'rgba(20, 184, 166, 0.5)' 
            : clicked 
              ? 'rgba(249, 115, 22, 0.5)' 
              : 'rgba(111, 76, 255, 0.5)',
          width: clicked ? '30px' : linkHovered ? '50px' : '40px',
          height: clicked ? '30px' : linkHovered ? '50px' : '40px',
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : linkHovered ? 1.2 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;