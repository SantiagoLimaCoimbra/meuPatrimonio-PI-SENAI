import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import '../../../css/App.css';
import '../../../css/styles.scss';
import './editArea.scss';

import Btn from "../../../Components/brownBtnComponent/btn";
import Input from "../../../Components/inputComponent/input";
import Background from '../../../Components/backgroundComponent/background'
import Menu from '../../../Components/menuComponent/menu';
import DropdownInput from "../../../Components/dropdownInputComponent/dropdownInput";

import { updateArea } from "../../../Services/api";

import { AuthContext } from "../../../Contexts/auth";

export default function EditArea() {
  const { handleEditArea } = useContext(AuthContext);
  const { id_area } = useParams();

  console.log("EditArea:", id_area);

  const [name_area, setAreaName] = useState("");
  const [description_area, setDescription] = useState("");
  const [employee, setEmployee] = useState("");;

  const options = [
    // Chamar funcioários aqui
    { value: "Estagiario", label: "Estagiário" },
    { value: "Efetivo", label: "Efetivo" },
    { value: "Gerente", label: "Gerente" },
  ];

  useEffect(() => {
    const fetchArea = async () => {
      try {
        const area = await handleEditArea(id_area);
        setAreaName(area.name);
        setDescription(area.description);
        setEmployee(area.employee);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArea();
  }, []);


  const handleOptionChange = (event) => {
    setEmployee(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateArea(id_area, name_area, employee, description_area);
      console.log("Area atualizada com sucesso!");
      // Redirecionar para a página de visualização de areas, ou exibir uma mensagem de sucesso
    } catch (error) {
      console.log(error);
      // Exibir um modal de erro ou tratar o erro de alguma outra forma
    }
  };


  return (
    <div className="editAreaPage">
      <Menu />
      <Background />
      <div className="editArea">
        <form onSubmit={handleSubmit} className="editAreaForm">
          <h1>Editar area</h1>
          <div className="inputsArea">
            <div className="AreaRow1">
              <Input
                id="name"
                type={"text"}
                placeholder={"Nome"}
                value={name_area}
                required={false}
                onChange={(e) => setAreaName(e.target.value)}
              />
              <DropdownInput
                id="typeArea"
                type={"type"}
                placeholder={"Tipo"}
                value={employee}
                required={false}
                options={options}
                onChange={handleOptionChange}
              />
            </div>
            <div className="AreaRow2">
              <Input
                id="descriptionArea"
                type={"description"}
                placeholder={"Descrição"}
                value={description_area}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="btnsEditArea">
            <Btn type={"submit"} btnMessage={"Editar"} />
          </div>
        </form>
      </div>
    </div>
  );
}