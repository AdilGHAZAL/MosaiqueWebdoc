import React from 'react';
import './TrainingPage.css';  // Assurez-vous que le chemin vers le fichier CSS est correct

const TrainingPage = () => {
  return (
    <div className="containerTraining">
      <section className="session-info">
        <h2>Tout pour bien commencer</h2>
        
      </section>

      <div className="section material">
        <h1>Séance 45'</h1>
        <img src="" alt="" />
        <h2>Matériel</h2>
        <p>Tout ce dont vous avez besoin pour commencer:</p>
        <p><span className="icon">&#128095;</span> Chaussures de course</p>
        <p><span className="icon">&#127939;</span> Piste d'athlétisme (facultatif)</p>
      </div>

      <div className="sectionWarm-up">
        <img src="" alt="" />
        <h2>Échauffement</h2>
        <p>Course à pied (15 minutes): 
          <p>
          - Commencez par 10 minutes de course à pied à un rythme confortable. 
          </p>
          <p>Augmentez ensuite votre rythme pendant 5 minutes.</p>
        </p>
      </div>

      <div className="sectionWarm-up">
        <h2>Entraînement</h2>
        <p>Travail technique (10 minutes): Concentrez-vous sur la technique de course, en essayant de garder le dos droit, les épaules relâchées et les bras fléchis à 90 degrés.</p>
      </div>

      <div className="section advice">
        <h2>Conseil</h2>
        <p>Retour au calme, marcher autant de temps que votre pouls redescende (BPM 60-90). Terminez la séance par 5 minutes d'étirements statiques.</p>
      </div>
    </div>
  );
};

export default TrainingPage;
