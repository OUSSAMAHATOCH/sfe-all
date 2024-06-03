import { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  // État pour stocker les utilisateurs récupérés
  const [utilisateurs, setUtilisateurs] = useState([]);

  // useEffect pour récupérer les utilisateurs
  useEffect(() => {
    const recupererUtilisateurs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/form');
        setUtilisateurs(response.data);
      } catch (error) { 
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      }
    };

    recupererUtilisateurs();
  }, []);

  return ( 
    <div>
      <h2>Liste d utilisateurs</h2>
      {utilisateurs.length > 0 ? (
        <ol>
          {utilisateurs.map((utilisateur) => (
            <li key={utilisateur.id}>
              {utilisateur.client.name} 
            </li>
          ))}
        </ol>
      ) : (
        <p>Chargement des utilisateurs...</p>
      )}
    </div>
  );
};

export default Test;
