import React, { useState, useEffect} from "react";
import "./App.css";

import { HiArrowSmRight } from "react-icons/hi";

import Logo from "./assets/logoRiot.png";
import Google from "./assets/google.png";
import Facebook from "./assets/facebook.png";
import Apple from "./assets/apple.png";
import Background from "./assets/background.jpg";

function App() {
  const [password, setPassword] = useState("");
  const [teste, setTeste] = useState(false)

  useEffect(() => {
    loginActivation();
  }, [password])

  function loginActivation(){
    if(password.length >= 8){
      setTeste(true)
    }else{
      setTeste(false)
    }
  }

  function login(){
    alert('Obrigado por utilizar o site')
  }

  return (
    <div className="App">
      <div className="container">
        <div className="containerInfo">
          <img className="logo" src={Logo} />
          <h1 className="title">Fazer Login</h1>
          <input type="text" className="user" placeholder="NOME DE USUÁRIO" />

          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            className="user"
            placeholder="SENHA"
          />

          <div className="icons">
            <button
              className="containerIcon btn btn-primary"
              style={{ backgroundColor: "blue" }}
            >
              <img className="icon" src={Facebook} />
            </button>

            <div
              className="containerIcon btn btn-light"
              style={{ backgroundColor: "lightgray" }}
            >
              <img className="icon" src={Google} />
            </div>

            <div
              className="containerIcon btn btn-dark"
              style={{ backgroundColor: "black" }}
            >
              <img className="icon" src={Apple} />
            </div>
          </div>

          <div className="containerCheckbox">
            <input type="checkbox" className="checkbox" />
            <p>Manter Login</p>
          </div>

            {teste ? (
              <button onClick={login} className="containerRight" style={{backgroundColor: 'red'}}>
                <HiArrowSmRight size={30} color='white'/>
              </button>
            ) : (
              <button className="containerRight" disabled style={{backgroundColor: 'lightgray'}}>
                <HiArrowSmRight size={30} color='white'/>
              </button>
            )}

          <div className="links">
            <a href="">NÃO CONSEGUE INICIAR SESSÃO?</a>
            <a href="">CRIAR CONTA</a>
          </div>
        </div>
      </div>

      <div
        className="background"
        style={{ backgroundImage: `url(${Background})` }}
      />
    </div>
  );
}

export default App;
