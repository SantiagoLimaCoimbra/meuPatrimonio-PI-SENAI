import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import '../../../css/App.css';
import '../../../css/styles.scss';
import './editItem.scss';

import Btn from "../../../Components/brownBtnComponent/btn";
import BtnRed from "../../../Components/btnRedComponent/btnRed";
import Input from "../../../Components/inputComponent/input";
import Background from '../../../Components/backgroundComponent/background'
import Menu from '../../../Components/menuComponent/menu';
import DropdownInput from "../../../Components/dropdownInputComponent/dropdownInput";

import { AuthContext } from "../../../Contexts/auth";
import { useNavigate } from "react-router-dom";

import { updateItem, getItemById } from "../../../Services/api";

export default function EditItem() {
  const { getAreaData, getCategoryData } = useContext(AuthContext);
  
  const { id_asset } = useParams();
  const [name_asset, setAssetName] = useState("");
  const [account_code, setAssetCode] = useState("");
  const [amount, setAmount] = useState("");
  const [registration_date, setDate] = useState("");

  const [area, setArea] = useState([]);
  const [areaData, setAreaData] = useState([]);

  const [category, setCategory] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  const navigate = useNavigate();

   
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const asset = await getItemById(id_asset);
        console.log(asset)
        setAssetName(asset.name_asset);
        setAssetCode(asset.account_code);
        setAmount(asset.amount);
        setDate(asset.registration_date);

        setArea(asset.area.id_area);
        setCategory(asset.category.id_category);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItem();
  }, [id_asset]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAreaData();
        setAreaData(data.map((area) => ({ value: area.id_area, label: area.name_area })));
        console.log("areaData:", areaData);
      } catch (error) {
        console.log(error); 
      }
    };
  
    fetchData();
  }, []);
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategoryData();
        setCategoryData(data.map((category) => ({ value: category.id_category, label: category.name })));
        console.log("categoryData:", categoryData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  const handleBack = () => {
    navigate("/");
  };

  const handleOptionChangeArea = (event) => {
    setArea(event.target.value);
  };

  const handleOptionChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    const account_codeValue = account_code.replace(/\D/g, "");

    try {
      await updateItem(id_asset,name_asset, account_codeValue, amount, registration_date, category, area);
      navigate("/");
      console.log("Bem atualizado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="newAreaPage">
      <Menu />
      <Background />
      <div className="newArea">
        <form onSubmit={handleSubmit} className="newAreaForm">
          <h1>Editar bem</h1>
          <div className="inputsArea">
            <Input
              id="name_asset"
              type="text"
              placeholder="Nome"
              value={name_asset}
              required={true}
              onChange={(e) => setAssetName(e.target.value)}
            />
            <Input
              id="asset_code"
              type="text"
              placeholder="Código contábil"
              value={account_code}
              required={true}
              mask={"0000-000-000"}
              onChange={(e) => setAssetCode(e.target.value)}
            />
            <Input
              id="amount"
              type="text"
              placeholder="Quantidade"
              value={amount}
              required={true}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Input
              id="registration_date"
              type="text"
              mask={"0000"}
              placeholder="Ano de registro"
              value={registration_date}
              required={true}
              onChange={(e) => setDate(e.target.value)}
            />
            <DropdownInput
              id="area"
              type="type"
              placeholder={"Área"}
              value={area}
              required={true}
              options={areaData}
              onChange={handleOptionChangeArea}
            />
            <DropdownInput
              id="category"
              type="type"
              placeholder={"Categoria"}
              value={category}
              required={true}
              options={categoryData}
              onChange={handleOptionChangeCategory}
            />
          </div>
          <div className="btnsNewArea">
            <BtnRed btnMessage="Cancelar" onClick={handleBack} />
            <Btn type="submit" btnMessage="Editar" />
          </div>
        </form>
      </div>
    </div>
  );
}
