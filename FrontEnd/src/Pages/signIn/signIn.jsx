import { React } from "react";
import '../../css/styles.scss';
import '../signIn/signIn.scss';
import Btn from '../../Components/brownBtnComponent/btn';
import Input from '../../Components/inputComponent/input';
import IconUser from '../../Assets/icons/user-icon.svg'
import IconPassword from '../../Assets/icons/password-icon.svg'
import Background from '../../Components/backgroundComponent/background'

 function SignIn() {

    return (
        <div className="signinPage">
            <Background />
            <div className="signin">
                <p>Patrimonium</p>
                <label>
                    Para realizar o cadastro, basta preencher todos os campos
                    corretamente!           
                </label>
                <div className="inputsSignin">
                    <Input type={"text"} placeholder={"Nome Completo"} required={true}/>
                    <Input type={"mail"} placeholder={"Email"} />
                    <Input type={"text"} placeholder={"CPF"} img={IconUser} mask={"000.000.000-00"}/>
                    <Input type={"password"} placeholder={"Senha"} img={IconPassword} />
                </div>
                <div className="btnSignin">
                    <Btn btnMessage={"Cadastrar"}/>
                </div>
            </div>
        </div>
    );
}

export default SignIn;