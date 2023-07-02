import { React, useState, useContext } from "react";
import '../../../css/App.css';
import '../../../css/styles.scss';
import './newCategory.scss';

import Btn from "../../../Components/brownBtnComponent/btn";
import BtnRed from "../../../Components/btnRedComponent/btnRed";
import Input from "../../../Components/inputComponent/input";
import Background from '../../../Components/backgroundComponent/background'
import Menu from '../../../Components/menuComponent/menu';
import DropdownInput from "../../../Components/dropdownInputComponent/dropdownInput";

import { AuthContext } from "../../../Contexts/auth";
import { useNavigate } from "react-router-dom";

export default function NewCategory() {

    const { newCategory } = useContext(AuthContext);

    const [name, setCategoryName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const options = [
        { value: "Tangivel", label: "Tangível" },
        { value: "Intangivel", label: "Intangivel" },
        { value: "Movel", label: "Móvel" },
        { value: "Imovel", label: "Imóvel"}
      ];

    const handleOptionChange = (event) => {
        setType(event.target.value);
    };

    const handleBack = (e) => {
        navigate("/viewCategories");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        newCategory(name, type, description === "" ? "Não possui descrição" : description);
    }
    
    return (
        <div className="newCategoryPage">
            <Menu />
            <Background />
               
                <form onSubmit={handleSubmit} className="newCategory">
                <h1>Cadastrar nova categoria</h1>
                    <div className="inputsCategory">
                        <div className="categoryRow1">
                            <Input
                                id="name"
                                type={"text"}
                                placeholder={"Nome"}
                                value={name}
                                required={true}
                                onChange={(e) => setCategoryName(e.target.value)}
                            />
                            <DropdownInput
                                id="typeCategory"
                                type={"type"}
                                placeholder={"Tipo"}
                                value={type}
                                required={true}
                                options={options}
                                onChange={handleOptionChange}
                            />
                        </div>
                        <div className="categoryRow2">
                            <Input
                                id="descriptionCategory"
                                type={"description"}
                                placeholder={"Descrição"}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="btnsNewCategory">
                        <BtnRed btnMessage={"Cancelar"} onClick={handleBack} />
                        <Btn type={"submit"} btnMessage={"Cadastrar"} />
                    </div>
                </form>
        </div>

    );
}