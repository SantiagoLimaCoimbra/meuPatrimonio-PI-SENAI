import React, { useState } from "react";
import './table.scss';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Pagination } from '@mui/lab';
import DeleteIcon from "../../Assets/icons/delete-icon.svg";
import EditIcon from "../../Assets/icons/edit-icon.svg";

export default function TableComponent({ data, onPageChange, handleEdit, handleOpenDialog, id_category }) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;
  const pageCount = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (e, value) => {
    setPage(value);
    onPageChange(value);
  };

  const handleDeleteItem = (id_category) => {
    handleOpenDialog(id_category);
  };

  return (
    <TableContainer component={Paper} className="container-table">
      <Table className="table">
        <TableHead className="table-head">
          <TableRow className="table-row">
            <TableCell>Nome da categoria</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell className="table-btn-cell">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row) => (
            <TableRow key={row.id_category}>
              <TableCell className="table-cell">{row.name}</TableCell>
              <TableCell className="table-cell">{row.description}</TableCell>
              <TableCell className="table-cell type">{row.type}</TableCell>
              <TableCell className="table-btn-cell">
                <Button onClick={() => handleEdit(row.id_category)}>
                  <img src={EditIcon} alt="Edit" />
                </Button>
                <Button onClick={() => handleDeleteItem(row.id_category)}>
                  <img src={DeleteIcon} alt="Delete" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="pagination" count={pageCount} defaultPage={1} siblingCount={0} onChange={handlePageChange}/>
    </TableContainer>
  );
}
