import { React, useState } from "react";
import '../../css/styles.scss';
import '../signIn/signIn.scss';
import Btn from '../../Components/brownBtnComponent/btn';
import Input from '../../Components/inputComponent/input';
import IconUser from '../../Assets/icons/user-icon.svg'
import IconPassword from '../../Assets/icons/password-icon.svg'
import Background from '../../Components/backgroundComponent/background'
import { AuthContext } from "../../Contexts/auth";

export default function SignIn() {

    const { signIn } = useContext(AuthContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const cpfValue = cpf.replace(/\D/g, "");

        console.log("Submit", {name, email, cpfValue, password} );
        signIn(name, email, cpfValue, password);
    }


    return (
        <div className="signinPage">
            <Background />
            <form onSubmit={handleSubmit} className="signin">
                <p>Patrimonium</p>
                <label>
                    Para realizar o cadastro, basta preencher todos os campos
                    corretamente!           
                </label>
                <div className="inputsSignin">
                    <Input 
                        type={"text"} 
                        placeholder={"Nome Completo"} 
                        required={true} 
                        value={name}
                        onChange= {(e) => setName(e.target.value)}
                    />
                    <Input 
                        type={"mail"} 
                        placeholder={"Email"}
                        value={email}
                        onChange= {(e) => setEmail(e.target.value)}
                    />
                    <Input 
                        type={"text"} 
                        placeholder={"CPF"} img={IconUser} 
                        value={cpf}
                        mask={"000.000.000-00"}
                        onChange= {(e) => setCpf(e.target.value)}
                    />
                    <Input 
                        type={"password"} 
                        placeholder={"Senha"} 
                        value={password}
                        onChange= {(e) => setPassword(e.target.value)}
                        img={IconPassword} 
                    />
                </div>
                <div className="btnSignin">
                    <Btn type={"submit"} btnMessage={"Cadastrar"}/>
                </div>
            </form>
        </div>
    );
}