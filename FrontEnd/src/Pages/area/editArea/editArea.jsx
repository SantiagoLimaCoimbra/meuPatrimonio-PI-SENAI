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
import { useNavigate } from "react-router-dom";
import BtnRed from "../../../Components/btnRedComponent/btnRed";

import { updateArea, getAreaById } from "../../../Services/api";

import { AuthContext } from "../../../Contexts/auth";

export default function EditArea() {
  const { getEmployeeData } = useContext(AuthContext);
  const { id_area } = useParams();
  const [name_area, setNameArea] = useState("");
  const [description_area, setDescription] = useState("");
  const [employee, setEmployee] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEmployeeData();
        setEmployeeData(data.map((employee) => ({ value: employee.id_employee, label: employee.name_employee })));
        console.log("emp", data); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  
  useEffect(() => {
    const fetchArea = async () => {
      try {
        const area = await getAreaById(id_area);
        console.log(area)
        setNameArea(area.name_area);
        setDescription(area.description_area);
        setEmployee(area.employee.id_employee);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArea();
  }, [id_area]);

  const handleBack = () => {
    navigate("/viewAreas");
  };

  const handleOptionChange = (event) => {
    setEmployee(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateArea(id_area, name_area, description_area, employee);
      navigate("/viewAreas");
      console.log("Area atualizada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="editAreaPage">
      <Menu />
      <Background />
        <form onSubmit={handleSubmit} className="editArea">
          <h1>Editar a área</h1>
          <div className="inputsEditArea">
            <div className="areaRow1">
              <Input
                id="name"
                type={"text"}
                placeholder={"Nome"}
                value={name_area}
                required={false}
                onChange={(e) => setNameArea(e.target.value)}
              />
              <DropdownInput
                id="typeArea"
                type={"type"}
                placeholder={"Tipo"}
                value={employee}
                required={false}
                options={employeeData}
                onChange={handleOptionChange}
              />
            </div>
            <div className="areaRow2">
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
            <BtnRed btnMessage="Cancelar" onClick={handleBack} />
            <Btn type={"submit"} btnMessage={"Editar"} />
          </div>
        </form>
    </div>
  );
}