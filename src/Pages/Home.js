import React, {Component, Fragment} from 'react';
import './Home.css';
import Container from '@material-ui/core/Container';
import Header from '../Components/Header/Header';
import Formulario from '../Components/Formulario/Formulario';
import Typography from '@material-ui/core/Typography';

export default class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            users: [],
        }
    }

    submitListener = user => {
        const {users} = this.state;
        users.push(user);
        console.log(users);
        this.setState({users})
        
        
    }


    render(){
        return(
            <Fragment>
                <Header/>
                <Container maxWidth="sm" textalign="center">
                    <Typography variant="h4" className="title">EloForm</Typography>
                    <Formulario submitListener={this.submitListener} />
                </Container>
            </Fragment>
        )
    }



}


