import React, { useState, useEffect } from "react";
import '../../../css/App.css';
import '../../../css/styles.scss';
import './viewCategories.scss';

import Btn from "../../../Components/brownBtnComponent/btn";
import Menu from '../../../Components/menuComponent/menu';
import Table from "../../../Components/tableComponent/table";
import { useFetchCategories, deleteCategory  } from "../../../Services/api";
import Dialog from "../../../Components/dialogComponent/dialog";
import { useNavigate } from "react-router-dom";

export default function ViewCategories() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false); // Estado que indica se a exclusão ocorreu
  const categories = useFetchCategories();
  const navigate = useNavigate();


  const handlePageChange = (value) => {
    
  };

  const handleEdit = (id_category) => {
    navigate(`/editCategory/${id_category}`);
  };

  useEffect(() => {
    if (isDeleted) {
      window.location.reload(); // Recarrega a página após a exclusão
    }
  }, [isDeleted]);


  const handleOpenDialog = (id_category) => {
    setSelectedItemId(id_category);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDelete = async (id_category) => {
    try {
      await deleteCategory(id_category);
      handleCloseDialog();
      setIsDeleted(true);
    } catch (error) {
      console.log(error);
    }
  };

  const cellTitles = [
    { key: "name", label: "Nome da categoria" },
    { key: "description", label: "Descrição" },
    { key: "type", label: "Tipo" }
  ];

  const handleNewCategory = () => {
    navigate("/newCategory");
  };


  return (
    <div className="viewCategoriesPage">
      <Menu />
      <div className="viewCategories">
        <div className="header">
          <div className="texts">
            <h1>Categorias</h1>
            <label>Todas as categorias cadastradas se encontram aqui!</label>
          </div>
          <div className="btn-new">
            <Btn btnMessage={"Novo"} onClick={handleNewCategory}/>
          </div>
        </div>
        <Table
          data={categories}
          onPageChange={handlePageChange}
          handleEdit={handleEdit}
          handleOpenDialog={handleOpenDialog}
          idPropertyName="id_category"
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
