import React from 'react';
import axios from 'axios';

class Example5 extends React.Component {

    // Nous allons faire un controller qui permette d'intéragir avec une API sous forme de TODO List.
    // Ici nous allons déclarer son state et binder les différentes fonctions
    constructor(props) {
        super(props);
        this.state = {
            tasks: undefined,
            taskName: "",
            taskID: undefined
        }
    }

    // Dans le component did mount nous faisont la requête GET afin de récupérer la liste de TODO
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            const taskData = response.data;
            this.setState({ 'tasks': taskData });
        })
        .catch(function (error) {
            console.log(error);
        })
    }
 
    // Cette fois ci, nous avons réalisé un affichage conditionnel pour gérer le cas ou la requête GET ne serais pas finie
    // Lorsque la requête GET est finie le contenu s'affiche correctement !
    render() {
        if (this.state.tasks === undefined)
          return (
            <div>
                <ul>
                    <li>Loading ...</li>
               </ul>
            </div>
          )
        else
          return (
            <div>
                <h4>Méthode GET :</h4><br/>
                <p><b>TODO</b> List :</p>
                <ul>
                    {this.state.tasks.map(task =>
                      <div key={task.id}>
                        <li>{task.title} 
                        </li>
                      </div>
                    )}
               </ul>
            </div>
          )
    }
}


export default Example5;