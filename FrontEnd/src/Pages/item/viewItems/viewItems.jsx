import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../../../css/App.css';
import '../../../css/styles.scss';
import './viewItems.scss';

import Btn from "../../../Components/brownBtnComponent/btn";
import Menu from '../../../Components/menuComponent/menu';
import Table from "../../../Components/tableComponent/table";
import Dialog from "../../../Components/dialogComponent/dialog";

import { useFetchItems, deleteItem } from "../../../Services/api";

export default function ViewItems() {

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false); // Estado que indica se a exclusão ocorreu
  const navigate = useNavigate();
  
  const items = useFetchItems();
  console.log(items);


  const handlePageChange = (value) => {
    
  };

  const handleEditItem = (id_asset) => {
    navigate(`/editItem/${id_asset}`);
  };

  useEffect(() => {
    if (isDeleted) {
      window.location.reload(); 
    }
  }, [isDeleted]);


  const handleOpenDialog = (id_asset) => {
    setSelectedItemId(id_asset);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDelete = async (id_asset) => {
    try {
      await deleteItem(id_asset);
      handleCloseDialog();
      setIsDeleted(true);
    } catch (error) {
      console.log(error);
    }
  };

  const cellTitles = [
    { key: "name_asset", label: "Nome do bem" },
    { key: "account_code", label: "Código contábil" },
    { key: "amount", label: "Quantidade" },
    { key: "registration_date", label: "Ano"},
    { key: "name_category", label: "Categoria" },
    { key: "name_area", label: "Área" },
  ];


  const handleNewItem = () => {
    navigate("/newItem");
  };


  return (
    <div className="viewAreasPage">
      <Menu />
      <div className="viewAreas">
        <div className="header">
          <div className="texts">
            <h1>Bens</h1>
            <label>Todas os bens cadastradas se encontram aqui!</label>
          </div>
          <div className="btn-new">
            <Btn btnMessage={"Novo"} onClick={handleNewItem}/>
          </div>
        </div>
        <Table
          data={items}
          onPageChange={handlePageChange}
          handleEdit={handleEditItem}
          handleOpenDialog={handleOpenDialog}
          idPropertyName="id_asset"
          cellTitles={cellTitles}
        />

        {openDialog && (
          <Dialog
            open={openDialog}
            dialogTitle={"ATENÇÃO!"}
            dialogMsg={"Você confirma a exclusão deste item?"}
            handleClose={handleCloseDialog}
            handleDelete={handleDelete}
            idPropertyName={selectedItemId}
          />
        )}
      </div>
    </div>
  );
}
