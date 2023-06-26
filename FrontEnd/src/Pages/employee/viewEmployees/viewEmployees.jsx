import React, { useState, useEffect } from "react";
import '../../../css/App.css';
import '../../../css/styles.scss'
// import './viewCategories.scss';
import './viewEmployees.scss';

import Btn from "../../../Components/brownBtnComponent/btn";
import Menu from '../../../Components/menuComponent/menu';
import Table from "../../../Components/tableComponent/table";
import { deleteEmployee, useFetchEmployees  } from "../../../Services/api";
import Dialog from "../../../Components/dialogComponent/dialog";
import { useNavigate } from "react-router-dom";

export default function ViewCategories() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false); // Estado que indica se a exclusão ocorreu
  const employees = useFetchEmployees();
  const navigate = useNavigate();


  const handlePageChange = (value) => {
    
  };

  const handleEdit = (id_employee) => {
    navigate(`/editEmployee/${id_employee}`);
  };

  useEffect(() => {
    if (isDeleted) {
      window.location.reload(); // Recarrega a página após a exclusão
    }
  }, [isDeleted]);


  const handleOpenDialog = (id_employee) => {
    setSelectedItemId(id_employee);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDeleteEmployee = async (id_employee) => {
    try {
      await deleteEmployee(id_employee);
      handleCloseDialog();
      setIsDeleted(true);
    } catch (error) {
      console.log(error);
    }
  };

  const cellTitles = [
    { key: "name_employee", label: "Nome" },
    { key: "cpf", label: "CPF" },
    { key: "email", label: "Email" },
    { key: "position", label: "Cargo"}
  ];

  const handleNewEmployee = () => {
    navigate("/newEmployee");
  };


  return (
    <div className="viewCategoriesPage">
      <Menu />
      <div className="viewEmployees">
        <div className="header">
          <div className="texts">
            <h1>Funcionários</h1>
            <label>Todos os funcionários cadastrados se encontram aqui!</label>
          </div>
          <div className="btn-new">
            <Btn btnMessage={"Novo"} onClick={handleNewEmployee}/>
          </div>
        </div>
        <Table
          data={employees}
          onPageChange={handlePageChange}
          handleEdit={handleEdit}
          handleOpenDialog={handleOpenDialog}
          idPropertyName="id_employee"
          cellTitles={cellTitles}
        />
        {openDialog && (
          <Dialog
            open={openDialog}
            dialogTitle={"ATENÇÃO!"}
            dialogMsg={"Você confirma a exclusão deste item?"}
            handleClose={handleCloseDialog}
            handleDelete={handleDeleteEmployee}
            idPropertyName={selectedItemId}
          />
        )}
      </div>
    </div>
  );
}
