import React, {Component} from 'react';
// import '../../../css/LogoutApp.scss';
import { Container, Row } from 'react-bootstrap';
import HeaderApp from './HeaderApp';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export class HomepageApp extends Component {

    

    render(){
        return (
            <div>
                <Container >
                    <Row className="d-flex justify-content-center">
                        <HeaderApp />
                    </Row> 
                    
                    <Container>
                        <TaksList />
                    </Container>
                </Container>
                   
            </div>

        )
    }
}

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0),
  ];
  
function TaksList() {
    const classes = useStyles();
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="list">
          <TableHead>
            <TableRow>
              <TableCell align="right">Id Annonce</TableCell>
              <TableCell align="right">Nom  du  propriétaire</TableCell>
              <TableCell align="right">Adresse</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                    <TableCell align="right">{row.id_annonce}</TableCell>
                    <TableCell align="right">{row.nomDuPropriétaire}</TableCell>
                    <TableCell align="right">{row.adresse}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

export default HomepageApp;