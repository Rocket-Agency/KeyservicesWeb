import React from 'react';
import '../../css/NotFound.scss';
import { BreadcrumbItem } from '../../index';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

export default ({ staticContext = {} }) => {
  staticContext.status = 404;
    return(
      <>
        <BreadcrumbItem to="/"><HomeIcon/>Home</BreadcrumbItem>
        <BreadcrumbItem>Erreur 404</BreadcrumbItem>
        <div id="notfound">
          <div class="notfound">
            <div class="notfound-404">
              <h1>404</h1>
            </div>
            <h2>Oops! Cette page n'a pas pu être trouvée</h2>
            <p>Désolé mais la page que vous cherchez n'existe pas, a été supprimée. nom modifié ou est temporairement indisponible.</p>
            <Link to="/">Retour à la page d'accueil</Link>   
          </div>
        </div>
    </>
  )
}