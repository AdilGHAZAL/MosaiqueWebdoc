import React, { useState, useEffect } from 'react';
import './Athletes.css';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from '../firebaseConfig'; 
import picAth1 from "../assets/Images/photo1.png"

const MonComposant = () => {
  const [selectedChampion, setSelectedChampion] = useState(null);
  const [champions, setChampions] = useState([]); 

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const championsSnapshot = await getDocs(collection(db, 'champions')); 
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
        <img src={picAth1} alt="Description de la photo" />
        
      </div>
      <div className="contenuAthletes">
        <h2>{selectedChampion && selectedChampion.name}</h2>
        <p> l'un des meilleurs coureurs de 400 mètres de l'histoire de France</p>
        <Link to={`/athlete/${selectedChampion && selectedChampion.id}`}>
          <div className="image-button-athl">
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MonComposant;
