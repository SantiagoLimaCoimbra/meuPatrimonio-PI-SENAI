import React, { useState } from "react";
import './table.scss';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Pagination } from '@mui/lab';
import DeleteIcon from "../../Assets/icons/delete-icon.svg";
import EditIcon from "../../Assets/icons/edit-icon.svg";

export default function TableComponent({ data, onPageChange, handleEdit, handleOpenDialog, idPropertyName, cellTitles  }) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;
  const pageCount = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (e, value) => {
    setPage(value);
    onPageChange(value);
  };

  const handleDeleteItem = (id) => {
    handleOpenDialog(id);
  };

  return (
    <TableContainer component={Paper} className="container-table">
      <Table className="table">
        <TableHead className="table-head">
        <TableRow className="table-row">
            {cellTitles.map((cellTitle) => (
              <TableCell key={cellTitle.key}>{cellTitle.label}</TableCell>
            ))}
            <TableCell className="table-btn-cell">Ações</TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          {data.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row) => (
          <TableRow key={row[idPropertyName]}>
          {cellTitles.map((cellTitle) => (
            <TableCell key={cellTitle.key} className="table-cell">
              {row[cellTitle.key]}
            </TableCell>
          ))}
          <TableCell className="table-btn-cell">
            <Button onClick={() => handleEdit(row[idPropertyName])}>
              <img src={EditIcon} alt="Edit" />
            </Button>
            <Button onClick={() => handleDeleteItem(row[idPropertyName])}>
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
