import React, {useState, useEffect} from 'react';
import './Athletes.css';
import {Link} from 'react-router-dom'; 


const MonComposant = () => {
  const [selectedChampion, setSelectedChampion] = useState(null);
  const [champions, setChampions] = useState([]); // État pour stocker les champions récupérés

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const championsSnapshot = await getDocs(collection(db, 'champions'));
        let championsData = championsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        championsData = championsData.sort((a, b) => a.year - b.year); 
        setChampions(championsData); 
        setSelectedChampion(championsData[0]);
      } catch (error) {
        console.error('Error fetching champions:', error);
      }
    };

    fetchChampions();
  }, []); // Utilisez un tableau vide comme dépendance pour n'exécuter l'effet qu'une seule fois
  return (
    <div className="containerAthletes">
      <div className="photoAthletes">
        {/* Ajoutez votre composant photo ici */}
        <img src="./src/assets/photo1.png" alt="Description de la photo" />
      </div>
      <div className="contenuAthletes">
        <h2>Leslie Djhone</h2>
        <p> l'un des meilleurs coureurs de 400 mètres de l'histoire de France</p>
        <Link to={`/athlete/${selectedChampion.id}`}>
        <div class="image-button-athl">
          <button />
        </div>
        </Link>

      </div>
    </div>
  );
} 
export default MonComposant;
