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

class Formulario extends Component {
    render() {
        return (
            <form>
                <div className="linha">
                    <TextField className="input" id="nome" label="Nome" name="nome" type="text" />
                </div>
                <div className="linha">
                    <TextField className="input" id="telefone" label="Telefone" type="text" />
                </div>
                <div className="linha" >
                    <FormControl className="input">
                        <InputLabel>Como nos conheceu?</InputLabel>
                        <Select native  >
                            <option value="" />
                            <option>TV</option>
                            <option>Internet</option>
                            <option>Outros</option>
                        </Select>
                    </FormControl>
                </div>
                <div className="radio">
                    <FormControl>
                        <FormLabel>Possui rede social?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="nao" control={<Radio />} label="Não" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="linha">
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
                </div>
            </form>
        );
    }
}

export default Formulario;