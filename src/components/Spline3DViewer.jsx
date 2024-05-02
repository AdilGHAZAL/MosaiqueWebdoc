import React from 'react';
import { useSpline3D } from './useSpline3D'; // Assure-toi d'importer ton hook personnalisé
import './Spline3DViewer.css';

const Spline3DViewer = ({ url }) => {
  const canvasRef = useSpline3D(url);

  return (
    <canvas ref={canvasRef} id="canvas3d">
      Votre navigateur ne supporte pas le rendu 3D.
    </canvas>
  );
};

export default Spline3DViewer;
