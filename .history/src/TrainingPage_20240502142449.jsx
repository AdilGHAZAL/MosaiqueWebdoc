import React from 'react';
import './TrainingPage.css';

const TrainingPage = () => {
  return (
    <div>
      <header>
        <h1>Séance 45'</h1>
        <p>Tout pour bien commencer</p>
      </header>

      <section>
        <h2>Matériel</h2>
        <ul>
          <li>Chaussures de course</li>
          <li>Piste d'athlétisme (facultatif)</li>
        </ul>
      </section>

      <section>
        <h2>Échauffement</h2>
        <p>Tout ce que vous devez savoir sur la préparation physique:</p>
        <ul>
          <li>Commencez par 10 minutes de course à pied à un rythme confortable.</li>
          <li>Faites quelques exercices de mobilité pour améliorer votre souplesse et votre amplitude de mouvement.</li>
        </ul>
      </section>

      <section>
        <h2>Entraînement</h2>
        <p>Tout ce que vous devez savoir sur la séance:</p>
        <ul>
          <li>Travail technique (10 minutes).</li>
          <li>Renforcement musculaire (10 minutes).</li>
        </ul>
      </section>

      <section>
        <h2>Conseil</h2>
        <p>Retour au calme, marcher autant de temps que votre pouls redescende (BPM 60–90).</p>
      </section>

      <footer>
        <p>BON ENTRAÎNEMENT !</p>
      </footer>
    </div>
  );
};

export default TrainingPage;
