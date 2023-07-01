import { React, useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import { useFetchAreas, getEmployee, updateArea } from "../../../Services/api";


export default function NewArea() {

    const { newArea } = useContext(AuthContext);
    const { id_employee } = useParams();
    const employee = updateArea();

    const areas = useFetchAreas();

    const [name_area, setAreaName] = useState("");
    const [description_area, setDescription] = useState("");
    const [name_employee, setEmployeeName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployee = async () => {
          try {
            const employee = await getEmployee(employee.id_employee);
            setEmployeeName(employee.name_employee);
            console.log("UAAAAAA")
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchEmployee();
      }, []);

    const handleOptionChange = (event) => {
        setEmployeeName(event.target.value);
    };

    const handleBack = (e) => {
        navigate("/viewAreas");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submit", {name_area, name_employee, description_area } );
        newArea(name_area, name_employee, description_area);
    }
    
    return (
        <div className="newAreaPage">
            <Menu />
            <Background />
            <div className="newArea">
               
                <form onSubmit={handleSubmit} className="newAreaForm">
                <h1>Cadastrar área</h1>
                    <div className="inputsArea">
                        <div className="areaRow1">
                            <Input
                                id="name_area"
                                type={"text"}
                                placeholder={"Nome"}
                                value={name_area}
                                required={true}
                                onChange={(e) => setAreaName(e.target.value)}
                            />
                            <DropdownInput
                                id="employee"
                                type={"type"}
                                placeholder={"Colaborador"}
                                value={name_employee}
                                required={true}
                                options={areas}
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
                    <div className="btnsNewArea">
                        <BtnRed btnMessage={"Cancelar"} onClick={handleBack} />
                        <Btn type={"submit"} btnMessage={"Cadastrar"} />
                    </div>
                </form>
            </div>
        </div>

    );
}