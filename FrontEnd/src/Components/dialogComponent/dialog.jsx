import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import "./dialog.scss";

export default function CustomDialog({ open, handleClose, handleDelete, idPropertyName, dialogTitle, dialogMsg }) {

    const handleConfirmDelete = () => {
        handleDelete(idPropertyName);
    };

    return (
        <Dialog open={open} onClose={handleClose} className="dialog-container">
            <DialogTitle className="dialog-title">{dialogTitle}!</DialogTitle>
            <DialogContent className="dialog-body">
                <p>{dialogMsg}</p>
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
