import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import "./erroDialog.scss";

export default function ConfirmDialog({ open, handleClose, dialogTitle, dialogMsg }) {

    return (
        <Dialog open={open} onClose={handleClose} className="error-dialog-container">
            <DialogTitle className="error-dialog-title">Sucesso!</DialogTitle>
            <DialogContent className="error-dialog-body">
                <p>{dialogMsg}</p>
            </DialogContent>
            <DialogActions className="error-dialog-options">
                <Button onClick={handleClose} className="btn-cancel" autoFocus>
                    Fechar
                </Button>
            </DialogActions>
        </Dialog>
    );
}
