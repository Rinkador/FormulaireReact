// components/VehicleForm.js
import React, { useState } from 'react';
import InputField from './InputField';

const VehicleForm = () => {
  const [formData, setFormData] = useState({
    make: '',
    mileage: '',
    modelYear: '',
    price: '',
    // ... autres champs
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    // Valider le champ 'make'
    if (value.trim() === '') {
      setFormErrors({
        ...formErrors,
        [name]: 'Ce champ est obligatoire.',
      });
    } else {
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    }
    
    // Valider le champ 'mileage'
    if (value.trim() === '') {
        setFormErrors({
          ...formErrors,
          [name]: 'Ce champ est obligatoire.',
        });
      } else {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      }

      // Valider le champ 'modelyear'
    if (value.trim() === '') {
        setFormErrors({
          ...formErrors,
          [name]: 'Ce champ est obligatoire.',
        });
      } else {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      }
  };

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche la soumission par défaut du formulaire

    //Logique pour soumettre le formulaire
    console.log("Données du formulaire:", formData);
  };

  return (
    <div>
      <h1>Formulaire de véhicule</h1>
      {/* ... Autres champs du formulaire */}
      <InputField
        label="Marque"
        type="text"
        name="make"
        value={formData.make}
        onChange={handleInputChange}
        errorMessage={formErrors.make}
      />

    {/* Champ du kilométrage */}
    <InputField
        label="Kilométrage"
        type="number"
        name="mileage"
        value={formData.mileage}
        onChange={handleInputChange}
        errorMessage={formErrors.mileage}
      />

      {/* Champ de l'année-modèle */}
      <InputField
        label="Année-Modèle"
        type="text"
        name="modelYear"
        value={formData.modelYear}
        onChange={handleInputChange}
        errorMessage={formErrors.modelYear}
      />

      {/* ... Autres champs du formulaire */}
      <button onClick={handleSubmit}>Envoyer</button>
    </div>
  );
};

export default VehicleForm;
