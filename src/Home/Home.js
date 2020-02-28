import React, {Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Home.css';
import Header from '../Components/Header/Header';
import Formulario from '../Components/Formulario/Form';


class Home extends Component{

    render(){
        return(
            <Fragment>
                <Header/>
                <Formulario/>
            </Fragment>
        )
    }
}

export default Home;