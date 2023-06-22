import { React, useState, useContext } from "react";
import '../../../css/App.css';
import '../../../css/styles.scss';
import './editCategory.scss';

import Btn from "../../../Components/brownBtnComponent/btn";
import Input from "../../../Components/inputComponent/input";
import Background from '../../../Components/backgroundComponent/background'
import Menu from '../../../Components/menuComponent/menu';
import DropdownInput from "../../../Components/dropdownInputComponent/dropdownInput";

import { AuthContext } from "../../../Contexts/auth";

export default function EditCategory() {

    const { editCategory } = useContext(AuthContext);

    const [name, setCategoryName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");

    const options = [
        { value: "tangiveis", label: "Tangivel" },
        { value: "intangiveis", label: "Intangivel" },
        { value: "moveis", label: "Móvel" },
        { value: "imoveis", label: "Imóvel"}
      ];

    const handleOptionChange = (event) => {
        setType(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submit", {name, type, description} );
        editCategory(name, type, description);
    }
    
    return (
        <div className="editCategoryPage">
            <Menu />
            <Background />
            <div className="editCategory">
               
                <form onSubmit={handleSubmit} className="editCategoryForm">
                <h1>Editar categoria</h1>
                    <div className="inputsCategory">
                        <div className="categoryRow1">
                            <Input
                                id="name"
                                type={"text"}
                                placeholder={"Nome"}
                                value={name}
                                required={false}
                                onChange={(e) => setCategoryName(e.target.value)}
                            />
                            <DropdownInput
                                id="typeCategory"
                                type={"type"}
                                placeholder={"Tipo"}
                                value={type}
                                required={false}
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
                    <div className="btnsEditCategory">
                        <Btn type={"submit"} btnMessage={"Editar"} />
                    </div>
                </form>
            </div>
        </div>

    );
}