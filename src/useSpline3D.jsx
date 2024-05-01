import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

export const useSpline3D = (url) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    
    // Charger le fichier 3D
    app.load(url);

    // Nettoyage de l'instance d'application lors du démontage
    return () => {
      app.dispose();
    };
  }, [url]);

  return canvasRef;
};
