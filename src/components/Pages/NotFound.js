import React from 'react';
import '../../css/NotFound.css';
import error404 from '../../ImagesPlaceholder/text.png';

export default ({ staticContext = {} }) => {
  staticContext.status = 404;
    return(
      <>
        <div id="notfound">
          <div class="notfound">
          {/* <div class="notfound" styles={{ backgroundImage:`url(${error404})`}}> */}
            <div class="notfound-404">
              <h1>404</h1>
            </div>
            <h2>Oops! Cette page n'a pas pu être trouvée</h2>
            <p>Désolé mais la page que vous cherchez n'existe pas, a été supprimée. nom modifié ou est temporairement indisponible.</p>
            <a href="#">Retour à la page d'accueil</a>
          </div>
        </div>
    </>
  )
}