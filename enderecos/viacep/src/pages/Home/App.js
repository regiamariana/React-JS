import React ,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';

//import {Link} from "react-router-dom";

import '../../assets/css_cep.css';

class Ceps extends Component{
  constructor(){
    super();
    this.state = {
      lista: [

      ],
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: "",
      ibge: "",
      gia: ""
    }
  }
    
    buscarCepPorId = (event) =>{
      this.setState({cep: event.target.value});
      console.log(this.state);
    }
    
    listarCep= (event) =>{
      event.preventDefault();
      let url= 'https://viacep.com.br/ws/09220608/json' 

      fetch(url, {
        method: "GET",
        body: JSON.stringify({cep: this.state.cep}),
        headers: {
          "Content-Type": "application/json"}
      })
      .then(response => response.json())
      .then(data => console.log(data))
        // this.setState({lista: data.target.value 
      //})
      console.log(this.state);
      
    }

    render(){
      return(
        <div className="app">

          <section id="title-section"> 
              
              <h1 className="title">Busque seu CEP</h1>
          </section>
          
          <div  id="img">
              <img  src="http://sga.sites.uff.br/wp-content/uploads/sites/136/2017/03/barra-branca-e1489547582535.jpg"/>
          </div>
          
          <section id="inputs">
              <form onSubmit={this.listarCep}>
                
              <input type="text" id="pesquisaCep" placeholder="digite seu cep"
              onChange={this.buscarCepPorId}
              value={this.state.pesquisaCep}
              
              
              />
              <input type="submit" id="btnProcurar" value="Procurar"/>
              </form>
          </section>
          
          <table id="tabela">
              <thead id="th">
                  <tr>
                      <th>cep</th>
                      <th>logradouro</th>
                      <th>complemento</th>
                      <th>bairro</th>
                      <th>localidade</th>
                      <th>uf</th>
                      <th>unidade</th>
                      <th>ibge</th>
                      <th>gia</th>
                  </tr>
              </thead>
              <tbody id="tabela-corpo">
                  {this.state.lista.map(element =>{
                    return(
                      <tr>
                        <td>{element.cep}</td>
                        <td>{element.logradouro}</td>
                        <td>{element.complemento}</td>
                        <td>{element.bairro}</td>
                        <td>{element.localidade}</td>
                        <td>{element.uf}</td>
                        <td>{element.unidade}</td>
                        <td>{element.ibge}</td>
                        <td>{element.gia}</td>
                      </tr>
                    );
                  })}
              </tbody>
          </table>
            
            
        </div>
      )
    }
};


export default Ceps;
