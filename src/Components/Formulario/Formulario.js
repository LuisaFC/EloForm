import React, { Component } from 'react';
import { TextField, Select, InputLabel, FormControl, RadioGroup, FormLabel, Radio, FormControlLabel, Checkbox, FormGroup, Box} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import yellow from '@material-ui/core/colors/yellow';
import Button from '@material-ui/core/Button';
import FormValidator from '../../utils/FormValidator';


class Formulario extends Component {

    constructor(props) {
        super(props);

        this.state = { isVisible: false };
        this.onChange = this.onChange.bind(this);
        this.stateInicial = {
            nome: '',
            tel: '',
            combo: '',
            isVisible: false,
            redes: [],
        }

        this.state = this.stateInicial;

    }

    inputListener = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });

    }

    submitForm = () => {
        this.props.submitListener(this.state);
        console.log(this.state);
        this.setState(this.stateInicial);
    }

    onChange(e) {
        this.setState({ isVisible: !this.state.isVisible });
        if (e.target.name === "nao") {
            this.setState({ isVisible: false })
        }
    }

    insertRedes = e => {
        const {redes} = this.state;
        !redes.includes(e.target.name) ? redes.push(e.target.name) : redes.splice(redes.indexOf(e.target.name), 1);
        this.setState({redes});
    }



    render() {

        const { nome, tel, combo, } = this.state;
        

        return (
            <form>
                <Box className="linha">
                    <TextField className="input" id="nome" label="Nome" name="nome" type="text" value={nome} onChange={this.inputListener} />
                </Box>
                <Box className="linha">
                    <TextField className="input" id="tel" name="tel" label="Telefone" type="text" value={tel} onChange={this.inputListener} />
                </Box>
                <Box className="linha" >
                    <FormControl className="input">
                        <InputLabel>Como nos conheceu?</InputLabel>
                        <Select native name="combo"  value={combo} onChange={this.inputListener}>
                            <option  value=""></option>
                            <option  value="Tv"> TV </option>
                            <option  value="Internet"> Internet </option>
                            <option  value="Outros"> Outros </option>
                        </Select>
                    </FormControl>
                </Box>
                <MuiThemeProvider theme={theme}>
                    <Box className="radio">
                        <FormControl>
                            <FormLabel>Possui rede social?</FormLabel>
                            <RadioGroup onChange={this.inputListener} >
                                <FormControlLabel  value="sim" control={<Radio />} label="Sim" checked={this.state.isVisible} onChange={this.onChange} />
                                <FormControlLabel  value="nao" control={<Radio />} label="Não" onChange={this.onChange} />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box className="linha" hidden={!this.state.isVisible} >
                        <FormControl>
                            <FormLabel>Quais?</FormLabel>
                            <FormGroup >
                                <FormControlLabel
                                    control={<Checkbox value="facebook"   />}
                                    label="Facebook"
                                    name="Facebook"
                                    onChange={this.insertRedes}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="linkedin" />}
                                    label="Linkedin"
                                    name="Linkedin"
                                    onChange={this.insertRedes}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="Instagram" />}
                                    label="Instagram"
                                    name="Instagram"
                                    onChange={this.insertRedes}
                                />
                            </FormGroup>
                        </FormControl>
                    </Box>

                    <Button
                        variant="contained" color="secondary"
                        onClick={this.submitForm} >
                        Send
                    </Button>


                </MuiThemeProvider>

            </form>
        );
    }
}

const theme = createMuiTheme({
    palette: {
        secondary: { main: yellow[700] }
    }
});


export default Formulario;