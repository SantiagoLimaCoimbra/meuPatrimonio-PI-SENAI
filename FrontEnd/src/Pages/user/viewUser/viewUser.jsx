import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "../../../css/App.css";
import "../../../css/styles.scss";
import "./viewUser.scss";

import { ReactComponent as IconLock } from "../../../Assets/icons/lock-icon.svg";

import Menu from "../../../Components/menuComponent/menu";
import Input from "../../../Components/inputComponent/input";
import Background from "../../../Components/backgroundComponent/background";

import { AuthContext } from "../../../Contexts/auth";

export default function ViewUser() {
  const { user } = useContext(AuthContext);

  return (
    <div className="viewUserPage">
      <Background />
      <Menu />
      <form className="viewUser">
        <div className="title">
          <div className="icon">
            <IconLock />
          </div>
        </div>
        <h1>Seus dados</h1>

        <div className="inputsUser">
          <label>Nome</label>
          <Input
            id="name"
            type={"text"}
            placeholder={"Nome"}
            value={user.name}
            readOnly={true}
          />

          <label>E-mail</label>
          <Input
            id="email"
            type={"text"}
            placeholder={"E-mail"}
            value={user.email}
            readOnly={true}
          />
          <label>CPF</label>
          <Input
            id="cpf"
            mask="000.000.000-00"
            type={"text"}
            placeholder={"CPF"}
            value={user.cpf}
            readOnly={true}
          />
        </div>
      </form>
    </div>
  );
}
