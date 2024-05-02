import React from 'react';
import './TrainingPage.css';

const TrainingPage = () => {
  return (
    <div className="containerTraining">
      <header className="session-info">
        <h2>Tout pour bien commencer</h2>
      </header>

      <section className="sectionMaterial">
        <h1>Séance 45'</h1>
        <img src="./src/assets/Icon2.svg" alt="Icône séance" />
        <h2>Matériel</h2>
        <p>Tout ce dont vous avez besoin pour commencer:</p>
        <ul>
          <li>Chaussures de course</li>
          <li>Piste d'athlétisme (facultatif)</li>
        </ul>
      </section>

      <section className="sectionWarmUp">
        <img src="./src/assets/Icon2.svg" alt="Icône échauffement" />
        <h2>Échauffement</h2>
        <p>Course à pied (15 minutes):</p>
        <ul>
          <li>Commencez par 10 minutes de course à pied à un rythme confortable.</li>
          <li>Augmentez ensuite votre rythme pendant 5 minutes.</li>
        </ul>
      </section>

      <section className="sectionTraining">
        <img src="./src/assets/Icon2.svg" alt="Icône entraînement" />
        <h2>Entraînement</h2>
        <p>Travail technique (10 minutes):</p>
        <ul>
          <li>Concentrez-vous sur la technique de course, en essayant de garder le dos droit, les épaules relâchées et les bras fléchis à 90 degrés.</li>
        </ul>
      </section>

      <section className="sectionAdvice">
        <img src="./src/assets/Icon2.svg" alt="Icône conseil" />
        <h2>Conseil</h2>
        <p>Tout ce dont vous avez besoin pour le bon déroulement:</p>
        <ul>
          <li>Retour au calme (5 minutes)</li>
          <li>Terminez la séance par 5 minutes de marche ou d'étirements statiques</li>
          <li>Buvez beaucoup d'eau avant, pendant et après l'entraînement</li>
          <li>Variez vos séances d'entraînement pour éviter la monotonie et de vous blesser</li>
        </ul>
      </section>
    </div>
  );
};

export default TrainingPage;
