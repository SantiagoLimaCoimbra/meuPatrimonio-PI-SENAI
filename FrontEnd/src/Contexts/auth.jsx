import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import ErroDialog from '../Components/erroDialogComponent/erroDialog';

import { api, createSession, createUser, 
    deleteCategory, createCategory, createEmployee, deleteEmployee } from '../Services/api';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorOpen, setErrorOpen] = useState(false); // Novo estado para controlar o diálogo de erro
    const [errorDialogMsg, setErrorDialogMsg] = useState("");

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);

    }, []);

    const login = async (cpf, password) => {
        try {
            const response = await createSession(cpf, password);
            console.log(response);
            console.log("login", response.data);

            let loggedUser;
            console.log(response.token);
            const token = response.token;

            if (token) {
                loggedUser = true;
                console.log("chegou");
            }

            localStorage.setItem("user", JSON.stringify(loggedUser));
            localStorage.setItem("token", token);

            api.defaults.headers.Authorization = `Bearer ${token}`;

            setUser(loggedUser);
            navigate("/");

        } catch (error) {
            console.log(error);
            handleErrorOpen("Verifique se o cpf e a senha estão corretos! Caso estejam, certifique-se de que estejam cadastrados no sistema.");
        }
    }

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        api.defaults.headers.Authorization = null;

        setUser(null);
        navigate("/login");
    }

    
    const signIn = async (name, email, cpf, password) => {
        try {
            await createUser(name, email, cpf, password);
            await createSession(cpf, password);
            navigate("/login");
    
        } catch (error) {
            handleErrorOpen("Verifique se os campos foram preenchidos corretamente. Caso estejam corretos, verifique se algum dos dados inseridos já existe no sistema! Tente entrar.");
            console.log(error);
        }
    };

    const newCategory = async (name, type, description) => {
        try {
            await createCategory(name, type, description);
            navigate("/viewCategories");
        } catch (error) {
            handleErrorOpen("Verifique se os dados inseridos já não existem no sistema!");
            console.log(error);
        }
    }

    const handleDelete = async (id_category) => {
        try {
            await deleteCategory(id_category);
        } catch (error) {
            console.log(error);
            handleErrorOpen("Não foi possível deletar a categoria!");
        }
    };

    const newEmployee = async (name_employee, cpf, email, position) => {
        try {
            await createEmployee(name_employee, cpf, email, position);
            navigate("/viewEmployees");
        } catch (error) {
            console.log(error);
            handleErrorOpen("Verifique se os dados inseridos já não existem no sistema!");
        }
    }

    const handleDeleteEmployee = async (id_employee) => {
        try {
            await deleteEmployee(id_employee);
        } catch (error) {
            console.log(error);
            handleErrorOpen("Não foi possível deletar o funcionário!");
        }
    }

    const handleErrorOpen = (errorMessage) => {
        setErrorOpen(true);
        setErrorDialogMsg(errorMessage);
    };

    return (
        <AuthContext.Provider
            value={{ user, loading, login, logout, signIn, handleDelete, newCategory, newEmployee, handleDeleteEmployee }}

        >
            {children}
            <ErroDialog
                open={errorOpen} // Estado que controla a exibição do diálogo
                handleClose={() => setErrorOpen(false)} // Função para fechar o diálogo
                dialogTitle="Ops!" // Título do diálogo
                dialogMsg={errorDialogMsg} // Mensagem de erro
            />
        </AuthContext.Provider>
    )

}