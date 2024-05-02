import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Navbar from '../components/Navbar';
import { FaMapMarkerAlt } from "react-icons/fa";
import './Athlete1.css';
import Footer from "../components/Footer";

const Athlete1 = () => {
  const [champions, setChampions] = useState([]);
  const [selectedChampion, setSelectedChampion] = useState(null);
  const { id } = useParams();

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
  }, []);

  useEffect(() => {
    const fetchChampionData = async () => {
      const championDoc = await getDoc(doc(db, 'champions', id));
      if (championDoc.exists()) {
        setChampion({ id: championDoc.id, ...championDoc.data() });
      } else {
        console.log('Champion not found');
      }
    };

    fetchChampionData();
  }, [id]);

  if (!selectedChampion) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Athlete1-container'>
      <Navbar />
      <div className='page-container'>
        {selectedChampion && (
          <>
            <div className='partie-image1'>
              <div className='premier-texte'>
                {selectedChampion['premiertexte']}
              </div>
              <h1>
                {selectedChampion.name}
              </h1>
              <img src={selectedChampion.url1} className='image1' alt="" />
              <div className='deuxieme-texte'>
                {selectedChampion['deuxiemetexte']}
              </div>
            </div>
            <div className='partie-image2'>
              <img src={selectedChampion.url2} className='image2' alt="" />
              <p>{selectedChampion['petitparagraphe1']}</p>
              <div className='commencement'>{selectedChampion['grandparagraphe1']}</div>
              <div className='noubliezpas'>{selectedChampion['petitparagraphe2']}</div>
              <div className='leplusimportant'>{selectedChampion['grandparagraphe2']}</div>
              <div className='lancez-coach-container'>
                <div className='lancezvous'>{selectedChampion['petitparagraphe3']}</div>
                <div className='coach'>{selectedChampion['grandparagraphe3']}</div>
              </div>
            </div>
          </>
        )}
        <div className='partie-sonclub'>
          <h1>Son Club</h1>
          <div style={{display:"flex", justifyContent:"center" , alignItems:"center"}}>
            <FaMapMarkerAlt  style={{ margin:"25px" }}/>
            Montgeron Athlétisme (1995-2003)
          </div>
        </div>
        <div className="image-button">
          <button />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Athlete1;
