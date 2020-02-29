import React, {Component, Fragment} from 'react';
import './Home.css';
import Container from '@material-ui/core/Container';
import Header from '../Components/Header/Header';
import Formulario from '../Components/Formulario/Formulario';
import Typography from '@material-ui/core/Typography';

class Home extends Component{
    render(){
        return(
            <Fragment>
                <Header/>
                <Container maxWidth="sm" textAlign="center">
                    <Typography variant="h4" className="title">EloForm</Typography>
                    <Formulario/>
                </Container>
            </Fragment>
        )
    }
}

export default Home;