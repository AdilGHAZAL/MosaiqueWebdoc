import React from 'react';
import './TrainingPage.css';  // Assurez-vous que le chemin vers le fichier CSS est correct
import Navbar from './components/Navbar';

const TrainingPage = () => {
  return (
    
    <div className="containerTraining">
      <Navbar/>
      <section className="session-info">
        <h2>Tout pour bien commencer</h2>
      </section>

      <div className="sectionMaterial">
        <h1>Séance 45'</h1>
        <img src="./src/assets/Icon2.svg" alt="Icône séance" />
        <h2>Matériel</h2>
        <p>Tout ce dont vous avez besoin pour commencer:</p>
        <ul>
          <li> Chaussures de course</li>
          <li> Piste d'athlétisme (facultatif)</li>
        </ul>
      </div>

      <div className="sectionWarmUp">
        <img src="./src/assets/Icon2.svg" alt="Icône échauffement" />
        <h2>Échauffement</h2>
        <div>
          <p>Course à pied (15 minutes):</p>
          <ul>
            <li>Commencez par 10 minutes de course à pied à un rythme confortable.</li>
            <li>Augmentez ensuite votre rythme pendant 5 minutes.</li>
          </ul>
        </div>
      </div>

      <div className="sectionTraining">
        <img src="./src/assets/Icon2.svg" alt="Icône entraînement" />
        <h2>Entraînement</h2>
        <div>
          <p>Travail technique (10 minutes):</p>
          <ul>
            <li>Concentrez-vous sur la technique de course, en essayant de garder le dos droit, les épaules relâchées et les bras fléchis à 90 degrés.</li>
          </ul>
        </div>
      </div>

      <div className="sectionAdvice">
        <img src="./src/assets/Icon2.svg" alt="Icône conseil" />
        <h2>Conseil</h2>
        <div>
          <p>Tout ce dont vous avez besoin pour le bon déroulement:</p>
          <ul>
            <li>Retour au calme (5 minutes)</li>
            <li>Terminez la séance par 5 minutes de marche ou d'étirements statiques</li>
            <li>Buvez beaucoup d'eau avant, pendant et après l'entraînement</li>
            <li>Variez vos séances d'entraînement pour éviter la monotonie et de vous blesser</li>
          </ul>
          <p>Voici quelques exemples d'exercices de mobilité, de technique de course, de plyométrie et de renforcement musculaire :</p>
          <ul>
            <li>Exercices de mobilité: Cercles de bras, Rotations de hanches, Fentes</li>
            <li>Technique de course: Course avec foulées courtes, talons au sol, montée des genoux</li>
            <li>Plyométrie: Sauts de grenouille, Talons-fesses</li>
            <li>Renforcement musculaire: Squats, Fentes, Pompes, Exercices avec poids légers</li>
          </ul>
        </div>
      </div>
      <footer/>
    </div>
  );
};

export default TrainingPage;
