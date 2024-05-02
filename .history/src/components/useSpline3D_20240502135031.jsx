import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

export const useSpline3D = (url) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    
    
    app.load(url);

    
    return () => {
      app.dispose();
    };
  }, [url]);

  return canvasRef;
};
