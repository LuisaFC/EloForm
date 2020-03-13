import React, { Component} from 'react';
import { TextField, Select, InputLabel, FormControl, Input, RadioGroup, FormLabel, Radio, FormControlLabel, Checkbox, FormGroup, Box } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import yellow from '@material-ui/core/colors/yellow';
import Button from '@material-ui/core/Button';
import FormValidator from '../../utils/FormValidator';
import InputMask from 'react-input-mask';
import Toast from '../Alert/Toast';
import cadastar from '../../utils/FormAction';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.state ={
            disable: false
        }
        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'matches',
                validoQuando: true,
                args: [/[A-Z][a-z]* [A-Z][a-z]*/],
                mensagem: 'Entre com ao menos um nome e um sobrenome'
            },
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com nome e sobrenome'
            },
            {
                campo: 'tel',
                metodo: 'matches',
                validoQuando: true,
                args: [/^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/],
                mensagem: 'Telefone Inválido'
            },
        ]);

        this.stateInicial = {
            nome: '',
            tel: '',
            combo: '',
            isVisible: false,
            redes: [],
            validacao: this.validador.valido(),
            errors: {},
            open: true,
        }

        
        this.state = this.stateInicial;
        this.onChange = this.onChange.bind(this);

    }

    inputListener = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });

    }

    submitForm = () => {

        const validacao = this.validador.valida(this.state);

        if (validacao.isValid) {

            const newUser = {
                nome: this.state.nome,
                tel: this.state.tel,
                combo: this.state.combo,
                redes: this.state.redes,
            }


            cadastar(newUser);

            this.props.submitListener(this.state);

            // console.log(this.state);
            this.setState({disable: true})
            this.setState(this.stateInicial);
        } else {
            const { nome, tel } = validacao;
            const campos = [nome, tel];
            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });

            camposInvalidos.forEach(err => this.setState({errors: err, open:true}));

            
        }
    }


    onChange(e) {
        this.setState({ isVisible: !this.state.isVisible });
        if (e.target.name === "nao") {
            this.setState({ isVisible: false })
        }
    }

    insertRedes = e => {
        const { redes } = this.state;
        !redes.includes(e.target.name) ? redes.push(e.target.name) : redes.splice(redes.indexOf(e.target.name), 1);
        this.setState({ redes });
    }

    phoneMask = props => {
        return (
            <InputMask {...props} mask="(99) \99999-9999" maskChar=" " />
        )
    }

    onClose = () => {
        this.setState({open:false})
    }


    render() {

        const { nome, tel, combo, errors, disable } = this.state;


        return (

            <form>
                <Box className="linha">
                    <TextField className="input validate" id="nome" label="Nome" name="nome" type="text" value={nome} onChange={this.inputListener} />
                    {errors.message && (
                        <Toast
                            open={this.state.open}
                            message={errors.message}
                            severity='error'
                            vertical='top'
                            horizontal='right'
                            onClose={this.onClose}
                        />
                    )}
                </Box>
                <Box className="linha">
                    <FormControl className="input validate">
                        <InputLabel htmlFor="tel">Telefone</InputLabel>
                        <Input id="tel" label="Telefone" name="tel" type="text" value={tel} onChange={this.inputListener} inputComponent={this.phoneMask}>
                        </Input>
                    </FormControl>
                </Box>
                <Box className="linha" >
                    <FormControl className="input">
                        <InputLabel>Como nos conheceu?</InputLabel>
                        <Select native name="combo" value={combo} onChange={this.inputListener}>
                            <option value=""></option>
                            <option value="Tv"> TV </option>
                            <option value="Internet"> Internet </option>
                            <option value="Outros"> Outros </option>
                        </Select>
                    </FormControl>
                </Box>
                <MuiThemeProvider theme={theme}>
                    <Box className="radio">
                        <FormControl>
                            <FormLabel>Possui rede social?</FormLabel>
                            <RadioGroup onChange={this.inputListener} >
                                <FormControlLabel value="sim" control={<Radio />} label="Sim" checked={this.state.isVisible} onChange={this.onChange} />
                                <FormControlLabel value="nao" name='nao' control={<Radio />} label="Não" onChange={this.onChange} />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box className="linha" hidden={!this.state.isVisible} >
                        <FormControl>
                            <FormLabel>Quais?</FormLabel>
                            <FormGroup >
                                <FormControlLabel
                                    control={<Checkbox value="facebook" />}
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
                        variant="contained" 
                        disabled={disable}
                        color="secondary"
                        onClick={this.submitForm}>
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