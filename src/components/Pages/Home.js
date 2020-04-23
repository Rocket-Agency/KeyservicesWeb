//Home.js
import React, {Component} from 'react';
import '../../css/Home.scss';
import Img from 'react-cool-img';



export class Home extends Component {

    render() {
        return(
            <div>
                <div className="mt-5 d-flex text-center justify-content-center">
                    <h1>On s’occupe de tous et vous de rien</h1>
                </div>
            
                <div className="container-fluid">
                    <div className="mt-2 mb-3 colorBackground">
                        <div className="row">
                        <p className="text-home text-center d-flex justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Proin ac augue nibh. Nam et interdum augue. Nullam ut ante elit. 
                            Duis elementum tellus nisi, sed aliquet arcu pharetra ut. 
                            Vestibulum eros nibh, lobortis eget ex vitae, eleifend ultricies mi. 
                            Praesent in elit viverra, luctus dolor sed, mattis turpis. Nam non sapien mauris. 
                            Nam id nulla ac velit tristique faucibus. Nunc ut nibh posuere, 
                            ultricies augue nec, lacinia sapien. Integer scelerisque faucibus turpis, 
                            vel ultricies arcu tempus at. </p>

                        <p className="text-home text-center d-flex justify-content-center">Sed tristique tincidunt enim quis viverra. Suspendisse malesuada auctor felis, 
                            ac luctus mauris pulvinar vel. Phasellus scelerisque dapibus mauris,
                            eget porta ligula. Vestibulum dictum ullamcorper nunc, nec vehicula tortor dictum et.</p>
                        </div>

                        <div className="container-fluid">
                            <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-2">
                                    <div className="card">
                                        <Img className="card-img style-card" src='./images/GererMesLocations.png' alt="Gerer_Mes_Locations" />
                                        <div className="card-img-overlay">
                                            <button className="btn btn-md btn-success"> Gérer mes locations</button>
                                        </div>
                                   </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-2">
                                    <div className="card">
                                        <Img className="card-img style-card" src='./images/PosterUneAnnonce.png' alt="Gerer_Mes_Locations" />
                                        <div className="card-img-overlay">
                                            <button className="btn btn-md btn-success"> Poster une annonce</button>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}