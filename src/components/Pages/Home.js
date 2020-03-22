import React, {Component} from 'react';
import '../../css/Home.scss';



export class Home extends Component {

    render() {
        return(
            <div>
                <div className="mt-5 d-flex text-center justify-content-center">
                    <h3>On s’occupe de tous et vous de rien</h3>
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
                            <div className="col-xs-12 col-md-6 text-center mb-2 ">
                                    <div className="card">
                                        <img class="card-img style-card"  alt="Poster_une_annonce" />
                                            <div class="card-img-overlay">
                                                <button class="btn btn-md btn-success">Poster une annonce</button>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center">Gérer mes locations
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}