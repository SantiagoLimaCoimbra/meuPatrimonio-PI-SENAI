import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../../../css/App.css';
import '../../../css/styles.scss';
import './editEmployee.scss';

import Btn from "../../../Components/brownBtnComponent/btn";
import BtnRed from "../../../Components/btnRedComponent/btnRed";
import Input from "../../../Components/inputComponent/input";
import Background from '../../../Components/backgroundComponent/background'
import Menu from '../../../Components/menuComponent/menu';
import DropdownInput from "../../../Components/dropdownInputComponent/dropdownInput";

import { getEmployeeById, updateEmployee } from "../../../Services/api";


export default function EditEmployee() {
    const { id_employee } = useParams();
    const navigate = useNavigate();

    const [name_employee, setEmployeeName] = useState("");
    const [cpf, setCPF] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");


  const options = [
    { value: "Gerente", label: "Gerente" },
    { value: "Efetivo", label: "Efetivo" },
    { value: "Estagiario", label: "Estagiário" }
  ];

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const employee = await getEmployeeById(id_employee);
        setEmployeeName(employee.name_employee);
        setCPF(employee.cpf);
        setEmail(employee.email);
        setPosition(employee.position);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEmployee();
  }, [id_employee]);

  const handleBack = () => {
      navigate("/viewEmployees");
    };


  const handleOptionChange = (event) => {
    setPosition(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    const cpfValue = cpf.replace(/\D/g, "");

    try {
      await updateEmployee(id_employee, name_employee, cpfValue, email, position);
      console.log("Funcionário atualizado com sucesso!");
      navigate("/viewEmployees")
    } catch (error) {
      console.log(error);
      handleErrorOpen("Verifique se os campos foram preenchidos corretamente. Caso estejam corretos, verifique se algum dos dados inseridos já existe no sistema!");
    }
  };


  return (
    <div className="editEmployeePage">
      <Menu />
      <Background />
        <form onSubmit={handleSubmit} className="editEmployee">
          <h1>Editar o funcionário</h1>
          <div className="inputsEditEmployee">
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
          <div className="btnsEditEmployee">
            <BtnRed btnMessage="Cancelar" onClick={handleBack} />
            <Btn type={"submit"} btnMessage={"Editar"} />
          </div>
        </form>
    </div>
  );
}