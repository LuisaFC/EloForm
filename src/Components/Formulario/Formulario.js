import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import yellow from '@material-ui/core/colors/yellow';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';




class Formulario extends Component{

    constructor(props) {
        super(props);

        this.state = { isVisible: false };
        this.onChange = this.onChange.bind(this);
    }


    onChange(e){
        this.setState({isVisible: !this.state.isVisible});
    }


    render() {
        return (
            <form>
                <Box className="linha">
                    <TextField className="input" id="nome" label="Nome" name="nome" type="text" />
                </Box>
                <Box className="linha">
                    <TextField className="input" id="telefone" label="Telefone" type="text" />
                </Box>
                <Box className="linha" >
                    <FormControl className="input">
                        <InputLabel>Como nos conheceu?</InputLabel>
                        <Select native  >
                            <option value="" />
                            <option>TV</option>
                            <option>Internet</option>
                            <option>Outros</option>
                        </Select>
                    </FormControl>
                </Box>
                <MuiThemeProvider theme={theme}>
                    <Box className="radio">
                        <FormControl>
                            <FormLabel>Possui rede social?</FormLabel>
                            <RadioGroup>
                                <FormControlLabel value="sim" control={<Radio />} label="Sim" checked={this.state.isVisible} onChange={this.onChange}  onChange={this.onChange}/>
                                <FormControlLabel value="nao" control={<Radio />} label="Não"  onChange={this.onChange}/>
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box className="linha" hidden={!this.state.isVisible} >
                        <FormControl>
                            <FormLabel>Quais?</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox value="facebook" />}
                                    label="Facebook"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="linkedin" />}
                                    label="Linkedin"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="Instagram" />}
                                    label="Instagram"
                                />
                            </FormGroup>
                        </FormControl>
                    </Box>
                    <Button
                        variant="contained" color="secondary">
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