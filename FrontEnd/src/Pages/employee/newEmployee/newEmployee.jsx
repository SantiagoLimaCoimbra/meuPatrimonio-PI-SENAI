import { React, useState, useContext } from "react";
import '../../../css/App.css';
import '../../../css/styles.scss';
import './newEmployee.scss';

import Btn from "../../../Components/brownBtnComponent/btn";
import BtnRed from "../../../Components/btnRedComponent/btnRed";
import Input from "../../../Components/inputComponent/input";
import Background from '../../../Components/backgroundComponent/background'
import Menu from '../../../Components/menuComponent/menu';
import DropdownInput from "../../../Components/dropdownInputComponent/dropdownInput";

import { AuthContext } from "../../../Contexts/auth";
import { useNavigate } from "react-router-dom";

export default function NewEmployee() {

    const { newEmployee } = useContext(AuthContext);

    const [name_employee, setEmployeeName] = useState("");
    const [cpf, setCPF] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const navigate = useNavigate();

    const options = [
        { value: "Gerente", label: "Gerente" },
        { value: "Efetivo", label: "Efetivo" },
        { value: "Estagiario", label: "Estagiário" },
      ];

    const handleBack = (e) => {
        navigate("/viewEmployees");
    }

    const handleOptionChange = (event) => {
        setPosition(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const cpfValue = cpf.replace(/\D/g, "");

        console.log("Submit", { name_employee, cpfValue, email, position } );
        newEmployee(name_employee, cpfValue, email, position);
    }
    
    return (
        <div className="newEmployeePage">
            <Menu />
            <Background />
            <div className="newEmployee">
               
                <form onSubmit={handleSubmit} className="newEmployeeForm">
                <h1>Cadastrar funcionário</h1>
                    <div className="inputsEmployee">
                            <Input
                                id="name"
                                type={"text"}
                                placeholder={"Nome"}
                                value={name_employee}
                                required={true}
                                onChange={(e) => setEmployeeName(e.target.value)}
                            />
                            <Input
                                id="email"
                                type={"text"}
                                placeholder={"Email"}
                                value={email}
                                required={true}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                id="cpf"
                                type={"text"}
                                mask={"000.000.000-00"} 
                                placeholder={"CPF"}
                                value={cpf}
                                required={true}
                                onChange={(e) => setCPF(e.target.value)}
                            />
                            <DropdownInput
                                id="cpf"
                                type={"type"}
                                placeholder={"Posição"}
                                value={position}
                                required={true}
                                options={options}
                                onChange={handleOptionChange}
                            />
                    </div>
                    <div className="btnsNewEmployee">
                        <BtnRed btnMessage={"Cancelar"} onClick={handleBack} />
                        <Btn type={"submit"} btnMessage={"Cadastrar"} />
                    </div>
                </form>
            </div>
        </div>

    );
}