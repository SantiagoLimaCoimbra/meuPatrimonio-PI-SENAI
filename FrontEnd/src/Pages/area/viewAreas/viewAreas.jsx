import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../../css/App.css';
import '../../../css/styles.scss';
import './viewAreas.scss';

import Btn from "../../../Components/brownBtnComponent/btn";
import Menu from '../../../Components/menuComponent/menu';
import Table from "../../../Components/tableComponent/table";
import Dialog from "../../../Components/dialogComponent/dialog";
import ErroDialog from '../../../Components/erroDialogComponent/erroDialog';

import { useFetchAreas, deleteArea } from "../../../Services/api";

export default function ViewAreas() {

  const [openDialog, setOpenDialog] = useState(false);

  const [errorOpen, setErrorOpen] = useState(false); // Novo estado para controlar o diálogo de erro
  const [errorDialogMsg, setErrorDialogMsg] = useState("");

  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false); // Estado que indica se a exclusão ocorreu

  const areas = useFetchAreas();

  const navigate = useNavigate();

  const handlePageChange = (value) => {

  };

  const handleEditArea = (id_area) => {
    navigate(`/editArea/${id_area}`);
  };

  useEffect(() => {
    if (isDeleted) {
      window.location.reload(); // Recarrega a página após a exclusão
    }
  }, [isDeleted]);


  const handleOpenDialog = (id_area) => {
    setSelectedItemId(id_area);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleErrorOpen = (errorMessage) => {
    setErrorOpen(true);
    setErrorDialogMsg(errorMessage);
};

  const handleDelete = async (id_area) => {
    try {
      await deleteArea(id_area);
      handleCloseDialog();
      setIsDeleted(true);
    } catch (error) {
      handleCloseDialog();
      setIsDeleted(false);
      handleErrorOpen("Não é possível excluír uma área que possua um bem associado.");
    }
  };

  const cellTitles = [
    { key: "name_area", label: "Nome da área" },
    { key: "description_area", label: "Descrição" },
    { key: "name_employee", label: "Colaborador" }
  ];


  const handleNewArea = () => {
    navigate("/newArea");
  };


  return (
    <div className="viewAreasPage">
      <Menu />
      <div className="viewAreas">
        <div className="header">
          <div className="texts">
            <h1>Áreas</h1>
            <label>Todas as áreas cadastradas se encontram aqui!</label>
          </div>
          <div className="btn-new">
            <Btn btnMessage={"Novo"} onClick={handleNewArea} />
          </div>
        </div>

        <Table
          data={areas}
          onPageChange={handlePageChange}
          handleEdit={handleEditArea}
          handleOpenDialog={handleOpenDialog}
          idPropertyName="id_area"
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

        {errorOpen && (
          <ErroDialog
          open={errorOpen} // Estado que controla a exibição do diálogo
          handleClose={() => setErrorOpen(false)} // Função para fechar o diálogo
          dialogTitle="Ops!" // Título do diálogo
          dialogMsg={errorDialogMsg} // Mensagem de erro
      />
        )}

      </div>
    </div>
  );
}
