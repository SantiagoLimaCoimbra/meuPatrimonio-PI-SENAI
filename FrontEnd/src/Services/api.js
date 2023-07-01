import axios from "axios";
import { useEffect, useState } from "react";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const createSession = async (cpf, password) => {
  try {
    const response = await api.post("/login", { cpf, password });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao criar a sessão");
  }
};

export const getUser = async (id) => {
  try{
    const response = await api.get(`/admins/${id}`);
    return response.data;
  } catch (error) {
    //Fazer um modal de erro
    console.log(error.response.data);
    throw new Error("Erro ao retornar usuário");
  }
};

export const createUser = async (name, email, cpf, password) => {
  try {
    const response = await api.post("/admins", { name, email, cpf, password });
    return response.data;
  } catch (error) {
    //Fazer um modal de erro
    console.log(error.response.data); // Imprime a resposta de erro do servidor
    throw new Error("Erro ao criar usuário");
  }
};



export const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/categories");
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return categories;
};

export const createCategory = async (name, type, description) => {
  try {
    const response = await api.post("/categories", { name, type, description });
    return response.data;
  } catch (error) {
    //Fazer um modal de erro
    console.log(error.response.data); // Imprime a resposta de erro do servidor
    throw new Error("Erro ao criar categoria");
  }
};

export const updateCategory = async (id_category, name, type, description) => {
  try{
    const response = await api.put("/categories", {id_category, name, type, description });
    return response.data;
  } catch (error) {
    //Fazer um modal de erro
    console.log(error.response.data);
    throw new Error("Erro ao editar categoria");
  }
};

export const getCategory = async (id_category) => {
  try{
    const response = await api.get(`/categories/${id_category}`);
    return response.data;
  } catch (error) {
    //Fazer um modal de erro
    console.log(error.response.data);
    throw new Error("Erro ao retornar categoria");
  }
};

export const deleteCategory = async (id_category) => {
  try {
    const response = await api.delete(`/categories/${id_category}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao excluir a categoria");
  }
};

export const useFetchEmployees = () => {
  const [employess, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/employees");
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return employess;
};

export const createEmployee = async (name_employee, cpf, email, position) => {
  try {
    const response = await api.post("/employees", { name_employee, cpf, email, position });
    return response.data;
  } catch (error) {
    //Fazer um modal de erro
    console.log(error.response.data); // Imprime a resposta de erro do servidor
    throw new Error("Erro ao criar employees");
  }
};

export const updateEmployee = async (id_employee, name_employee, cpf, email, position) => {
  try{
    const response = await api.put("/employees", { id_employee, name_employee, cpf, email, position });
    return response.data;
  } catch (error) {
    //Fazer um modal de erro
    console.log(error.response.data);
    throw new Error("Erro ao editar funcionário");
  }
};

export const getEmployee = async (id_employee) => {
  try{
    const response = await api.get(`/employees/${id_employee}`);
    return response.data;
  } catch (error) {
    //Fazer um modal de erro
    console.log(error.response.data);
    throw new Error("Erro ao retornar Funcionário");
  }
};

export const deleteEmployee = async (id_employee) => {
  try {
    const response = await api.delete(`/employees/${id_employee}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao excluir o funcionário");
  }
};