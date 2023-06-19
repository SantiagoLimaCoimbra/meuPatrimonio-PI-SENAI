import axios from "axios";
import { useEffect, useState } from "react";

export const api = axios.create({
    baseURL: 'http://localhost:8080',
})

export const createSession = async (cpf, password) => {
    try {
        const response = await api.post('/login', { cpf, password });
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error('Erro ao criar a sessão');
    }
};

export const createUser = async (name, email, cpf, password) => {
    try {
        const response = await api.post('/admins', { name, email, cpf, password });
        return response.data;
    } catch (error) {
        //Fazer um modal de erro
        console.log(error.response.data); // Imprime a resposta de erro do servidor
        throw new Error('Erro ao criar usuário');
    }
};


export const useFetchCategories = () => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await api.get('/categories');
          setCategories(response.data);
        } catch (error) {
          console.log(error);
        }
      };
  

export const createCategory = async (name, type, description) => {
    try {
      const response = await api.post('/categories', { name, type, description });
      return response.data;
    } catch (error) {
      //Fazer um modal de erro
      console.log(error.response.data); // Imprime a resposta de erro do servidor
      throw new Error('Erro ao criar categoria');
    }
}

      fetchData();
    }, []);
  
    return categories;
  };

  export const deleteCategory = async (id_category) => {
    try {
        const response = await api.delete(`/categories/${id_category}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error('Erro ao excluir a categoria');
    }
};

