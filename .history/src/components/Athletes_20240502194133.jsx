import React, { useState, useEffect } from 'react';
import './Athletes.css';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from './votre-chemin-vers-firebase-config'; 

const MonComposant = () => {
  const [selectedChampion, setSelectedChampion] = useState(null);
  const [champions, setChampions] = useState([]); 

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const championsSnapshot = await getDocs(collection(db, 'champions')); // Assurez-vous que db est une référence valide à votre base de données Firestore
        let championsData = championsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        championsData = championsData.sort((a, b) => a.year - b.year);
        setChampions(championsData);
        setSelectedChampion(championsData[0]);
      } catch (error) {
        console.error('Erreur lors de la récupération des champions :', error);
      }
    };

    fetchChampions();
  }, []); 

  return (
    <div className="containerAthletes">
      <div className="photoAthletes">
        {/* Ajoutez votre composant photo ici */}
        <img src="./src/assets/photo1.png" alt="Description de la photo" />
      </div>
      <div className="contenuAthletes">
        <h2>{selectedChampion && selectedChampion.name}</h2>
        <p>{selectedChampion && selectedChampion.description}</p>
        <Link to={`/athlete/${selectedChampion && selectedChampion.id}`}>
          <div className="image-button-athl">
            <button>Afficher les détails</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MonComposant;
