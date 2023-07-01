import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import '../../../css/App.css';
import '../../../css/styles.scss';
import './viewUser.scss';

import Menu from '../../../Components/menuComponent/menu';
import Input from "../../../Components/inputComponent/input";
import { AuthContext } from "../../../Contexts/auth";

export default function ViewUser() {

    const { user } = useContext(AuthContext);

    return (
        <div className="viewUserPage">
            <Menu />
            <div className="viewUser">
            <form className="viewUserForm">
                <h1>Perfil</h1>
                <div className="inputsUser">
                        <Input
                            id="name"
                            type={"text"}
                            placeholder={"Nome"}
                            value={user.name}
                            readOnly={true}
                        />
                        <Input
                            id="email"
                            type={"text"}
                            placeholder={"E-mail"}
                            value={user.email}
                            readOnly={true}
                        />
                        <Input
                            id="cpf"
                            type={"text"}
                            placeholder={"CPF"}
                            value={user.cpf}
                            readOnly={true}
                        />
                </div>
            </form>
            </div>
        </div>

    );
}
