import React from 'react';
import './TrainingPage.css'; // Assurez-vous que le chemin vers le fichier CSS est correct

const TrainingPage = () => {
  return (
    <div className="training-page">
      <section className="session-header">
        <h1>Séance 45'</h1>
      </section>

      <section className="section material">
        <h2>Matériel</h2>
        <p>Chaussures de course<br/>Piste d'athlétisme (facultatif)</p>
      </section>

      <section className="section warm-up">
        <h2>Échauffement</h2>
        <p>Course à pied (15 minutes): Commencez par 10 minutes de course à pied à un rythme confortable. Augmentez ensuite votre rythme pendant 5 minutes.</p>
      </section>

      <section className="section training">
        <h2>Entraînement</h2>
        <p>Travail technique (10 minutes): Concentrez-vous sur la technique de course, en essayant de garder le dos droit, les épaules relâchées et les bras fléchis à 90 degrés.</p>
      </section>

      <section className="section advice">
        <h2>Conseil</h2>
        <p>Retour au calme, marcher autant de temps que votre pouls redescende (BPM 60-90). Terminez la séance par 5 minutes d'étirements statiques.</p>
      </section>
    </div>
  );
};

export default TrainingPage;
