import React, { Component } from 'react';
import M from 'materialize-css';



class Form extends Component{

    constructor(props){
        super(props);

        this.stateInicial ={
            nome: '',
            telefone: '',
            meio: '',
            rede: ''

        }

        this.state = this.stateInicial;
    }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render(){

        const {nome, telefone, meio, rede} = this.state;

        return(
            <form >
                <div className="row">
                    <div className="input-field col s4">
                        <input className="validate" id="first_name" type="text" name="nome" value={nome}/>
                        <label for="first_name">Nome</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s4">
                        <input className="validate" id="telefone" type="tel" name="telefone" value={telefone} />
                        <label for="telefone">Telefone</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field combo-box">
                        <select>
                            <label value=""></label>
                            <option id="tv" value={meio}>TV</option>
                            <option id="internet" value={meio}>Internet</option>
                            <option id="outro" value={meio}>Outros</option>
                        </select>
                        <label className="combo">Como nos conheceu?</label>
                    </div>
                </div>
                <div className="row">
                    <div className= "section">
                        <label>Possui rede social?</label>
                        <p>
                            <label>
                                <input className="with-gap" type="radio" />
                                <span>Sim</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input className="with-gap" type="radio"  />
                                <span>Não</span>
                            </label>
                        </p>
                        <div class="divider"></div>
                        <label>Quais?</label>
                        <p>
                            <label>
                                <input type="checkbox" disabled="disabled" value={rede} id="facebook" />
                                <span>Facebook</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" disabled="disabled" value={rede} id="linkedin"/>
                                <span>Linkedin</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" disabled="disabled" value={rede} id="instagram" />
                                <span>Instagram</span>
                            </label>
                        </p>
                    </div>
                </div>
            </form>
        )
    }

}

export default Form;