//MARYAM KHALLALA 
//FSTM MAROC
//GENIE LOGICIEL
//TEST TECHNIQUE TTV


import React, { Component } from "react";
import './App.css';

//Envoyer les donnée vers un API (POST request)

class Post extends Component {
  state = {
    firsname: "",
    lastname: "",
    email: "",
    about: "",
  };

  onfirsnameChange = e => {
    this.setState({
      firsname: e.target.value
    });
  };

  onlastnameChange = e => {
    this.setState({
      lastname: e.target.value
    });
  };
  onemailChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  onaboutChange = e => {
    this.setState({
      about: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    
// l'utilisation de l'axios pour envoyer les donnée vers API

    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
  'firsname': this.state.firsname,
  'lastname': this.state.lastname,
  'email': this.state.email,
  'about': this.state.about
 
});
var config = {
  method: 'post',
  url: 'http://localhost:8081/candidate',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

  };

//creer le formulaire avec les norme mentioné dans l'exercice

  render() {
    return (
      <div className="post">
        <header className="App-header">
        <form className="post" onSubmit={this.handleSubmit}>
          <input name='firstname' class="champ" type="text" placeholder='First name' value={this.state.firsname}
            onChange={this.onfirsnameChange} required/><br></br>
        <input name='lastname' class="champ" type="text" placeholder='Last name' value={this.state.lastname}
            onChange={this.onlastnameChange} required/><br></br>
        <input name='email' class="champ" type="email" placeholder='Email' value={this.state.email}
            onChange={this.onemailChange} required/><br></br>
        <textarea name='about'  class="champ" placeholder='About as' value={this.state.about}
            onChange={this.onaboutChange} required></textarea><br></br>
        <input name='file' class="champ" type="file" /><br></br>
           <button className="Btn" type="submit"  >s u b m i t</button>
        </form>
        </header>
      </div>
    );
  }
}


export default Post;
