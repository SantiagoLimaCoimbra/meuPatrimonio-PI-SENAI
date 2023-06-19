import React, { useState, useEffect } from "react";
import '../../../css/App.css';
import '../../../css/styles.scss';
import './viewCategories.scss';

import Btn from "../../../Components/brownBtnComponent/btn";
import Menu from '../../../Components/menuComponent/menu';
import Table from "../../../Components/tableComponent/table";
import { useFetchCategories, deleteCategory  } from "../../../Services/api";
import Dialog from "../../../Components/dialogComponent/dialog";

export default function ViewCategories() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false); // Estado que indica se a exclusão ocorreu
  const categories = useFetchCategories();


  const handlePageChange = (value) => {
    // Lógica para alterar a página
  };

  const handleEdit = (id_category) => {
    // Levar para a página de edição
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
            <Btn btnMessage={"Novo"}/>
          </div>
        </div>
        <Table
          data={categories}
          onPageChange={handlePageChange}
          handleEdit={handleEdit}
          handleOpenDialog={handleOpenDialog}
        />
        {openDialog && (
          <Dialog
            open={openDialog}
            handleClose={handleCloseDialog}
            handleDelete={handleDelete}
            id_category={selectedItemId}
          />
        )}
      </div>
    </div>
  );
}
