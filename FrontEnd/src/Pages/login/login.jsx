import { React } from "react";
import '../../css/App.css'
import '../../css/styles.scss';
import './login.scss';
import Btn from '../../Components/brownBtnComponent/btn';
import Input from '../../Components/inputComponent/input';
import IconUser from '../../Assets/icons/user-icon.svg'
import IconPassword from '../../Assets/icons/password-icon.svg'
import Background from '../../Components/backgroundComponent/background'

import { Link } from "react-router-dom";

export default function Login() {

    return (
        <div className="loginPage">
            <Background />
            <div className="login">
                <p>Patrimonium</p>
                <label>
                    Olá, seja muito bem-vindo ao seu sistema de gerenciamento de 
                    patrimônio!            
                </label>
                <div className="inputsLogin">
                    <Input type={"text"} placeholder={"Cpf"} img={IconUser} mask={"000.000.000-00"}/>
                    <Input type={"password"} placeholder={"Senha"} img={IconPassword} />
                </div>
                <div className="btnsLoginSignin">
                    <Btn type={"submit"} btnMessage={"Entrar"}/>
                    <label className="signinText">
                        Primeiro acesso? <Link to="/signin">Cadastre-se</Link>
                    </label>
                </div>
            </div>
        </div>

    );
}