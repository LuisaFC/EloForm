import React, {Component, Fragment} from 'react';
import Header from '../Components/Header/Header';
import 'materialize-css/dist/css/materialize.min.css';

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            usuario: [],
        };
    }


    render(){
        return(
            <Fragment>
                <Header/>
            </Fragment>
        )
    }
}

export default Home;