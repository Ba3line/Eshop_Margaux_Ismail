import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Nintendo from './component/nintendo/nintendo';
import Acceuil from './component/acceuil/acceuil';
import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {

  const [acceuil, setAcceuil] = useState([
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/N64-Console-Set.png/2560px-N64-Console-Set.png",
      "nomCategorie": "Jeux Nintendo"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/2b/GameCube-Console-Set.png",
      "nomCategorie": "Jeux GameBoy"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/PSX-Console-wController.png/1280px-PSX-Console-wController.png",
      "nomCategorie": "Jeux PS1"
    }
  ])

  const [article, setArticle] = useState([
    {
      "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.catawiki.com%2Ffr%2Fl%2F7388207-lot-de-15-jeux-nintendo-64-super-mario-64-quake-64-yoshi-s-story-etc&psig=AOvVaw3dZpdM6riB6ECdMq0in4rc&ust=1643710520700000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOC4i4Dh2_UCFQAAAAAdAAAAABAD",
      "nom": "Mario Kart",
      "desc": "Jeux nintendo 64 en bonne état",
      "prix": "34 €",
      "panier": "Ajouter au panier"
    },
    {
      "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.catawiki.com%2Ffr%2Fl%2F7388207-lot-de-15-jeux-nintendo-64-super-mario-64-quake-64-yoshi-s-story-etc&psig=AOvVaw3dZpdM6riB6ECdMq0in4rc&ust=1643710520700000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOC4i4Dh2_UCFQAAAAAdAAAAABAD",
      "nom": "Mario Kart",
      "desc": "Jeux nintendo 64 en bonne état",
      "prix": "34 €",
      "panier": "Ajouter au panier"
    }
  ])

  return (
    <div className="App">
      <div className="pageAcceuil">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {acceuil.map((acceuil, index) => (<Acceuil key={index} image={acceuil.image} nomCategorie={acceuil.nomCategorie} />))}
            </Route>
            <Route exact path="/nintendo">
              {article.map((article, index) => (<Nintendo key={index} image={article.image} nomArticle={article.nom} descriptionArticle={article.desc} prixArticle={article.prix} ajouterPanier={article.panier} />))}
            </Route>
        </Switch>
      </BrowserRouter>

      </div>
    </div >
  );
}

export default App;
