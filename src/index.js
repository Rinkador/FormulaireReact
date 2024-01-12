import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* 

Contexte:

Vous êtes propriétaires d’un garage qui vend et achète des voitures. Vous souhaitez vous doter
d’une application web pour permettre à des personnes de renseigner les informations de leur
véhicule à vendre avant leur mise à disposition.

Vous êtes garagiste mais aussi développeur à temps partiels. 

Vous avez quelques croquis et vous devez réaliser un formulaire se rapprochant au maximum des croquis reçus (style - features - disposition).

Vous vous contenterez d’insérer dans votre application uniquement ce que vous savez :
- Routing
- Drilling props
- Splitting Components
- Using hooks (ref, state…)
- ES6+

Croquis -> sur pdf

Features:

- Je peux renseigner tous les champs du formulaire
- Si un champ n’est pas renseigné, je dois le signaler à l’utilisateur par un message en dessous du champ
- Chaque champ doit respecter son type (text, number, textarea…)
- Deux pages minimum
- Du style (custom ou via un framework css
- Création de plusieurs composants réutilisables
- Envoi de props
- La section « plus de détails » me permet de sélectionner plusieurs champs en même temps.

Bonus:

Lors du renseignement de la localité, afficher une map google (via l’API google/mapbox - regarder
sur npm pour aller plus vite) avec la localité en question + un marqueur indiquant l’emplacement
du véhicule

*/