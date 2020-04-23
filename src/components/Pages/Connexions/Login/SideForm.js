import React, {Component} from 'react';
import '../../../../css/ConnexionProprietaireLocataire.scss';

// import { Col, Container, Row, Card} from 'react-bootstrap';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

export class SideForm extends Component {
    render() {
        return(
            <div>
                <Card className="text-black cardConnexionImage">
                    <Card.Img width="100%" src='./images/connexion.png' alt="Card image" />
                    <Card.ImgOverlay className="text-connection">
                        <Card.Text>
                        Ea qui magna laboris labore. Sint sit commodo esse duis deserunt in commodo aliquip ut 
                        elit ex dolor adipisicing in.
                        Aliquip deserunt aliqua pariatur aliquip culpa proident occaecat ullamco amet dolor. 
                        Ad officia incididunt aliquip Lorem pariatur adipisicing Lorem laborum est in voluptate mollit sit. 
                        Fugiat elit sunt ea culpa cillum eu amet in laborum dolore aliqua pariatur incididunt consectetur. 
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>

            )
        }
    }
    
export default SideForm;