import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VehicleForm from './components/VehicleForm';
import Details from './components/Details';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Formulaire</Link>
            </li>
            <li>
              <Link to="/details">Plus de détails</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/details" element={<Details />} />
          <Route path="/" element={<VehicleForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


{/* 
Formulaire HTML

<title>Informations Achat/Vente voitures</title>
      <h1>Détails de l'annonce</h1>
      <p>Ajouter plus de détails sur votre annonce pour un maximum de visibilité</p>
      <form class="formulaire">
        <fieldset>
          <legend>Détails de l'annonce</legend>
          <p>
            Ajouter plus de détails sur votre annonce pour un maximum de visibilité
          </p>
          <ul>
            <li>
              Marques:
              <select name="selection" id="selection" class="c1" required>
                <option value=""> Sélection </option>
                  <optgroup label="Europe">
                    <option value="peugeot">Peugeot</option>
                    <option value="volswagen">Volswagen</option>
                    <option value="bmw">BMW</option>
                  </optgroup>
                  <optgroup label="Americaine">
                    <option value="ford">Ford</option>
                    <option value="chevrolet">Chevrolet</option>
                    <option value="jeep">Jeep</option>
                </optgroup>
              </select>
            </li>
            <li>
              Kilométrage:
              <select name="selection" id="selection" class="c1" required>
                <option value=""> Sélection </option>
                  <option value="a">0-5</option>
                  <option value="b">5-10</option>
                  <option value="c">10-50</option>
                  <option value="d">50-100</option>
                  <option value="e">100-500</option>
                  <option value="f">500-10000</option>
                  <option value="g">Plus de 500</option>
              </select>
            </li>
            <li>
              Année-Modèle:
              <select name="selection" id="selection" class="c1" required>
                <option value=""> Sélection </option>
                <optgroup label="Peugeot">
                  <option value="p508">508 I - 2011/2018</option>
                  <option value="p208">208 I - 2012/2019</option>
                  <option value="p301">301 I - 2012/2016</option>
                </optgroup>
                <optgroup label="Volswagen">
                  <option value="volswagentroc">T-Roc I - 2017/2022</option>
                  <option value="volswagenidtroisprolifeelectrique">ID.3 Pro Life Max 100% électrique - 2023</option>
                  <option value="volswagenidquatreprolifeelectrique">ID.4 Pro Life Max 100% électrique - 2023</option>
                </optgroup>
                <optgroup label="BMW">
                  <option value="bmwmtroiscompettouring">M3 Competition MxDrive Touring - 2022</option>
                  <option value="bmwmdeuxcoupe">M2 Coupé - 2022</option>
                  <option value="bmwmquatrecompetcoupe">M4 Competition MxDrive Coupé - 2022</option>
                </optgroup>
                <optgroup label="Ford">
                  <option value="fordtournedconnect">Tourned Connect - 2022</option>
                  <option value="fordsmax">S-Max I - 2006/2015</option>
                  <option value="galaxy">Galaxy I - 1996/2000</option>
                </optgroup>
                <optgroup label="Chevrolet">
                  <option value="chevroletcorvettestingray">Corvette Stingray C8 - 2019</option>
                  <option value="chevroletcamaross">Camaro SS - 2018</option>
                  <option value="chevroletcamarozlun">Camaro ZL1 - 2018</option>
                </optgroup>
                <optgroup label="Jeep">
                  <option value="jeepavengerhybrid">Avenger - 2022</option>
                  <option value="jeeprenegadehybrid">Renegade III - 2022</option>
                  <option value="jeepwranglerhybrid">Wrangler JL - 2018</option>
                </optgroup>
              </select>
            </li>
            <li>
              Puissance fiscale:<select name="selection" id="selection" class="c1" required>
                    <option value=""> Sélection </option>
                    <optgroup label="puissancefiscale">
                        <option value=""></option>
                    </optgroup>
                    </select>
            </li>
            <li>
              <legend>Type de carburant</legend>
              <div class="type-carburant">
                <label>Diesel</label>
                <input type="radio" name="diesel" value="diesel" class="type-carburant" id="diesel" required/>
                <label>Essence</label>
                <input type="radio" name="essence" value="essence" class="type-carburant" id="essence" required/>
                <label>Electrique</label>
                <input type="radio" name="electrique" value="electrique" class="type-carburant" id="electrique" required/>
                <label>LPG</label>
                <input type="radio" name="lpg" value="lpg" class="type-carburant" id="lpg" required/>
                <label>Hybride</label>
                <input type="radio" name="hybride" value="hybride" class="type-carburant" id="hybride" required/>
              </div>
            </li>
            <li>
              <legend>Boite de vitesse</legend>
              <div class="type-boite">
                <label>Automatique</label>
                <input type="radio" name="automatique" value="automatique" class="type-boite" id="automatique" required/>
                <label>Manuel</label>
                <input type="radio" name="manuel" value="manuel" class="type-boite" id="manuel" required/>
              </div>
            </li>
            <li>
              <legend>Etat</legend>
              <div class="type-etat">
                <label>Excellent</label>
                <input type="radio" name="excellent" value="excellent" class="type-etat" id="excellent" required/>
                <label>Très bon</label>
                <input type="radio" name="tresbon" value="tresbon" class="type-etat" id="tresbon" required/>
                <label>Bon</label>
                <input type="radio" name="bon" value="bon" class="type-etat" id="bon" required/>
                <label>Correct</label>
                <input type="radio" name="correct" value="correct" class="type-etat" id="correct" required/>
                <label>Endommagé</label>
                <input type="radio" name="endommage" value="endommage" class="type-etat" id="endommage" required/>
                <label>Pour Pièces</label>
                <input type="radio" name="pourpieces" value="pourpieces" class="type-etat" id="pourpieces" required/>
                <label>Neuf</label>
                <input type="radio" name="neuf" value="neuf" class="type-etat" id="neuf" required/>
              </div>
            </li>
            <li>
              <legend>Origine</legend>
              <div class="type-origine">
                <label>Dédouannée</label>
                <input type="radio" name="dedouanne" value="dedouanne" class="type-origine" id="dedouanne" required/>
                <label>Pas encore dédouannée</label>
                <input type="radio" name="pasdedouanne" value="pasdedouanne" class="type-origine" id="pasdedouanne" required/>
                <label>WW au Maroc</label>
                <input type="radio" name="wwmaroc" value="wwmaroc" class="type-origine" id="wwmaroc" required/>
                <label>Importée neuve</label>
                <input type="radio" name="importeneuve" value="importeneuve" class="type-origine" id="importeneuve" required/>
              </div>
            </li>
            <li>
              <legend>Nombre de portes</legend>
              <div class="type-portes">
                <label>3</label>
                <input type="radio" name="troisportes" value="troisportes" class="type-portes" id="troisportes" required/>
                <label>5</label>
                <input type="radio" name="cinqportes" value="cinqportes" class="type-portes" id="cinqportes" required/>
              </div>
            </li>
            <li>
              <legend>Première main</legend>
              <div class="type-main">
                <label>Oui</label>
                <input type="radio" name="ouimain" value="troismain" class="type-main" id="troismain" required/>
                <label>Non</label>
                <input type="radio" name="nonmain" value="cinqmain" class="type-main" id="cinqmain" required/>
              </div>
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <h1>Information de l'annonce</h1>
          <ul>
            <li>
              <label>Prix</label>
              <input type="text" name="prix" class="textarea" placeholder="0" id="nom" required />
            </li>
            <li>
              <label>Titre de l'annonce</label>
              <input type="text" name="titleofannonce" class="textarea" placeholder="0" id="nom" required />
            </li>
            <li>
              <label>Texte de l'annonce</label>
              <input type="text" name="textofannonce" class="textarea" placeholder="0" id="nom" required />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <h1>Plus de détails</h1>
          <p>Ajouter des détails supplémentaires</p>
          <div class="type-details">
            <label>Jantes Aluminium</label>
            <input type="radio" name="jantesalu" value="jantesalu" class="type-details" id="jantesalu" required/>
            <label>Airbags</label>
            <input type="radio" name="airbags" value="airbags" class="type-details" id="airbags" required/>
            <label>Climatisation</label>
            <input type="radio" name="clim" value="clim" class="type-details" id="clim" required/>
            <label>Systèmes de navigation</label>
            <input type="radio" name="systemenavig" value="systemenavig" class="type-details" id="systemenavig" required/>
            <label>Toit ouvert</label>
            <input type="radio" name="toitouvert" value="toitouvert" class="type-details" id="toitouvert" required/>
            <label>Sièges cuir</label>
            <input type="radio" name="siegescuir" value="siegescuir" class="type-details" id="siegescuir" required/>
            <label>Radar de recul</label>
            <input type="radio" name="radarderecul" value="radarderecul" class="type-details" id="radarderecul" required/>
            <label>Caméra de recul</label>
            <input type="radio" name="cameraderecul" value="cameraderecul" class="type-details" id="cameraderecul" required/>
            <label>Vitres électriques</label>
            <input type="radio" name="vitreselectriq" value="vitreselectriq" class="type-details" id="vitreselectriq" required/>
            <label>ABS</label>
            <input type="radio" name="abs" value="abs" class="type-details" id="abs" required/>
            <label>ESP</label>
            <input type="radio" name="esp" value="esp" class="type-details" id="esp" required/>
          </div>
        </fieldset>
      </form> */}