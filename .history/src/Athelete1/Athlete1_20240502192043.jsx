import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Navbar from '../components/Navbar';
import { FaMapMarkerAlt } from "react-icons/fa";
import './Athlete1.css';
import Footer from "../components/Footer";

const Athlete1 = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook pour la redirection
  const [champion, setChampion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChampionData = async () => {
      try {
        const championDoc = await getDoc(doc(db, 'champions', id));
        if (championDoc.exists()) {
          setChampion({ id: championDoc.id, ...championDoc.data() });
        } else {
          console.log('Champion not found');
          navigate('/404', { replace: true }); // Rediriger vers la page d'erreur personnalisée ou page d'accueil
        }
      } catch (error) {
        console.error('Error fetching champion data:', error);
        navigate('/404', { replace: true });
      }
      setLoading(false);
    };

    fetchChampionData();
  }, [id, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!champion) {
    return <div>Champion not found</div>; // Message si le champion n'est pas trouvé
  }

  return (
    <div className='Athlete1-container'>
      <Navbar />
      <div className='page-container'>
        <div className='partie-image1'>
          <div className='premier-texte'>
            {champion['premiertexte']}
          </div>
          <h1>{champion.name}</h1>
          <img src={champion.url1} className='image1' alt="" />
          <div className='deuxieme-texte'>
            {champion['deuxiemetexte']}
          </div>
        </div>
        <div className='partie-sonclub'>
          <h1>Son Club</h1>
          <div style={{display:"flex", justifyContent:"center" , alignItems:"center"}}>
            <FaMapMarkerAlt style={{ margin:"25px" }}/>
            {champion.club} // Supposé que club est un champ dans votre document
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Athlete1;
