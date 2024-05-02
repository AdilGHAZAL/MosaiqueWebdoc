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
        {champion && ( // Vérifier que champion n'est pas null
          <>
            <div className='partie-image1'>
              <div className='premier-texte'>
                {champion['premiertexte']}
              </div>
              <h1>
                {champion.name}
              </h1>
              <img src={champion.url1} className='image1' alt="" />
              <div className='deuxieme-texte'>
                {champion['deuxiemetexte']}
              </div>
            </div>
            <div className='partie-image2'>
              <img src={champion.url2} className='image2' alt="" />
              <p>{champion['petitparagraphe1']}</p>
              <div className='commencement'>{champion['grandparagraphe1']}</div>
              <div className='noubliezpas'>{champion['petitparagraphe2']}</div>
          <div className='leplusimportant'>{champion['grandparagraphe2']}</div>
            <div className='lancez-coach-container'>
          <div className='lancezvous'>{champion['petitparagraphe3']}</div>
          <div className='coach'>{champion['grandparagraphe3']}</div>
          </div>
            </div>
          </>
        )}
        <div className='partie-sonclub'>
          <h1>Son Club</h1>
          <div href={} style={{display:"flex", justifyContent:"center" , alignItems:"center"}} >
            <FaMapMarkerAlt  style={{ margin:"25px" }}/>
            Montgeron Athlétisme (1995-2003)
          </div>
        </div>
        <div class="image-button">
          <button />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Athlete1;
