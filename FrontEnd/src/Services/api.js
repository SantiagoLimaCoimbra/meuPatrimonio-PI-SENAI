import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8080',
})

// export const createSession = async (cpf, password) => {
//     // esse "/login" é o caminho em que os dados de usuário estao sendo salvos ?
    
//     const json = JSON.stringify({ cpf: cpf, password: password });

//     const res = await axios.post('http://localhost:8080/login', json, {
//         headers: {
//             // Overwrite Axios's automatically set Content-Type
//             'Content-Type': 'application/json'
//     }
//     });

//     return res;


//     // return api.post('/login', json);
// }

export const createSession = async (cpf, password) => {
    try {
        const response = await api.post('/login', { cpf, password });
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error('Erro ao criar a sessão');
    }
};

// estrutura do payload está  dando erro
// o payload é o corpo da requisição (cpf e password)