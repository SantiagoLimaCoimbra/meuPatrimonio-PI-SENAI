import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import ErroDialog from '../Components/erroDialogComponent/erroDialog';

import {
    api,
    createSession,
    createUser,
    deleteCategory,
    createCategory,
    updateCategory,
    createEmployee,
    deleteEmployee,
    updateArea,
    createArea,
    deleteArea,
    getEmployee,
    getCategory,
    getArea,
    createItem,
    getAreaById
  } from '../Services/api';
  

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

            const token = response.token;
            const user = {
                name: response.name,
                id: response.id,
                cpf: response.cpf,
                email: response.email
            }

            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);

            api.defaults.headers.Authorization = `Bearer ${token}`;

            setUser(user);
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

    const handleEditCategory = async (id_category, name, type, description) => {
        try {
            await updateCategory(id_category, name, type, description);
            navigate(`/editCategory/${id_category}`);
        } catch (error) {
            //Fazer um modal de erro aparecer aqui
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

    const newArea = async (name_area, description_area, employee) => {
        
        try {
            await createArea(name_area, description_area, employee);
            navigate("/viewAreas");
        } catch (error) {
            handleErrorOpen("Verifique se os dados inseridos já não existem no sistema!");
            console.log(error);
        }
    }

    const getEmployeeData = async () => {
        try {
          const employees = await getEmployee();
          const employeeData = employees.map(({ id_employee, name_employee }) => ({
            id_employee,
            name_employee,
          }));
          return employeeData;
        } catch (error) {
          console.log(error);
          throw new Error("Erro ao obter dados dos funcionários");
        }
      };

      const getAreaData = async () => {
        try {
          const area = await getArea();
          const areaData = area.map(({ id_area, name_area }) => ({
            id_area,
            name_area,
          }));
          return areaData;
        } catch (error) {
          console.log(error);
          throw new Error("Erro ao obter dados das áreas");
        }
      };

      const getCategoryData = async () => {
        try {
          const category = await getCategory();
          const categoryData = category.map(({ id_category, name }) => ({
            id_category,
            name,
          }));
          return categoryData;
        } catch (error) {
          console.log(error);
          throw new Error("Erro ao obter dados das categorias");
        }
      };

      const newItem = async (name_asset, account_code, amount, registration_date, category, area) => {
        
        console.log("Dados do newItem do auth.jsx:", name_asset, account_code, amount, registration_date, category, area);

        try {
            await createItem(name_asset, account_code, amount, registration_date, category, area);
            console.log("cheguei")
            // navigate("/");
        } catch (error) {
            handleErrorOpen("Verifique se os dados inseridos já não existem no sistema!");
            console.log(error);
        }
    }
      
    const handleEditArea = async (name_area, description_area, employee) => {
        try {
            await updateCategory(name_area, description_area, employee);
            // navigate("/viewAreas");
        } catch (error) {
            //Fazer um modal de erro aparecer aqui
            console.log(error);
        }
    }      

    const handleDeleteArea = async (id_area) => {
        try {
            await deleteArea(id_area);
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
        value={{
          user,
          loading,
          login,
          logout,
          signIn,
          handleDelete,
          newArea,
          handleEditArea,
          handleDeleteArea,
          newCategory,
          handleEditCategory,
          newEmployee,
          handleDeleteEmployee,
          getEmployeeData,
          getAreaData,
          getCategoryData,
          newItem,
          
        }}
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