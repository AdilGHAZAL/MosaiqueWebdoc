import React from 'react';
import './TrainingPage.css'; // Assurez-vous que le chemin est correct

const TrainingPage = () => {
  return (
    <div className="training-page">
      <header className="training-header">
        <h1 className="training-title">Séance 45'</h1>
        <p className="subtitle">Tout pour bien commencer</p>
      </header>

      <section className="material-section">
        <h2>Matériel</h2>
        <ul className="material-list">
          <li>Chaussures de course</li>
          <li>Piste d'athlétisme (facultatif)</li>
        </ul>
      </section>

      <section className="warm-up-section">
        <h2>Échauffement</h2>
        <p>Exercices de mobilité et course à pied initiale.</p>
      </section>

      <section className="training-section">
        <h2>Entraînement</h2>
        <p>Détails sur la technique de course et renforcement musculaire.</p>
      </section>

      <section className="advice-section">
        <h2>Conseil</h2>
        <p>Retour au calme et hydratation.</p>
      </section>

      <footer className="training-footer">
        <p>BON ENTRAÎNEMENT !</p>
      </footer>
    </div>
  );
};

export default TrainingPage;
