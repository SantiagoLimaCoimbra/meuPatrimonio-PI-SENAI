import { React, useState, useContext, useEffect } from "react";
import '../../../css/App.css';
import '../../../css/styles.scss';
import './newArea.scss';

import Btn from "../../../Components/brownBtnComponent/btn";
import BtnRed from "../../../Components/btnRedComponent/btnRed";
import Input from "../../../Components/inputComponent/input";
import Background from '../../../Components/backgroundComponent/background'
import Menu from '../../../Components/menuComponent/menu';
import DropdownInput from "../../../Components/dropdownInputComponent/dropdownInput";

import { AuthContext } from "../../../Contexts/auth";
import { useNavigate } from "react-router-dom";

export default function NewArea() {
  const { newArea, getEmployeeData } = useContext(AuthContext);
  const [name_area, setAreaName] = useState("");
  const [description_area, setDescription] = useState("");
  const [employee, setEmployee] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const navigate = useNavigate();

  console.log(employee);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEmployeeData();
        setEmployeeData(data.map((employee) => ({ value: employee.id_employee, label: employee.name_employee })));
        console.log(employeeData); 
        console.log(getEmployeeData());
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  const handleBack = () => {
      navigate("/viewAreas");
    };
    
    const handleOptionChange = (event) => {
      setEmployee(event);
    };

    
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
      await newArea(name_area, description_area === "" ? "Não possui descrição" : description_area, employee);
      navigate("/viewAreas");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="newAreaPage">
      <Menu />
      <Background />
        <form onSubmit={handleSubmit} className="newArea">
          <h1>Cadastrar nova área</h1>
          <div className="inputsArea">
            <div className="areaRow1">
              <Input
                id="name_area"
                type="text"
                placeholder="Nome"
                value={name_area}
                required={true}
                onChange={(e) => setAreaName(e.target.value)}
              />
              <DropdownInput
                id="employee"
                type="type"
                placeholder={"Funcionário"}
                value={employee}
                required={true}
                options={employeeData}
                onChange={(e) => handleOptionChange(e.target.value)}
              />
            </div>
            <div className="areaRow2">
              <Input
                id="descriptionArea"
                type="description"
                placeholder="Descrição"
                value={description_area}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="btnsNewArea">
            <BtnRed btnMessage="Cancelar" onClick={handleBack} />
            <Btn type="submit" btnMessage="Cadastrar" />
          </div>
        </form>
    </div>
  );
}