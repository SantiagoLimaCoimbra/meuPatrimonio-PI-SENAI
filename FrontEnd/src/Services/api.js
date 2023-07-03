import axios from "axios";
import { useEffect, useState } from "react";

const getToken = () => {
  const token = localStorage.getItem("token");

  return Boolean(token) ? `Bearer ${token}` : undefined;
};

export const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: getToken(),
  },
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
  try {
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
    console.log(error.response.data); 
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
  try {
    const response = await api.put("/categories", {
      id_category,
      name,
      type,
      description,
    });
    return response.data;
  } catch (error) {
    //Fazer um modal de erro
    console.log(error.response.data);
    throw new Error("Erro ao editar categoria");
  }
};

export const getCategory = async () => {
  try{
    const response = await api.get("/categories");
    return response.data;
  } catch (error) {
    //Fazer um modal de erro
    console.log(error.response.data);
    throw new Error("Erro ao retornar categoria");
  }
};

export const getCategoryById = async (id_category) => {
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

//AREA

export const useFetchAreas = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/areas");
        setAreas(
          response.data.map(({ employee, ...rest }) => ({
            ...rest,
            name_employee: employee.name_employee,
          }))
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return areas;
};

export const createArea = async (name_area, description_area, employee_id) => {
  const employee = { id_employee: employee_id };

  try {
    const response = await api.post("/areas", {
      name_area,
      description_area,
      employee,
    });
    return response.data;
  } catch (error) {
    //Fazer um modal de erro
    console.log("employee:", employee);
    console.log(error.response.data);
    throw new Error("Erro ao criar area");
  }
};

export const updateArea = async (
  id_area,
  name_area,
  description_area,
  employee_id
) => {
  const employee = { id_employee: employee_id };
  try {
    const response = await api.put("/areas", {
      id_area,
      name_area,
      description_area,
      employee,
    });
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw new Error("Erro ao editar área");
  }
};

export const getArea = async () => {
  try{
    const response = await api.get(`/areas`);

    return response.data;
  } catch (error) {
    //Fazer um modal de erro
    console.log(error.response.data);
    throw new Error("Erro ao retornar dados área");
  }
};

export const getAreaById = async (id_area) => {
  try {
    const response = await api.get(`/areas/${id_area}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao obter area");
  }
};

export const deleteArea = async (id_area) => {
  try {
    const response = await api.delete(`/areas/${id_area}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao excluir a área");
  }
};

export const useFetchEmployees = () => {
  const [employees, setEmployees] = useState([]);

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

  return employees;
};



export const createEmployee = async (name_employee, cpf, email, position) => {
  try {
    const response = await api.post("/employees", {
      name_employee,
      cpf,
      email,
      position,
    });
    return response.data;
  } catch (error) {
    //Fazer um modal de erro
    console.log(error.response.data); // Imprime a resposta de erro do servidor
    throw new Error("Erro ao criar employees");
  }
};

export const updateEmployee = async (
  id_employee,
  name_employee,
  cpf,
  email,
  position
) => {
  try {
    const response = await api.put("/employees", {
      id_employee,
      name_employee,
      cpf,
      email,
      position,
    });
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw new Error("Erro ao editar funcionário");
  }
};

export const getEmployee = async () => {
  try {
    const response = await api.get("/employees");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao obter funcionários");
  }
};

export const getEmployeeById = async (id_employee) => {
  try {
    const response = await api.get(`/employees/${id_employee}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao obter funcionários");
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

export const useFetchItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/assets");
        setItems(response.data.map( ({ area, category, ...rest }) => ({
          ...rest,
          name_area: area.name_area,
          name_category: category.name
        }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return items;
};

export const deleteItem = async (account_code) => {
  try {
    const response = await api.delete(`/assets/${account_code}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao excluir item");
  }
};

//AQUI QUE NAO TA DANDO
export const createItem = async (name_asset, account_code, amount, registration_date, category, area) => {

  console.log("Cheguei no createItem com os seguintes dados:", name_asset, account_code, amount, registration_date, category, area);

  try {
    console.log("Cheguei dentro do try de createItem");
    // const response = await api.post("/areas", { name_asset, account_code, amount, registration_date, category, area});
    const response = await api.post("/assets", { name_asset, account_code, amount, registration_date, category: {id_category: category}, area: {id_area: area}});
    return response.data;
  } catch (error) {
    console.log(error.response.data); 
    throw new Error("Erro ao criar item");
  }
};

export const getItemById = async (id_item) => {
  try {
    const response = await api.get(`/assets/${id_item}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao obter funcionários");
  }
};

export const updateItem = async (
  id_asset,
  name_asset,
  account_code,
  amount,
  registration_date,
  category_id,
  area_id
) => {
  const category = { id_category: category_id };
  const area = { id_area: area_id};
  try {
    const response = await api.put("/assets", {
      id_asset,
      name_asset,
      account_code,
      amount,
      registration_date,
      category,
      area
    });
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    console.log(error)
    throw new Error("Erro ao editar bem");
  }
};
