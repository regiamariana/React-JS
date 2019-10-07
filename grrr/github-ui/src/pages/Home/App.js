import React, { Component } from 'react';
import { labeledStatement } from "@babel/types";
import Axios from "axios";

import './App.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: []
    }
  }


  //LISTAR USUARIOS

  componentDidMount() {
    this.listarUsuarios();
  }

  listarUsuarios = () => {
    Axios.get("https://api.github.com/users/Regiamariana/repos")
      .then(response => {
        this.setState({ usuarios: response.data })
      })



  }

  render() {
    return (
      <div>

      <h1>busque seu nome de usuário</h1>
      <form onSubmit={this.listarUsuarios}>

      <input type="text" 
      value={this.state.name}
      
      />
      <input type="submit" value="procurar" />
      </form>


      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>node_id</th>
            <th>name</th>
            <th>full_name</th>
            <th>private</th>
            <th>owner</th>
          </tr>
        </thead>

        <tbody>
          {this.state.usuarios.map(element =>{
            return(
              <tr>
                <td>{element.id}</td>
                <td>{element.node_id}</td>
                <td>{element.name}</td>
                <td>{element.full_name}</td>
                <td>{element.private}</td>
                <td>{element.owner}</td>
              </tr>
            )
          })}
        </tbody>
      </table>


      </div>
        )
  }
};


//+ name.options[name.selectedIndex].value +