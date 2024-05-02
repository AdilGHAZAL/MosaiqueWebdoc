import React from 'react';
import './TrainingPage.css';  // Assurez-vous que le chemin vers le fichier CSS est correct

const TrainingPage = () => {
  return (
    <div className="containerTraining">
      <section className="session-info">
        <h2>Tout pour bien commencer</h2>
        
      </section>

      <div className="sectionMaterial">
        <h1>Séance 45'</h1>
        <img src="" alt="" />
        <h2>Matériel</h2>
        <p>Tout ce dont vous avez besoin pour commencer:</p>
        <p><span className="icon">&#128095;</span> Chaussures de course</p>
        <p><span className="icon">&#127939;</span> Piste d'athlétisme (facultatif)</p>
      </div>

      <div className="sectionwarm-up">
        <img src="" alt="" />
        <h2>Échauffement</h2>
        <span>
        <p>Course à pied (15 minutes): 
          <p>
          - Commencez par 10 minutes de course à pied à un rythme confortable. 
          </p>
          <p>Augmentez ensuite votre rythme pendant 5 minutes.</p>
        </p>
        </span>
        <span>
        <p>Course à pied (15 minutes): 
          <p>
          - Commencez par 10 minutes de course à pied à un rythme confortable. 
          </p>
          <p>Augmentez ensuite votre rythme pendant 5 minutes.</p>
        </p>
        </span>
      </div>

      <div className="sectionTraining">
      <img src="" alt="" />
        <h2>Échauffement</h2>
        <span>
        <p>Course à pied (15 minutes): 
          <p>
          - Commencez par 10 minutes de course à pied à un rythme confortable. 
          </p>
          <p>Augmentez ensuite votre rythme pendant 5 minutes.</p>
        </p>
        </span>
        <span>
        <p>Course à pied (15 minutes): 
          <p>
          - Commencez par 10 minutes de course à pied à un rythme confortable. 
          </p>
          <p>Augmentez ensuite votre rythme pendant 5 minutes.</p>
        </p>
        </span>
      </div>

      <div className="sectionAdvice">
        <img src="" alt="" />
        <h2>Conseil</h2>
        <p>
        Tout ce dont vous avez besoin pour le bon déroulement:

Retour au calme (5 minutes)

Terminez la séance par 5 minutes de marche ou d'étirements statiques

Buvez beaucoup d'eau avant, pendant et après l'entraînement

Variez vos séances d'entraînement pour éviter la monotonie et de vous blesser
        </p>
      </div>
    </div>
  );
};

export default TrainingPage;
