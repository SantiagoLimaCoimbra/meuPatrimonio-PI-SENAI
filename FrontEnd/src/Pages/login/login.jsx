import React, { useState, useContext } from "react";
import '../../css/App.css'
import '../../css/styles.scss';
import './login.scss';
import Btn from '../../Components/brownBtnComponent/btn';
import Input from "../../Components/inputComponent/input";
import IconUser from '../../Assets/icons/user-icon.svg'
import IconPassword from '../../Assets/icons/password-icon.svg'
import Background from '../../Components/backgroundComponent/background'
import { AuthContext } from "../../Contexts/auth";

import { Link } from "react-router-dom";

export default function Login() {

    const { authenticated, login, user } = useContext(AuthContext);

    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Submit", { cpf, password });
        console.log(user)
        login(cpf, password); // integração com o contexto e com a api
    };

    return (
        <div className="loginPage">
            <Background />
                <form onSubmit={handleSubmit} className="login">
                <p>Patrimonium</p>
                <label>
                    Olá, seja muito bem-vindo ao seu sistema de gerenciamento de 
                    patrimônio!            
                </label>
                    <div className="inputsLogin">
                        <Input 
                            type={"text"} 
                            placeholder={"Cpf"} 
                            img={IconUser} 
                            mask={"000.000.000-00"} 
                            value={cpf} 
                            // value={"55555555555"}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                        <Input 
                            type={"password"} 
                            placeholder={"Senha"} 
                            img={IconPassword} 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="btnsLoginSignin">
                        <Btn type={"submit"} btnMessage={"Entrar"}/>
                        <label className="signinText">
                            Primeiro acesso? <Link to="/signin">Cadastre-se</Link>
                        </label>
                    </div>
                </form>
        </div>

    );
}