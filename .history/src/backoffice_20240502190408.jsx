import React, { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import "./firebaseConfig"

export default function MainView() {
  const [champions, setChampions] = useState([]);
  const [championData, setChampionData] = useState({
    premiertexte: '',
    name: '',
    url1: '',
    deuxiemetexte: '',
    url2: '',
    petitparagraphe1: '',
    grandparagraphe1: '',
    petitparagraphe2: '',
    grandparagraphe2: '',
    petitparagraphe3: '',
    grandparagraphe3: '',
  });
  const [editingChampionId, setEditingChampionId] = useState(null);
  const auth = getAuth();
  const firestore = getFirestore();

  useEffect(() => {
    const fetchChampions = async () => {
      const championsSnapshot = await getDocs(collection(firestore, "champions"));
      const championsData = championsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setChampions(championsData);
    };

    fetchChampions();
  }, [firestore]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChampionData({ ...championData, [name]: value });
  };

  const handleAddChampion = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(firestore, "champions"), championData);
      console.log("Champion ajouté avec succès");
      // Réinitialiser les données du champion après l'ajout réussi
      setChampionData({
        premiertexte: '',
    name: '',
    url1: '',
    deuxiemetexte: '',
    url2: '',
    petitparagraphe1: '',
    grandparagraphe1: '',
    petitparagraphe2: '',
    grandparagraphe2: '',
    petitparagraphe3: '',
    grandparagraphe3: '',
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout du champion :", error);
    }
  };


  const handleEditChampion = (champion) => {
    setEditingChampionId(champion.id);
    setChampionData({
        premiertexte: champion.premiertexte,
    name: champion.name,
    url1: champion.url1,
    deuxiemetexte: champion.deuxiemetexte,
    url2: champion.url2,
    petitparagraphe1: champion.petitparagraphe1,
    grandparagraphe1: champion.grandparagraphe1,
    petitparagraphe2: champion.petitparagraphe2,
    grandparagraphe2: champion.grandparagraphe2,
    petitparagraphe3: champion.petitparagraphe3,
    grandparagraphe3: champion.grandparagraphe3,
    });
  };

  const handleUpdateChampion = async () => {
    try {
      await updateDoc(doc(firestore, "champions", editingChampionId), {
        premiertexte: championData.premiertexte,
    name: championData.name,
    url1: championData.url1,
    deuxiemetexte: championData.deuxiemetexte,
    url2: championData.url2,
    petitparagraphe1: championData.petitparagraphe1,
    grandparagraphe1: championData.grandparagraphe1,
    petitparagraphe2: championData.petitparagraphe2,
    grandparagraphe2: championData.grandparagraphe2,
    petitparagraphe3: championData.petitparagraphe3,
    grandparagraphe3: championData.grandparagraphe3,
      });
      console.log("Champion mis à jour avec succès");
      // Mettre à jour le tableau des champions après la mise à jour
      const updatedChampions = champions.map(champion => {
        if (champion.id === editingChampionId) {
          return {
            ...champion,
            premiertexte: championData.premiertexte,
    name: championData.name,
    url1: championData.url1,
    deuxiemetexte: championData.deuxiemetexte,
    url2: championData.url2,
    petitparagraphe1: championData.petitparagraphe1,
    grandparagraphe1: championData.grandparagraphe1,
    petitparagraphe2: championData.petitparagraphe2,
    grandparagraphe2: championData.grandparagraphe2,
    petitparagraphe3: championData.petitparagraphe3,
    grandparagraphe3: championData.grandparagraphe3,
          };
        }
        return champion;
      });
      setChampions(updatedChampions);
      // Réinitialiser les données du champion après la mise à jour réussie
      setChampionData({
        premiertexte: '',
    name: '',
    url1: '',
    deuxiemetexte: '',
    url2: '',
    petitparagraphe1: '',
    grandparagraphe1: '',
    petitparagraphe2: '',
    grandparagraphe2: '',
    petitparagraphe3: '',
    grandparagraphe3: '',
      });
      setEditingChampionId(null);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du champion :", error);
    }
  };

  const handleDeleteChampion = async (id) => {
    try {
      await deleteDoc(doc(firestore, "champions", id));
      console.log("Champion supprimé avec succès");
      // Mettre à jour la liste des champions après la suppression
      setChampions(champions.filter(champion => champion.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression du champion :", error);
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Déconnexion réussie");
        // Naviguer vers la pweight de connexion après la déconnexion
      })
      .catch((error) => {
        console.error("Erreur lors de la déconnexion :", error);
      });
  };

  return (
    <>
    <div style={{width:'100vw', padding:"22px"}}>
      <h1>BackOffice</h1>
      <form style={{marginBottom:"20px"}} onSubmit={editingChampionId ? handleUpdateChampion : handleAddChampion}>
        <input className='form-control' type="text" name="premiertexte" value={championData.premiertexte} onChange={handleInputChange} placeholder="premiertexte" required />
        <input className='form-control' type="text" name="name" value={championData.name} onChange={handleInputChange} placeholder="name du champion" required />
        <input className='form-control' type="url" name="url1" value={championData.url1} onChange={handleInputChange} placeholder="URL2 de l'icon du champion" required />
        <input className='form-control' type="text" name="deuxiemetexte" value={championData.deuxiemetexte} onChange={handleInputChange} placeholder="deuxiemetexte du champion" required />
        <textarea className='form-control' name="description" value={championData.description} onChange={handleInputChange} placeholder="Description du champion" required />
        <input className='form-control' type="url" name="url2" value={championData.url2} onChange={handleInputChange} placeholder="URL2 de l'icon du champion" />
        <input className='form-control' type="text" name="petitparagraphe1" value={championData.petitparagraphe1} onChange={handleInputChange} placeholder="petitparagraphe1 du champion" required />
        <input className='form-control' type="text" name="grandparagraphe1" value={championData.grandparagraphe1} onChange={handleInputChange} placeholder="grandparagraphe1 du champion" required />
        <input className='form-control' type="text" name="petitparagraphe2" value={championData.petitparagraphe2} onChange={handleInputChange} placeholder="petitparagraphe2 du champion" required />
        <input className='form-control' type="text" name="grandparagraphe2" value={championData.grandparagraphe2} onChange={handleInputChange} placeholder="grandparagraphe2 du champion" required />
        <input className='form-control' type="text" name="petitparagraphe3" value={championData.petitparagraphe3} onChange={handleInputChange} placeholder="petitparagraphe3 du champion" required />
        <input style={{marginBottom:"20px"}} className='form-control' type="text" name="grandparagraphe3" value={championData.grandparagraphe3} onChange={handleInputChange} placeholder="grandparagraphe3 du champion" required />
        <button className='btn btn-success' type="submit">{editingChampionId ? "Mettre à jour Champion" : "Ajouter Champion"}</button>
      </form>
      <button className='btn btn-danger' title='Déconnexion' onClick={handleSignOut}>Déconnexion</button>

      <table className='table table-hover mt-4' style={{fontSize:'0.8rem'}}>
        <thead>
          <tr className='table-primary'>
          <th scope='col'>premiertexte</th>
            <th scope='col'>name</th>
            <th scope='col'>url1</th>
            <th scope='col'>deuxiemetexte</th>
            <th scope='col'>url2</th>
            <th scope='col'>petitparagraphe1</th>
            <th scope='col'>grandparagraphe1</th>
            <th scope='col'>petitparagraphe2</th>
            <th scope='col'>grandparagraphe2</th>
            <th scope='col'>petitparagraphe3</th>
            <th scope='col'>grandparagraphe3</th>
            <th>ADMIN</th>
          </tr>
        </thead>
        <tbody>
          {champions.map((champion) => (
            <tr key={champion.id}>
              <td>{champion.premiertexte}</td>
              <td>{champion.name}</td>
              <td>{champion.url1}</td>
              <td>{champion.deuxiemetexte}</td>
              <td>{champion.url2}</td>
              <td>{champion.petitparagraphe1}</td>
              <td>{champion.grandparagraphe1}</td>
              <td>{champion.petitparagraphe2}</td>
              <td>{champion.grandparagraphe2}</td>
              <td>{champion.petitparagraphe3}</td>
              <td>{champion.grandparagraphe3}</td>
              <td>
                <button className='btn btn-danger' onClick={() => handleDeleteChampion(champion.id)}>Supprimer</button>
                <button className='btn btn-warning' onClick={() => handleEditChampion(champion)}>Modifier</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}