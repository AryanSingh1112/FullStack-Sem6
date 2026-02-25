import { useState, useEffect, useRef } from 'react';
import './ImageText.css';

function ImageText() {
  const [isLoaded, setIsLoaded] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={componentRef} className="image-text-container">
      <div className={`image-wrapper ${isLoaded ? 'loaded' : ''}`}>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
          alt="Beautiful Mountain Landscape"
          className="lazy-image"
          loading="lazy"
        />
      </div>
      <div className={`text-content ${isLoaded ? 'loaded' : ''}`}>
        <h2>Embrace the Beauty of Nature</h2>
        <p>
          The world around us is filled with breathtaking moments waiting to be discovered. 
          From majestic mountains that touch the clouds to serene valleys that whisper ancient 
          stories, nature reminds us of the wonders that exist beyond our everyday routine.
        </p>
        <p>
          Every sunrise brings new possibilities, and every sunset teaches us the value of 
          letting go. In the quiet moments spent with nature, we find clarity, peace, and 
          a profound connection to something greater than ourselves.
        </p>
        <button className="explore-btn">Explore More</button>
      </div>
    </div>
  );
}

export default ImageText;
