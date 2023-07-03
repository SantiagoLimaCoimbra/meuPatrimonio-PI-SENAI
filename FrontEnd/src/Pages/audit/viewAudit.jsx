import React, { useState, useEffect } from "react";
import './viewAudit.scss';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

import Menu from '../../Components/menuComponent/menu';
import { useNavigate } from "react-router-dom";
import { useFetchAudits } from "../../Services/api";
import { Pagination } from '@mui/lab';

export default function ViewAudit() {
  const audits = useFetchAudits();
  const navigate = useNavigate();
  
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;
  const pageCount = Math.ceil(audits.length / rowsPerPage);

  const handlePageChange = (e, value) => {
    setPage(value);
  };


  const cellTitles = [
    { key: "entity", label: "Tabela" },
    { key: "operation", label: "Operação realizada" },
    { key: "modifiedBy", label: "Admin" },
    { key: "modifiedAt", label: "Data de alteração" }
  ];


  return (
    <div className="viewAuditPage">
      <Menu />
      <div className="viewAudit">
        <div className="header">
          <div className="texts">
            <h1>Historico</h1>
            <label>Historico de ações no sistema</label>
          </div>
        </div>
        <Table
          data={audits}
          onPageChange={handlePageChange}
          idPropertyName="id_category"
          cellTitles={cellTitles}
        />

        <TableContainer component={Paper} className="container-table">
            <Table className="table">
                <TableHead className="table-head">
                <TableRow className="table-row">
                    {cellTitles.map((cellTitle) => (
                    <TableCell key={cellTitle.key}>{cellTitle.label}</TableCell>
                    ))}
                </TableRow>

                </TableHead>
                <TableBody>
                {audits.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row) => (
                <TableRow key={row.id_audit}>
                {cellTitles.map((cellTitle) => (
                    <TableCell key={cellTitle.key} className="table-cell">
                    {row[cellTitle.key]}
                    </TableCell>
                ))}
                </TableRow>
                ))}
                </TableBody>
            </Table>
            <Pagination className="pagination" count={pageCount} defaultPage={1} siblingCount={0} onChange={handlePageChange}/>
        </TableContainer>

      </div>
    </div>
  );
}
