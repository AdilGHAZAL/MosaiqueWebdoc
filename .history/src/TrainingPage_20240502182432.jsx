import React from 'react';

const TrainingPage = () => {
  const sectionTitleStyle = {
    fontFamily: 'SF Pro Display, sans-serif',
    fontSize: '60px',
    fontWeight: '700',
    lineHeight: '71.6px',
    textAlign: 'center', // Adjusted for center alignment
  };

  const paragraphStyle = {
    fontFamily: 'SF Pro Display, sans-serif',
    fontSize: '40px',
    fontWeight: '500',
    lineHeight: '47.73px',
    textAlign: 'left', // Adjusted for left alignment
  };

  const boldParagraphStyle = {
    ...paragraphStyle,
    fontWeight: '700', // Adjusted for bold text
  };

  return (
    <div className="containerTraining">
      {/* Session Info */}
      <section className="session-info">
        <h2 style={sectionTitleStyle}>Tout pour bien commencer</h2>
      </section>

      {/* Séance Material */}
      <div className="sectionMaterial">
        <h1 style={sectionTitleStyle}>Séance 45'</h1>
        <img src="./src/assets/Icon2.svg" alt="Icône séance" />
        <h2 style={sectionTitleStyle}>Matériel</h2>
        <p style={paragraphStyle}>Tout ce dont vous avez besoin pour commencer:</p>
        <ul style={paragraphStyle}>
          <li>Chaussures de course</li>
          <li>Piste d'athlétisme (facultatif)</li>
        </ul>
      </div>

      {/* Séance WarmUp */}
      <div className="sectionWarmUp">
        <img src="./src/assets/Icon2.svg" alt="Icône échauffement" />
        <h2 style={sectionTitleStyle}>Échauffement</h2>
        <div>
          <p style={boldParagraphStyle}>Course à pied (15 minutes):</p>
          <ul style={paragraphStyle}>
            <li>Commencez par 10 minutes de course à pied à un rythme confortable.</li>
            <li>Augmentez ensuite votre rythme pendant 5 minutes.</li>
          </ul>
        </div>
      </div>

      {/* Séance Training */}
      <div className="sectionTraining">
        <img src="./src/assets/Icon2.svg" alt="Icône entraînement" />
        <h2 style={sectionTitleStyle}>Entraînement</h2>
        <div>
          <p style={boldParagraphStyle}>Travail technique (10 minutes):</p>
          <ul style={paragraphStyle}>
            <li>Concentrez-vous sur la technique de course, en essayant de garder le dos droit, les épaules relâchées et les bras fléchis à 90 degrés.</li>
          </ul>
        </div>
      </div>

      {/* Séance Advice */}
      <div className="sectionAdvice">
        <img src="./src/assets/Icon2.svg" alt="Icône conseil" />
        <h2 style={sectionTitleStyle}>Conseil</h2>
        <div>
          <p style={boldParagraphStyle}>Tout ce dont vous avez besoin pour le bon déroulement:</p>
          <ul style={paragraphStyle}>
            <li>Retour au calme (5 minutes)</li>
            <li>Terminez la séance par 5 minutes de marche ou d'étirements statiques</li>
            <li>Buvez beaucoup d'eau avant, pendant et après l'entraînement</li>
            <li>Variez vos séances d'entraînement pour éviter la monotonie et de vous blesser</li>
          </ul>
          <p style={paragraphStyle}>Voici quelques exemples d'exercices de mobilité, de technique de course, de plyométrie et de renforcement musculaire :</p>
          <ul style={paragraphStyle}>
            <li>Exercices de mobilité: Cercles de bras, Rotations de hanches, Fentes</li>
            <li>Technique de course: Course avec foulées courtes, talons au sol, montée des genoux</li>
            <li>Plyométrie: Sauts de grenouille, Talons-fesses</li>
            <li>Renforcement musculaire: Squats, Fentes, Pompes, Exercices avec poids légers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
