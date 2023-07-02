import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../../../css/App.css';
import '../../../css/styles.scss';
import './editCategory.scss'; 

import Btn from "../../../Components/brownBtnComponent/btn";
import Input from "../../../Components/inputComponent/input";
import Background from '../../../Components/backgroundComponent/background'
import Menu from '../../../Components/menuComponent/menu';
import DropdownInput from "../../../Components/dropdownInputComponent/dropdownInput";

import { getCategory, updateCategory } from "../../../Services/api";
import { AuthContext } from "../../../Contexts/auth";

export default function EditCategory() {
  const { handleEditCategory } = useContext(AuthContext);
  const { id_category } = useParams();
  const navigate = useNavigate();
  
  const [name, setCategoryName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const options = [
    { value: "Tangivel", label: "Tangível" },
    { value: "Intangivel", label: "Intangível" },
    { value: "Movel", label: "Móvel" },
    { value: "Imovel", label: "Imóvel" }
  ];

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        // const category = await handleEditCategory(id_category);
        const category = await getCategory(id_category);
        setCategoryName(category.name);
        setType(category.type);
        setDescription(category.description);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategory();
  }, [id_category]);


  const handleOptionChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateCategory(id_category, name, type, description);
      console.log("Categoria atualizada com sucesso!");
      navigate("/viewCategories");
    } catch (error) {
      console.log(error);
      // Exibir um modal de erro ou tratar o erro de alguma outra forma
    }
  };


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