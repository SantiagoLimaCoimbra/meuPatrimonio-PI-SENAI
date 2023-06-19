import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import "./dialog.scss";

export default function CustomDialog({ open, handleClose, handleDelete, id_category }) {

    const handleConfirmDelete = () => {
        handleDelete(id_category);
    };

    return (
        <Dialog open={open} onClose={handleClose} className="dialog-container">
            <DialogTitle className="dialog-title">ATENÇÃO!</DialogTitle>
            <DialogContent className="dialog-body">
                <p>Você confirma a exclusão deste item?</p>
            </DialogContent>
            <DialogActions className="dialog-options">
                <Button onClick={handleConfirmDelete} className="btn-delete">
                    Confirmar
                </Button>
                <Button onClick={handleClose} className="btn-cancel" autoFocus>
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    );
}
