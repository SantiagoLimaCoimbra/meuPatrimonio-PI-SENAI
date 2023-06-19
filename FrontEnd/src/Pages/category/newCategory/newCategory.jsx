import { React, useState, useContext } from "react";
import '../../../css/App.css';
import '../../../css/styles.scss';
import './newCategory.scss';

import Btn from "../../../Components/brownBtnComponent/btn";
import Input from "../../../Components/inputComponent/input";
import Background from '../../../Components/backgroundComponent/background'
import Menu from '../../../Components/menuComponent/menu';
import DropdownInput from "../../../Components/dropdownInputComponent/dropdownInput";

import { AuthContext } from "../../../Contexts/auth";

export default function NewCategory() {

    const { newCategory } = useContext(AuthContext);

    const [name, setCategoryName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");

    const options = [
        { value: "PERMANENTE", label: "Permanente" },
        { value: "CONSUMIVEL", label: "Consumível" },
        { value: "opcao3", label: "eba3" },
      ];

    const handleOptionChange = (event) => {
        setType(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submit", {name, type, description } );
        newCategory(name, type, description);
    }
    
    return (
        <div className="newCategoryPage">
            <Menu />
            <Background />
            <div className="newCategory">
               
                <form onSubmit={handleSubmit} className="newCategoryForm">
                <h1>Cadastrar categoria</h1>
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
                        <Btn type={"submit"} btnMessage={"Cadastrar"} />
                    </div>
                </form>
            </div>
        </div>

    );
}